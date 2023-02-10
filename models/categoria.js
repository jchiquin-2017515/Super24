const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    descripcion: {
        type: String,
    },
    estado: {
        type: Boolean,
        default: true
    }
});


module.exports = model('Categoria', CategoriaSchema);