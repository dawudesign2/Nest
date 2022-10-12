import { IsString } from 'class-validator';
export class CreateMessage {
  @IsString()
  message: string;
}
