import Joi from "joi";

const registerSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  fullName: Joi.string().min(3).max(50).required(),
  password: Joi.string().min(8).required(),
});

const loginSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30),
  email: Joi.string().email({ tlds: { allow: false } }),
  password: Joi.string().min(8).required(),
}).xor("username", "email");

const validateRegister = (data) => registerSchema.validate(data);
const validateLogin = (data) => loginSchema.validate(data);

export { validateRegister, validateLogin };
