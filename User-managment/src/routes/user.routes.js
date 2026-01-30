import express from 'express';
import * as controller from '../controllers/user.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import {
  createUserValidation,
  userIdValidation
} from '../validations/user.validation.js';

const router = express.Router();

router.post('/', createUserValidation, validate, controller.createUser);
router.get('/', controller.getUsers);
router.get('/:id', userIdValidation, validate, controller.getUser);
router.put('/:id', userIdValidation, validate, controller.updateUser);
router.delete('/:id', userIdValidation, validate, controller.deleteUser);

export default router;
