const { ZodError } = require('zod');

// Middleware para validar datos con Zod
const validate = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          errores: error.errors.map(err => err.message)
        });
      }
      return res.status(500).json({
        success: false,
        mensaje: 'Error en la validación'
      });
    }
  };
};

module.exports = { validate };
