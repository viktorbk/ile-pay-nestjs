import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { CatsModule } from './cats/cats.module';

import { MongooseModule } from '@nestjs/mongoose';
import { DevtoolsModule } from "@nestjs/devtools-integration";
import { CarsModule } from './cars/cars.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGO_URI,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    UserModule,
    CatsModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    CarsModule,
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
