import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}

    // @Get()
    // getTasks(@Query(ValidationPipe) filterDto: GetTaskFilterDto): Task[] {
    //     if(Object.keys(filterDto).length) {
    //         return this.taskService.getTaskWithFilters(filterDto);
    //     } else {
    //         return this.taskService.getAllTasks();
    //     }
    // }

    // @Get()
    // getAllTasks(): Task[]{
    //    return this.taskService.getAllTasks(); 
    // }

    // @Get('/:id')
    // getTaskById(@Param('id') id: string) {
    //     return this.taskService.getTaskById(id);
    // }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createTask(@Body() createTaskDto: CreateTaskDto): Task{
    //     return this.taskService.createTask(createTaskDto);
    // }

    // @Delete('/:id')
    // deleteTask(@Param('id') id: string){
    //     return this.taskService.deleteTask(id);
    // }


    // @Patch('/:id/status')
    // updateTaskStatus(@Param('id') id: string,@Body('status', TaskStatusValidationPipe) status: TaskStatus): Task{
    //     return this.taskService.updateTaskStatus(id, status);
    // }


}
