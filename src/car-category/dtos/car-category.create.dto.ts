import { ApiProperty } from '@nestjs/swagger';

export class CarCategoryCreateDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  carIds: string[];

  @ApiProperty()
  price: number;
}
