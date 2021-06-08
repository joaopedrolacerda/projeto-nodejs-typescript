import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateCars1623151038273 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cars" RENAME COLUMN "availabel" TO "available"`
    );
    await queryRunner.query(
      `ALTER TABLE "cars" RENAME COLUMN "create_at" TO "created_at"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cars" RENAME COLUMN "available" TO "availabel"`
    );
    await queryRunner.query(
      `ALTER TABLE "cars" RENAME COLUMN "crated_at" TO "create_at"`
    );
  }
}
