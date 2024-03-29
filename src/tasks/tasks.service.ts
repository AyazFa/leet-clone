import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private readonly tasks: CreateTaskDto[] = [
    new CreateTaskDto(1,'Test'),
    new CreateTaskDto(2,'Technical task'),
    new CreateTaskDto(3,'Issue'),    
  ];

  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }

  findAll() {   
    return this.tasks;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
