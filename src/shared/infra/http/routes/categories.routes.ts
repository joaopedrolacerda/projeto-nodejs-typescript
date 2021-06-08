import { Router } from 'express';
import { CreateCategoryController } from '../../../../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../../../../modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCategoriesController } from '../../../../modules/cars/useCases/listCategories/ListCategoriesController';
import multer from 'multer';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated';
import { ensureAdmin } from '../middleware/ensureAdmin';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});
const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle
);

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});
categoriesRoutes.post(
  '/import',
  ensureAuthenticated,
  ensureAdmin,
  upload.single('file'),
  importCategoryController.handle
);

export { categoriesRoutes };
