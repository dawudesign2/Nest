import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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
  createMessage(@Body() message: string): void {
    console.log(message);
  }
}
