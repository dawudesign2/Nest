import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessage } from '../dtos/createMessage.dto';

@Controller('message')
export class MessageController {
  @Get()
  listMessage(): string {
    return 'Hello World!';
  }

  @Get(':id')
  getMessage(@Param('id') id: string): void {
    console.log(id);
  }

  @Post()
  createMessage(@Body() message: CreateMessage): void {
    console.log(message);
  }
}
