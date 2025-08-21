import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class BitcoinService {
  private readonly BASE_URL = 'https://mempool.space/api';
  private readonly logger = new Logger(BitcoinService.name);

  constructor(private readonly httpService: HttpService) {}

  async getLargestTransactions(numBlocks = 6): Promise<any[]> {
    this.logger.log(`Starting to fetch the top ${numBlocks} blocks.`);

    try {
      // Step 1: Get the list of recent blocks
      this.logger.log('Fetching the list of recent blocks...');
      const blocksResponse = await firstValueFrom(
        this.httpService.get(`${this.BASE_URL}/v1/blocks`),
      );
      const blocks = blocksResponse.data;
      this.logger.log(`Successfully fetched ${blocks.length} recent blocks.`);

      // Filter blocks from the last hour (or the number of blocks specified)
      const recentBlocks = blocks.slice(0, numBlocks);

      const allTransactions = [];

      // Step 2: Iterate through recent blocks and fetch transactions
      // Step 2: Iterate through recent blocks and fetch transactions
      for (const block of recentBlocks) {
        const blockHash = block.id;
        this.logger.log(
          `Processing block with height ${block.height} and hash ${blockHash}`,
        );

        // Fetch the first 25 transactions
        this.logger.log('Fetching first page of transactions...');
        const firstTxsResponse = await firstValueFrom(
          this.httpService.get(`${this.BASE_URL}/block/${blockHash}/txs`),
        );
        const blockTransactions: any[] = firstTxsResponse.data;
        allTransactions.push(...blockTransactions);
        this.logger.log(
          `Successfully fetched ${blockTransactions.length} transactions for the first page.`,
        );

        // Step 3: Handle pagination to get all transactions
        let transactionIndex = 25;
        while (true) {
          try {
            this.logger.log(
              `Fetching next page of transactions starting from index ${transactionIndex}...`,
            );
            const nextTxsResponse = await firstValueFrom(
              this.httpService.get(
                `${this.BASE_URL}/block/${blockHash}/txs/${transactionIndex}`,
              ),
            );
            const moreTxs = nextTxsResponse.data;

            if (!moreTxs || moreTxs.length === 0) {
              this.logger.log(
                `End of transactions for block ${block.height}. Total fetched: ${transactionIndex}`,
              );
              break;
            }

            allTransactions.push(...moreTxs);
            transactionIndex += moreTxs.length;
            this.logger.log(
              `Fetched an additional ${moreTxs.length} transactions.`,
            );
          } catch (error) {
            if (error.response && error.response.status === 404) {
              this.logger.log(
                `Received 404 Not Found. Assuming end of transactions for block ${block.height}.`,
              );
              break; // Gracefully exit the loop on 404
            }
            // Re-throw other errors
            this.logger.error(
              `Error fetching transactions for block ${block.height}: ${error.message}`,
            );
            throw error;
          }
        }
      }

      // Step 4: Sort by size and return top 10
      this.logger.log(
        `Finished fetching transactions for all blocks. Total transactions: ${allTransactions.length}`,
      );
      this.logger.log('Sorting transactions by size...');
      allTransactions.sort((a, b) => b.size - a.size);

      const top10 = allTransactions.slice(0, 10);
      this.logger.log(
        'Successfully found and sorted the top 10 largest transactions.',
      );

      return top10;
    } catch (error) {
      this.logger.error(`A critical error occurred: ${error.message}`);
      // This will log the entire error object for detailed debugging
      if (error.response) {
        this.logger.error(
          `Error details: Status ${error.response.status}, Data: ${JSON.stringify(error.response.data)}`,
        );
      }
      throw new InternalServerErrorException('An unexpected error occurred.');
    }
  }
}
