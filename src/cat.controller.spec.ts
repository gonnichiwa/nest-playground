import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats/cats.controller';
import { Cat, ListAllEntities } from './cats/dto/cat.dto';

describe('CatsController', () => {
  let catsController: CatsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
    }).compile();

    catsController = app.get<CatsController>(CatsController);
  });

  describe('findAll', () => {
    it('should contains "This action returns all cats..."', () => {
      expect(catsController.findAll(new ListAllEntities(5))).toContain(
        'This action returns all cats',
      );
    });
  });

  describe('create', () => {
    it('should insert new Cat info', () => {
      const testCat = new Cat('cname', 10, 'brown');
      expect(catsController.create(testCat)).toEqual(
        `This action adds a new cat ${testCat.age}, ${testCat.name}, ${testCat.breed}`,
      );
    });
  });
});
