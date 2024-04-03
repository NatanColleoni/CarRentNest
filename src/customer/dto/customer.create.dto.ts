import { ApiProperty } from '@nestjs/swagger';

export class CustomerCreateDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  email: string;
}
