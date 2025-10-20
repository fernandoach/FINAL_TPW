import joi from 'joi'

// Validación personalizada: mayor de 18 años
const isAdult = (value, helpers) => {
  const birthDate = new Date(value)
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }

  if (age < 18) {
    return helpers.message('El cliente debe ser mayor de 18 años.')
  }

  return value
}

// Esquema principal de validación
const clienteValidation = joi.object({
  idCliente: joi.number().optional(),

  firstName: joi.string()
    .pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
    .max(50)
    .required()
    .messages({
      'string.empty': 'El nombre es obligatorio.',
      'string.max': 'El nombre no puede superar los 50 caracteres.',
      'string.pattern.base': 'El nombre solo debe contener letras y espacios.',
      'any.required': 'El campo firstName es obligatorio.'
    }),

  lastName: joi.string()
    .pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
    .max(50)
    .required()
    .messages({
      'string.empty': 'El apellido es obligatorio.',
      'string.max': 'El apellido no puede superar los 50 caracteres.',
      'string.pattern.base': 'El apellido solo debe contener letras y espacios.',
      'any.required': 'El campo lastName es obligatorio.'
    }),

  birthDate: joi.string()
    .pattern(/^\d{4}-\d{2}-\d{2}$/)
    .required()
    .custom(isAdult, 'validación de mayoría de edad')
    .messages({
      'string.empty': 'La fecha de nacimiento es obligatoria.',
      'string.pattern.base': 'La fecha de nacimiento debe tener el formato YYYY-MM-DD.',
      'any.required': 'El campo birthDate es obligatorio.'
    }),

  gender: joi.string()
    .valid('Masculino', 'Femenino', 'Otro')
    .required()
    .messages({
      'any.only': 'El género debe ser Masculino o Femenino',
      'string.empty': 'El género es obligatorio.',
      'any.required': 'El campo gender es obligatorio.'
    }),

  password: joi.string()
    .min(8)
    .pattern(/^(?=.*[A-Z])(?=.*\d.*\d).+$/)
    .required()
    .messages({
      'string.min': 'La contraseña debe tener al menos 8 caracteres.',
      'string.pattern.base': 'Debe contener al menos una letra mayúscula y dos números.',
      'string.empty': 'La contraseña es obligatoria.',
      'any.required': 'El campo password es obligatorio.'
    }),

  phone: joi.string()
    .pattern(/^[0-9]{9,15}$/)
    .required()
    .messages({
      'string.pattern.base': 'El teléfono solo puede contener números (9 a 15 dígitos).',
      'string.empty': 'El teléfono es obligatorio.',
      'any.required': 'El campo phone es obligatorio.'
    }),

  email: joi.string()
    .email({ tlds: { allow: ['com', 'net', 'org', 'pe'] } })
    .required()
    .messages({
      'string.email': 'Debe ingresar un correo electrónico válido.',
      'string.empty': 'El correo electrónico es obligatorio.',
      'any.required': 'El campo email es obligatorio.'
    })
})

export { clienteValidation }
