import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ required: true, description: '用户名' })
  readonly account: string;

  @ApiProperty({ required: true, description: '密码' })
  readonly password: string;
}
