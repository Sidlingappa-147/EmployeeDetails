import Joi from "joi";

class EmployeeValidate {
  async createEmployee(body) {
    const schema = Joi.object().keys({
      firstname: Joi.string().trim(true).min(3).max(20).required().empty().messages({
        'any.required': 'First name is required.',
        'string.empty': 'First name cannot be empty.',
        'string.min': 'First name must be at least 3 characters long.',
        'string.max': 'First name cannot exceed 20 characters.',
      }),
      lastname: Joi.string().trim(true).min(1).max(20).required(),
      password: Joi.string().trim(true).required(),
      email: Joi.string().email().required(),
      address: Joi.string().trim(true).min(4).max(100).required(),
      gender: Joi.string().required(),
      salary: Joi.number().required(),
      age: Joi.number().required().min(1).max(100),
    });
    const result = schema.validate(body);
    return result;
  }
}

export default new EmployeeValidate();
