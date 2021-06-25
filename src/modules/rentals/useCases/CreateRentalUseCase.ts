import { AppError } from '@shared/errors/AppError';
import { Rental } from '../infra/typeorim/entities/Rental';
import { IRentalsRepository } from '../repositories/IRentalsRepository';
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';
interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
}

class CreateRentalUseCase {
  constructor(private rentalsRepository: IRentalsRepository) {}
  async execute({
    user_id,
    car_id,
    expected_return_date,
  }: IRequest): Promise<Rental> {
    const minimumHour = 24;

    const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(
      car_id
    );

    if (carUnavailable) {
      throw new AppError('Car is unavailable');
    }

    const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUSer(
      user_id
    );

    if (rentalOpenToUser) {
      throw new AppError("there's a rental in progress for user!");
    }
    const expectedReturnDateFormat = dayjs(expected_return_date)
      .utc()
      .local()
      .format();

    const dateNow = dayjs().utc().local().format();

    const compare = dayjs(expected_return_date).diff(dayjs(), 'hours');
    if (compare < minimumHour) {
      throw new AppError('Invalid return time!');
    }
    console.log(compare);
    const rental = await this.rentalsRepository.create({
      user_id,
      car_id,
      expected_return_date,
    });

    return rental;
  }
}
export { CreateRentalUseCase };
