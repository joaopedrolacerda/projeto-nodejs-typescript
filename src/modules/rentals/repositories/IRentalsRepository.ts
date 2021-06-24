import { Rental } from '../infra/typeorim/entities/Rental';

interface IRentalsRepository {
  findOpenRentalByCar(car_id: string): Promise<Rental>;
  findOpenRentalByUSer(user_id: string): Promise<Rental>;
}

export { IRentalsRepository };
