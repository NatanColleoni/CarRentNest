import { ApiProperty } from '@nestjs/swagger';

export class CarCategoryUpdateDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  carIds: string[];

  @ApiProperty()
  price: number;
}
