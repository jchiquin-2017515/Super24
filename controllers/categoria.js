const { response, request } = require('express');
const bcrypt = require('bcryptjs');
const Categoria = require('../models/categoria');


const getCategorias = async (req = request, res = response) => {

    const query = { estado: true };

    const listaCategorias = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
    ]);

    res.json({
        msg: 'get Api - Controlador Categoria',
        listaCategorias
    });

}

const postCategoria = async (req = request, res = response) => {

    const { nombre, descripcion } = req.body;
    const CategoriaGuardadaDB = new Categoria({ nombre, descripcion});

    await CategoriaGuardadaDB.save();

    res.json({
        msg: 'Post Api - Post Categoria',
        CategoriaGuardadaDB
    });

}


const putCategoria = async (req = request, res = response) => {

    const { id } = req.params;
    const { _id, estado, ...resto } = req.body;


    const categoriaEditada = await Categoria.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'PUT editar user',
        categoriaEditada
    });

}

const deleteCategoria = async(req = request, res = response) => {
    const { id } = req.params;

    const categoriaEliminada = await Categoria.findByIdAndDelete( id);

    res.json({
        msg: 'DELETE eliminar categoria',
        categoriaEliminada
    });
}

module.exports = {
    getCategorias,
    postCategoria,
    putCategoria,
    deleteCategoria
}
