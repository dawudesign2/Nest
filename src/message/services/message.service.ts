import { MessageRepository } from '../repositories/message.repository';
import { CreateMessage } from '../dtos/createMessage.dto';
export class MessageService {
  constructor(private messageRepository: MessageRepository) {}
  async findOne(id: string) {
    return this.messageRepository.findOne(id);
  }
  async findAll() {
    return this.messageRepository.findAll();
  }
  async create(message: CreateMessage) {
    return this.messageRepository.create(message);
  }
}
