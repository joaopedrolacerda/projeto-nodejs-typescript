import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  });
  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'car description',
      daily_rate: 110.0,
      license_plate: 'DEF-1234',
      fine_amount: 100,
      brand: 'Audi',
      category_id: 'category_id',
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car2',
      description: 'car description',
      daily_rate: 110.0,
      license_plate: 'DEF-1234',
      fine_amount: 100,
      brand: 'car_brand_test',
      category_id: 'category_id',
    });

    const cars = await listCarsUseCase.execute({
      brand: 'car_brand_test',
    });

    expect(cars).toEqual([car]);
  });
  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car3',
      description: 'car description',
      daily_rate: 110.0,
      license_plate: 'DEF-12345',
      fine_amount: 100,
      brand: 'car_brand_test',
      category_id: 'category_id',
    });

    const cars = await listCarsUseCase.execute({
      name: 'Car3',
    });

    expect(cars).toEqual([car]);
  });
  it('should be able to list all available cars by category', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car3',
      description: 'car description',
      daily_rate: 110.0,
      license_plate: 'DEF-1235',
      fine_amount: 100,
      brand: 'car_brand_test',
      category_id: '12345',
    });

    const cars = await listCarsUseCase.execute({
      category_id: '12345',
    });

    expect(cars).toEqual([car]);
  });
});
