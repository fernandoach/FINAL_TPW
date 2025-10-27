import joi from 'joi'

const vendedorValidation = joi.object({
  firstname: joi.string()
    .required()
    .min(2)
    .max(50)
    .pattern(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/)
    .messages({
      'string.base': 'El nombre debe ser una cadena de texto',
      'string.empty': 'El nombre no puede estar vacío',
      'string.min': 'El nombre debe tener mínimo 2 caracteres',
      'string.max': 'El nombre no puede tener más de 50 caracteres',
      'string.pattern.base': 'El nombre solo puede contener letras y espacios',
      'any.required': 'El nombre es requerido'
    }),

  lastname: joi.string()
    .required()
    .min(2)
    .max(50)
    .pattern(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/)
    .messages({
      'string.base': 'El apellido debe ser una cadena de texto',
      'string.empty': 'El apellido no puede estar vacío',
      'string.min': 'El apellido debe tener mínimo 2 caracteres',
      'string.max': 'El apellido no puede tener más de 50 caracteres',
      'string.pattern.base': 'El apellido solo puede contener letras y espacios',
      'any.required': 'El apellido es requerido'
    }),

  gender: joi.string()
    .valid('M', 'F')
    .required()
    .messages({
      'any.only': 'El género debe ser M u F',
      'any.required': 'El género es requerido'
    }),

  role: joi.string()
    .required()
    .valid('A', 'S', 'C') // A=Admin, S=Seller, C=Custommer
    .length(1)
    .messages({
      'any.only': 'El rol debe ser A (Admin), V (Vendedor) o U (Usuario)',
      'string.length': 'El rol debe tener solo un carácter',
      'any.required': 'El rol es requerido'
    }),

  birthday: joi.string()
    .pattern(/^\d{4}-\d{2}-\d{2}$/)
    .required()
    .custom((value, helpers) => {
      const date = new Date(value)
      if (isNaN(date.getTime())) {
        return helpers.error('any.invalid')
      }
      return value
    })
    .messages({
      'string.pattern.base': 'El formato de la fecha debe ser YYYY-MM-DD',
      'any.invalid': 'La fecha no es válida',
      'any.required': 'La fecha de nacimiento es requerida'
    }),

  email: joi.string()
    .required()
    .min(8)
    .max(100)
    .pattern(/^[a-zA-Z0-9._%+-áéíóúÁÉÍÓÚñÑ]+@(gmail\.com|hotmail\.com|yahoo\.com)$/)
    .messages({
      'string.base': 'El correo debe ser una cadena de texto',
      'string.empty': 'El correo no puede estar vacío',
      'string.min': 'El correo debe tener mínimo 8 caracteres',
      'string.max': 'El correo no puede tener más de 100 caracteres',
      'string.pattern.base': 'Ingrese un correo válido (gmail, hotmail o yahoo) (.com)',
      'any.required': 'El correo es requerido'
    }),

  phone: joi.string()
    .required()
    .pattern(/^[0-9]{9}$/)
    .messages({
      'string.base': 'El teléfono debe ser una cadena numérica',
      'string.empty': 'El teléfono no puede estar vacío',
      'string.pattern.base': 'El teléfono debe tener exactamente 9 dígitos numéricos',
      'any.required': 'El teléfono es requerido'
    }),

  password: joi.string()
    .min(8)
    .max(32)
    .pattern(/^(?=(.*[A-Z]))(?=(.*\d.*\d)).+$/)
    .messages({
      'string.base': 'La contraseña de ser una cadena de caracteres',
      'string.empty': 'La contraseña no puede estar vacia',
      'string.min': 'La contraseña debe contener minimo 8 caracteres',
      'string.max': 'La contraseña solo puede contener máximo 32 caracteres',
      'string.pattern.base': 'La contraseña debe contar con mínimo una letra mayuscula y dos números',
      'any.required': 'La contraseña es requerida'
    }),
  repassword: joi.any()
    .valid(joi.ref('password'))
    .required()
    .messages({
      'any.only': 'Las contraseñas no coiciden',
      'any.required': 'Repetir contraseña es requerido'
    })
})

export { vendedorValidation }
