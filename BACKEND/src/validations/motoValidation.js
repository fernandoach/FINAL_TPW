import Joi from 'joi'

export const motoValidation = Joi.object({
  // Marca
  marca: Joi.string()
    .max(30)
    .pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/)
    .required()
    .messages({
      'string.base': 'La marca debe ser una cadena de texto.',
      'string.empty': 'La marca es obligatoria.',
      'string.max': 'La marca no puede exceder 30 caracteres.',
      'string.pattern.base': 'La marca solo debe permitir letras, espacios y guiones.',
      'any.required': 'La marca es obligatoria.'
    }),

  // Modelo
  modelo: Joi.string()
    .max(30)
    .pattern(/^[A-Za-z0-9\s-]+$/)
    .required()
    .messages({
      'string.base': 'El modelo debe ser una cadena de texto.',
      'string.empty': 'El modelo es obligatorio.',
      'string.max': 'El modelo no puede exceder 30 caracteres.',
      'string.pattern.base': 'El modelo solo debe permitir letras, números, espacios y guiones.',
      'any.required': 'El modelo es obligatorio.'
    }),

  // Propósito
  proposito: Joi.string()
    .min(5)
    .max(50)
    .pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ\s,.-]+$/)
    .required()
    .messages({
      'string.empty': 'El propósito no puede estar vacío.',
      'string.min': 'El propósito no puede contener menos de 5 caracteres.',
      'string.max': 'El propósito no puede contener más de 50 caracteres.',
      'string.pattern.base': 'El propósito solo debe permitir letras, espacios, comas, guiones y puntos.',
      'any.required': 'El propósito es obligatorio.'
    }),

  // Imagen del modelo
  imagenModelo: Joi.string()
    .uri()
    .required()
    .messages({
      'string.uri': 'La imagenModelo debe ser una URL válida.',
      'any.required': 'La imagenModelo es obligatoria.'
    }),

  // Descripción
  descripcion: Joi.string()
    .min(10)
    .max(500)
    .required()
    .messages({
      'string.empty': 'La descripción es obligatoria.',
      'string.min': 'La descripción debe tener al menos 10 caracteres.',
      'string.max': 'La descripción no puede exceder 500 caracteres.',
      'any.required': 'La descripción es obligatoria.'
    }),

  //  Precios
  precioSoles: Joi.number()
    .positive()
    .required()
    .messages({
      'number.base': 'El precioSoles debe ser un número.',
      'number.positive': 'El precioSoles debe ser positivo.',
      'any.required': 'El precioSoles es obligatorio.'
    }),

  precioDolares: Joi.number()
    .positive()
    .required()
    .messages({
      'number.base': 'El precioDolares debe ser un número.',
      'number.positive': 'El precioDolares debe ser positivo.',
      'any.required': 'El precioDolares es obligatorio.'
    }),

  // Campos generales
  capacidad: Joi.string()
    .pattern(/^[A-Za-z0-9\s]+$/)
    .required()
    .messages({
      'string.empty': 'La capacidad es obligatoria.',
      'string.pattern.base': 'La capacidad solo debe permitir letras, números y espacios.',
      'any.required': 'La capacidad es obligatoria.'
    }),

  tanque: Joi.string()
    .pattern(/^[A-Za-z0-9\s]+$/)
    .required()
    .messages({
      'string.empty': 'El tanque es obligatorio.',
      'string.pattern.base': 'El tanque solo debe permitir letras, números y espacios.',
      'any.required': 'El tanque es obligatorio.'
    }),

  cilindrada: Joi.string()
    .pattern(/^[A-Za-z0-9\s]+$/)
    .required()
    .messages({
      'string.empty': 'La cilindrada es obligatoria.',
      'string.pattern.base': 'La cilindrada solo debe permitir letras, números y espacios.',
      'any.required': 'La cilindrada es obligatoria.'
    }),

  motor: Joi.string()
    .pattern(/^[A-Za-z0-9\s-]+$/)
    .required()
    .messages({
      'string.empty': 'El motor es obligatorio.',
      'string.pattern.base': 'El motor solo debe permitir letras, números, espacios y guiones.',
      'any.required': 'El motor es obligatorio.'
    }),

  tiempo: Joi.string()
    .pattern(/^[A-Za-z0-9\s]+$/)
    .required()
    .messages({
      'string.empty': 'El tiempo es obligatorio.',
      'string.pattern.base': 'El tiempo solo debe permitir letras, números y espacios.',
      'any.required': 'El tiempo es obligatorio.'
    }),

  // Números enteros
  cilindros: Joi.number().integer().positive().required().messages({
    'number.base': 'Los cilindros deben ser un número entero positivo.',
    'any.required': 'Los cilindros son obligatorios.'
  }),

  valvulas: Joi.number().integer().positive().required().messages({
    'number.base': 'Las válvulas deben ser un número entero positivo.',
    'any.required': 'Las válvulas son obligatorias.'
  }),

  velocidades: Joi.number().integer().positive().required().messages({
    'number.base': 'Las velocidades deben ser un número entero positivo.',
    'any.required': 'Las velocidades son obligatorias.'
  }),

  stock: Joi.number().integer().positive().required().messages({
    'number.base': 'El stock debe ser un número entero positivo.',
    'any.required': 'El stock es obligatorio.'
  }),

  // Potencia, revoluciones, torque
  potencia: Joi.string()
    .pattern(/^[A-Za-z0-9\s]+$/)
    .required()
    .messages({
      'string.empty': 'La potencia es obligatoria.',
      'string.pattern.base': 'La potencia solo debe permitir letras, números y espacios.'
    }),

  revoluciones: Joi.string()
    .pattern(/^[A-Za-z0-9\s]+$/)
    .required()
    .messages({
      'string.empty': 'Las revoluciones son obligatorias.',
      'string.pattern.base': 'Las revoluciones solo deben permitir letras, números y espacios.'
    }),

  torque: Joi.string()
    .pattern(/^[A-Za-z0-9\s]+$/)
    .required()
    .messages({
      'string.empty': 'El torque es obligatorio.',
      'string.pattern.base': 'El torque solo debe permitir letras, números y espacios.'
    }),

  // Arrays de imágenes
  imagenesDisenos: Joi.array().items(Joi.string().uri()).messages({
    'string.uri': 'Cada imagen de diseño debe ser una URL válida.'
  }),

  imagenesTecnologia: Joi.array().items(Joi.string().uri()).messages({
    'string.uri': 'Cada imagen de tecnología debe ser una URL válida.'
  }),

  imagenesSeguridad: Joi.array().items(Joi.string().uri()).messages({
    'string.uri': 'Cada imagen de seguridad debe ser una URL válida.'
  }),

  imagenesMotor: Joi.array().items(Joi.string().uri()).messages({
    'string.uri': 'Cada imagen de motor debe ser una URL válida.'
  }),

  // Descripciones adicionales
  descripcionDisenos: Joi.string().min(10).max(300).required().messages({
    'string.empty': 'La descripción de diseño es obligatoria.',
    'string.min': 'La descripción de diseño debe tener al menos 10 caracteres.',
    'string.max': 'La descripción de diseño no puede exceder 300 caracteres.'
  }),

  descripcionTecnologia: Joi.string().min(10).max(300).required().messages({
    'string.empty': 'La descripción de tecnología es obligatoria.',
    'string.min': 'La descripción de tecnología debe tener al menos 10 caracteres.',
    'string.max': 'La descripción de tecnología no puede exceder 300 caracteres.'
  }),

  descripcionSeguridad: Joi.string().min(10).max(300).required().messages({
    'string.empty': 'La descripción de seguridad es obligatoria.',
    'string.min': 'La descripción de seguridad debe tener al menos 10 caracteres.',
    'string.max': 'La descripción de seguridad no puede exceder 300 caracteres.'
  }),

  descripcionMotor: Joi.string().min(10).max(300).required().messages({
    'string.empty': 'La descripción de motor es obligatoria.',
    'string.min': 'La descripción de motor debe tener al menos 10 caracteres.',
    'string.max': 'La descripción de motor no puede exceder 300 caracteres.'
  })
})
