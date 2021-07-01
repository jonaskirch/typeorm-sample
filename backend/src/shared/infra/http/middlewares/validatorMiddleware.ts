import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'yup';

const validate = (schema: ObjectSchema<any>, path: string) => async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await schema.validate(req[path]);
    return next();
  } catch (err) {
    return res.status(400).json({ errors: err.errors });
  }
};

export default validate;
