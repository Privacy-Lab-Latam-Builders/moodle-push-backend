import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { providerProvider, signerProvider } from './contracts.provider';
import config from 'src/config/config';
import { ContractsService } from './contracts.service';
import { ContractsController } from './contracts.controller';

@Module({
  controllers: [ContractsController],
  imports: [ConfigModule.forFeature(config)],
  providers: [signerProvider, providerProvider, ContractsService],
  exports: ['SIGNER', 'PROVIDER', ContractsService],
})
export class ContractsModule {}
