import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { BitcoinService } from './bitcoin.service';

@Controller('bitcoin')
export class BitcoinController {
  constructor(private readonly bitcoinService: BitcoinService) {}

  @Get('transactions/largest')
  @HttpCode(HttpStatus.OK)
  async getLargestTransactions(): Promise<any> {
    const transactions = await this.bitcoinService.getLargestTransactions();

    // Customize the output to show relevant fields
    const formattedTransactions = transactions.map((tx) => ({
      txid: tx.txid,
      size_bytes: tx.size,
      fee_satoshis: tx.fee,
      vin_count: tx.vin_count,
      vout_count: tx.vout_count,
      status: tx.status,
    }));

    return {
      message: 'Top 10 largest transactions by size from the last hour.',
      data: formattedTransactions,
    };
  }
}
