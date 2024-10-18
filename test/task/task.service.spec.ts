import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from 'src/api/task/task.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from 'src/api/task/schema';
import { UtilService } from 'src/helpers/utils.service';

const mockTask = {
  _id: '1',
  assignedTo: 'User1',
  title: 'Test Task',
  description: 'Test Description',
  priority: 'High',
  status: 'Pending',
  completed: false,
};

const mockTaskModel = {
  create: jest.fn().mockResolvedValue(mockTask),
  findOne: jest.fn().mockResolvedValue(mockTask),
  findOneAndUpdate: jest.fn().mockResolvedValue(mockTask),
  findOneAndDelete: jest.fn().mockResolvedValue(mockTask),
  countDocuments: jest.fn().mockResolvedValue(1),
  find: jest.fn().mockResolvedValue([mockTask]),
};

describe('TaskService', () => {
  let service: TaskService;
  let taskModel: Model<TaskDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskService,
        {
          provide: getModelToken(Task.name),
          useValue: mockTaskModel,
        },
        UtilService,
      ],
    }).compile();

    service = module.get<TaskService>(TaskService);
    taskModel = module.get<Model<TaskDocument>>(getModelToken(Task.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new task', async () => {
    const result = await service.createNewTask(mockTask);
    expect(result).toEqual(mockTask);
    expect(taskModel.create).toHaveBeenCalledWith(mockTask);
  });

  it('should get a task by filter', async () => {
    const result = await service.getTask({ _id: '1' });
    expect(result).toEqual(mockTask);
    expect(taskModel.findOne).toHaveBeenCalledWith({ _id: '1' });
  });

  it('should update a task', async () => {
    const result = await service.updateTask({ _id: '1' }, { title: 'Updated Task' });
    expect(result).toEqual(mockTask);
    expect(taskModel.findOneAndUpdate).toHaveBeenCalled();
  });

  it('should delete a task', async () => {
    const result = await service.deleteTask({ _id: '1' });
    expect(result).toEqual(mockTask);
    expect(taskModel.findOneAndDelete).toHaveBeenCalledWith({ _id: '1' });
  });
});
