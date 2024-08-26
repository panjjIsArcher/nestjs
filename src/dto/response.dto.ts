import { ApiProperty } from '@nestjs/swagger';

export class ResponseDto<T> {
  @ApiProperty({ description: '返回的数据data' })
  data: T;

  @ApiProperty({ description: '状态码' })
  code: number;

  @ApiProperty({ description: '消息' })
  message: string;

  constructor(code: number, data: T, message: string) {
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
