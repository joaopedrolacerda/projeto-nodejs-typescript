import { CarImage } from '../infra/typeorm/entities/CarImage';

interface IcarsImageRepository {
  create(car_id: string, image_name: string): Promise<CarImage>;
}

export { IcarsImageRepository };
