import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionController } from '../controllers/session.controller';
import { SessionService } from '../services/session.service';
import { Session } from '../entity/session.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Session])],
  controllers: [SessionController],
  providers: [SessionService],
})
export class SessionModule {}
