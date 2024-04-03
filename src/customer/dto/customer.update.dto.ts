import { ApiProperty } from '@nestjs/swagger';

export class CustomerUpdateDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  email: string;
}
