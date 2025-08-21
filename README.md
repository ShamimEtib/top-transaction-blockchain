<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ yarn install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

## API Endpoint

### Get Top 10 Largest Bitcoin Transactions (last 1 hour)

**URL:**  
`GET http://localhost:3000/bitcoin/transactions/largest`

**Response Example:**

```json
{
  "message": "Top 10 largest transactions by size from the last hour.",
  "data": [
    {
      "txid": "e793b218efcdf8e916e4ce9b43fbcf899fb23edcf769ae67dad1f3bb6661eabe",
      "size_bytes": 107057,
      "fee_satoshis": 116116,
      "status": {
        "confirmed": true,
        "block_height": 911035,
        "block_hash": "000000000000000000021e4f97d1d71027ac87d864994d69fc348c5258e7dd21",
        "block_time": 1755785451
      }
    },
    {
      "txid": "0366a7268ed51a978227bfd546e08a4300fa6a3414ad3785b41b3271123496ff",
      "size_bytes": 93909,
      "fee_satoshis": 43682,
      "status": {
        "confirmed": true,
        "block_height": 911033,
        "block_hash": "00000000000000000000560746dc28f52b99900dbdda5abef591d4f36a4b7668",
        "block_time": 1755784702
      }
    },
    {
      "txid": "5c9b4cdccd2644fc24f0a345ad81d96d4a93fdeec0ee22ce6d6b120de84456e0",
      "size_bytes": 78492,
      "fee_satoshis": 36506,
      "status": {
        "confirmed": true,
        "block_height": 911033,
        "block_hash": "00000000000000000000560746dc28f52b99900dbdda5abef591d4f36a4b7668",
        "block_time": 1755784702
      }
    },
    {
      "txid": "5c4dc438debd5d617025d2b2c815acff08b92a8cc7f3917609b91a4e444ecf0e",
      "size_bytes": 74957,
      "fee_satoshis": 81316,
      "status": {
        "confirmed": true,
        "block_height": 911035,
        "block_hash": "000000000000000000021e4f97d1d71027ac87d864994d69fc348c5258e7dd21",
        "block_time": 1755785451
      }
    },
    {
      "txid": "c6062d4bbe0e1d27495f17d0c2277df4d50da36573be279dae102933f3247470",
      "size_bytes": 73792,
      "fee_satoshis": 78310,
      "status": {
        "confirmed": true,
        "block_height": 911036,
        "block_hash": "00000000000000000001873b16dd5ed6857ad929653aa40420ea38eedd980169",
        "block_time": 1755785553
      }
    },
    {
      "txid": "57752bd2a0407f26d2828de986a1ab7284a15d43bd85bf58379949eeac74a8c5",
      "size_bytes": 73785,
      "fee_satoshis": 78310,
      "status": {
        "confirmed": true,
        "block_height": 911035,
        "block_hash": "000000000000000000021e4f97d1d71027ac87d864994d69fc348c5258e7dd21",
        "block_time": 1755785451
      }
    },
    {
      "txid": "a37404e10b17a25a5d5e9922c2253d2fde70514d95a538f4dfc21c7de077dee3",
      "size_bytes": 67681,
      "fee_satoshis": 73428,
      "status": {
        "confirmed": true,
        "block_height": 911035,
        "block_hash": "000000000000000000021e4f97d1d71027ac87d864994d69fc348c5258e7dd21",
        "block_time": 1755785451
      }
    },
    {
      "txid": "a14ab056bad9ecfce8d20c6d8c5ced232e1afc0c3ae27292e953fba5c71c3ecb",
      "size_bytes": 58918,
      "fee_satoshis": 21120,
      "status": {
        "confirmed": true,
        "block_height": 911032,
        "block_hash": "0000000000000000000121dc994959e44e0fa09bd4493bf697821e42bce6a1f6",
        "block_time": 1755784352
      }
    },
    {
      "txid": "82cc9d3a4457a8fda8f62f4a46e4568057e8b80bc4650d4cf13a6d09ca766f77",
      "size_bytes": 53557,
      "fee_satoshis": 58116,
      "status": {
        "confirmed": true,
        "block_height": 911035,
        "block_hash": "000000000000000000021e4f97d1d71027ac87d864994d69fc348c5258e7dd21",
        "block_time": 1755785451
      }
    },
    {
      "txid": "472ccd263942590bb05fd68aaa64a244eece584fa355c3970cd97e67303e4127",
      "size_bytes": 53378,
      "fee_satoshis": 34698,
      "status": {
        "confirmed": true,
        "block_height": 911032,
        "block_hash": "0000000000000000000121dc994959e44e0fa09bd4493bf697821e42bce6a1f6",
        "block_time": 1755784352
      }
    }
  ]
}
```
