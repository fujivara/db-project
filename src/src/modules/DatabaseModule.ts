import { Module } from '@nestjs/common';
import { DatasourceProviders } from '../db/DatasourceProviders';


@Module({
  providers: [...DatasourceProviders],
  exports: [...DatasourceProviders],
})

export class DatabaseModule {}
