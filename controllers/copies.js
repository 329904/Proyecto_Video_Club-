const express = require('express');
const { Copie } = require('../db');

function list(req, res, next){
    Copie.findAll({include: ['movie']}).then(objects => res.json(objects)).catch(err => res.send(err));
}

function index(req, res, next){
    const id = req.params.id;
    Copie.findByPk(id).then(object => res.json(object)).catch(err => res.send(error));
}

function create(req, res, next){
    const number = req.body.number;
    const format = req.body.format;
    const estatus = req.body.estatus;
    const movieId = req.body.movieId;

    let copie = new Object({
        number:number,
        format:format,
        estatus:estatus,
        movieId:movieId
    });

    Copie.create(copie).then(obj => res.json(obj)).catch(err => res.send(err));
}

function replace(req, res, next){
    const id = req.params.id;
    Copie.findByPk(id).then((object)=>{
        const number = req.body.number ? req.body.number : "";
        const format = req.body.format ? req.body.format : "";
        const estatus = req.body.estatus ? req.body.estatus : "";
        object.update({number:number, format:format, estatus:estatus}).then(copie => res.json(copie)).catch(err => res.send(err));
    }).catch(err => res.send(err));
}

function edit(req, res, next){
    const id = req.params.id;
    Copie.findByPk(id).then((object)=>{
        const number = req.body.number ? req.body.number : object.number;
        const format = req.body.format ? req.body.format : object.format;
        const estatus = req.body.estatus ? req.body.estatus : object.estatus;
        object.update({number:number, format:format, estatus:estatus}).then(copie => res.json(copie)).catch(err => res.send(err));
    }).catch(err => res.send(err));
}

function destroy(req, res, next){
    const id = req.params.id;
    Copie.destroy({ where:{id:id} }).then(object => res.json(object)).catch(err => res.send(err));
}

module.exports = {
    list, index, create, replace, edit, destroy
}