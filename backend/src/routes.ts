import { Router } from 'express'
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

//por padrão do controller ter index, show, crate, updte, delete
routes.post('/orphanages', OrphanagesController.index);
routes.post('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array ('images'), OrphanagesController.create);

export default routes;