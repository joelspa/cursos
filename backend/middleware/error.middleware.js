// Ruta no encontrada
const notFound = (req, res) => {
  res.status(404).json({
    success: false,
    mensaje: 'Ruta no encontrada'
  });
};

// Manejo de errores
const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    success: false,
    mensaje: err.message
  });
};

module.exports = { notFound, errorHandler };
