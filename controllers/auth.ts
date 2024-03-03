import { Request, Response } from 'express';
import  User from '../models/User';

// Login method
export const login = (req: Request, res: Response) => {
  res.send('Login route');
};

// Register method
export const register = async (req: Request, res: Response) => {
 try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error : any) {
    res.status(500).json({ error: error.message });
  }
};
