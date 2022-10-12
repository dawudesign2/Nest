import { readFile, writeFile } from 'fs/promises';
import { CreateMessage } from '../dtos/createMessage.dto';

export class MessageRepository {
  async findOne(id: string) {
    const messages = await readFile('messages.json', 'utf-8');
    const parsedMessages = JSON.parse(messages);

    return parsedMessages[id];
  }

  async findAll() {
    const messages = await readFile('messages.json', 'utf-8');
    const parsedMessages = JSON.parse(messages);

    return parsedMessages;
  }

  async create(message: CreateMessage) {
    const messages = await readFile('messages.json', 'utf-8');
    const parsedMessages = JSON.parse(messages);

    const id = Math.floor(Math.random() * 999);

    parsedMessages[id] = {
      id,
      ...message,
    };
    await writeFile('messages.json', JSON.stringify(parsedMessages));
  }
}
