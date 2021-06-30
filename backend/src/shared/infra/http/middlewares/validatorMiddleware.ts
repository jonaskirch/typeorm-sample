import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'yup';

class Validator {
  private static instance: Validator;

  static getInstance(): Validator {
    if (!this.instance) {
      this.instance = new Validator();
    }
    return this.instance;
  }

  check = (schema: ObjectSchema<any>, path: string) => async (
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
}

const validator = Validator.getInstance();

export default validator;
