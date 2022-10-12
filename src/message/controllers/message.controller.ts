import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessage } from '../dtos/createMessage.dto';
import { MessageService } from '../services/message.service';

@Controller('message')
export class MessageController {
  messageService: MessageService;
  constructor() {
    this.messageService = new MessageService();
  }
  @Get()
  listMessage() {
    return this.messageService.findAll();
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    return this.messageService.findOne(id);
  }

  @Post()
  createMessage(@Body() message: CreateMessage) {
    return this.messageService.create(message);
  }
}
