import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  db: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  contracts: {
    publicAddress: process.env.PUBLIC_ADDRESS,
    privateKey: process.env.PRIVATE_KEY,
    providerURL: process.env.PROVIDER_URL,
    providerProjectId: process.env.PROVIDER_PROJECT_ID,
    providerApiKey: process.env.PROVIDER_API_KEY,
  },
}));
