import { MigrationInterface, QueryRunner } from 'typeorm';

export class UploadNameColumnCarsImage1624366093202
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cars_image" RENAME COLUMN "create_at" TO "created_at"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cars_image" RENAME COLUMN "created_at" TO "create_at"`
    );
  }
}
