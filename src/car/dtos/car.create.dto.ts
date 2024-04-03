import { ApiProperty } from '@nestjs/swagger';

export class CarCreateDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  releaseYear: Date;

  @ApiProperty()
  available: boolean;

  @ApiProperty()
  gasAvailable: boolean;
}
