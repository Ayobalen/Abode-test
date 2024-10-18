import { Test, TestingModule } from '@nestjs/testing';
import { TaskResolver } from 'src/api/task/task.resolver';
import { TaskService } from 'src/api/task/task.service';
import { TaskDto, UpdateTaskDto } from 'src/api/task/dtos';
import { TaskType } from 'src/api/task/schema/task.type';
import { NotFoundException } from '@nestjs/common';

const mockTaskService = {
  createNewTask: jest.fn(),
  getTask: jest.fn(),
  updateTask: jest.fn(),
  deleteTask: jest.fn(),
};

describe('TaskResolver', () => {
  let resolver: TaskResolver;
  let taskService: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskResolver,
        {
          provide: TaskService,
          useValue: mockTaskService,
        },
      ],
    }).compile();

    resolver = module.get<TaskResolver>(TaskResolver);
    taskService = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('createTask', () => {
    it('should create a new task', async () => {
      const taskDto: TaskDto = {
        assignedTo: 'User1',
        title: 'New Task',
        description: 'Task Description',
        priority: 'High',
        status: 'Pending',
        completed: false,
      };
      mockTaskService.createNewTask.mockResolvedValue(taskDto);

      const result = await resolver.createTask(taskDto);
      expect(result).toEqual(taskDto);
      expect(taskService.createNewTask).toHaveBeenCalledWith(taskDto);
    });
  });

  describe('getTask', () => {
    it('should return a task', async () => {
      const filter = { _id: '1' };
      mockTaskService.getTask.mockResolvedValue(filter);

      const result = await resolver.getTask(filter);
      expect(result).toEqual(filter);
      expect(taskService.getTask).toHaveBeenCalledWith(filter);
    });
  });

  describe('updateTask', () => {
    it('should update a task', async () => {
      const updateDto: UpdateTaskDto = { title: 'Updated Title' };
      const taskId = '1';
      mockTaskService.updateTask.mockResolvedValue({ ...updateDto, _id: taskId });

      const result = await resolver.updateTask(taskId, updateDto);
      expect(result).toEqual({ ...updateDto, _id: taskId });
      expect(taskService.updateTask).toHaveBeenCalledWith({ _id: taskId }, updateDto);
    });

    it('should throw NotFoundException when task is not found', async () => {
      const updateDto: UpdateTaskDto = { title: 'Updated Title' };
      const taskId = '1';
      mockTaskService.updateTask.mockImplementation(() => {
        throw new NotFoundException('Task not found');
      });

      await expect(resolver.updateTask(taskId, updateDto)).rejects.toThrow(NotFoundException);
    });
  });

  describe('deleteTask', () => {
    it('should delete a task', async () => {
      const deleteInput = { _id: '1' };
      mockTaskService.deleteTask.mockResolvedValue(deleteInput);

      const result = await resolver.deleteTask(deleteInput);
      expect(result).toEqual(deleteInput);
      expect(taskService.deleteTask).toHaveBeenCalledWith(deleteInput);
    });
  });

  describe('hello', () => {
    it('should return hello message', () => {
      const result = resolver.hello();
      expect(result).toBe('Hello, GraphQL!');
    });
  });
});
