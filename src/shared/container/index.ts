import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { CarsImagesRepository } from '@modules/cars/infra/typeorm/repositories/carsImagesRepository';
import { CarsRepository } from '@modules/cars/infra/typeorm/repositories/CarsRepository';
import { ICategoriesRepository } from '@modules/cars/infra/typeorm/repositories/ICategoriesRepository';
import { ISpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/ISpecificationsRepository';
import { ICarsImagesRepository } from '@modules/cars/repositories/IcarsImagesRepository';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { CategoriesRepository } from '@modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationsRepository } from '@modules/cars/repositories/implementations/SpecificationsRepository';
import { container } from 'tsyringe';

//ICategoryRepository
container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);
//ISpecificationsRepository
container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository
);

//IUsersRepository
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);
//ICarsRepository
container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);
//ICarsImagesRepository
container.registerSingleton<ICarsImagesRepository>(
  'CarsImagesRepository',
  CarsImagesRepository
);
container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);
