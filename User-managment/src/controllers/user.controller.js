import bcrypt from 'bcryptjs';
import * as userService from '../services/user.service.js';

export const createUser = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await userService.createUser({
      ...req.body,
      password: hashedPassword
    });

    res.status(201).json(user);
  } catch (err) {
    if (err.code === '23505') {
      return res.status(409).json({ message: 'Email already exists' });
    }
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    res.json(await userService.getAllUsers());
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    res.json(await userService.getUserById(req.params.id));
  } catch {
    res.status(404).json({ message: 'User not found' });
  }
};

export const updateUser = async (req, res, next) => {
  try {
    res.json(await userService.updateUser(req.params.id, req.body));
  } catch {
    res.status(404).json({ message: 'User not found' });
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(204).send();
  } catch {
    res.status(404).json({ message: 'User not found' });
  }
};
