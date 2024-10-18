import * as Joi from 'joi';
import { LoginDto } from '../dtos';
export declare const userSignUpSchema: Joi.ObjectSchema<any>;
export declare const AdminSignUpSchema: Joi.ObjectSchema<any>;
export declare const validateEmail: Joi.ObjectSchema<any>;
export declare const LoginSchema: Joi.ObjectSchema<LoginDto>;
export declare const ValidateOtpSchema: Joi.ObjectSchema<any>;
export declare const validatePassword: Joi.ObjectSchema<any>;
