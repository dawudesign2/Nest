import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
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
  async getMessage(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found');
    }
    return message;
  }

  @Post()
  createMessage(@Body() message: CreateMessage) {
    return this.messageService.create(message);
  }
}
