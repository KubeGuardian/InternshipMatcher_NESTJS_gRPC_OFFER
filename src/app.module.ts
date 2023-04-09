/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OfferModule } from './offer/offer.module';
import { ConfigModule } from '@nestjs/config'
import { HealthModule } from './health/health.module';
import { PrometheusModule } from './prometheus/prometheus.module';
import { MetricsModule } from './metrics/metrics.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOSTDB,
      port: 5432,
      database: 'offerdb',
      username: 'postgres',
      password: process.env.PASSDB,
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true, // never true in production!
    }),
    OfferModule, ConfigModule.forRoot(), HealthModule, PrometheusModule, MetricsModule,HttpModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
