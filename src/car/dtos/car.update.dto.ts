import { ApiProperty } from '@nestjs/swagger';

export class CarUpdateDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  releaseYear: Date;

  @ApiProperty()
  available: boolean;

  @ApiProperty()
  gasAvailable: boolean;
}
