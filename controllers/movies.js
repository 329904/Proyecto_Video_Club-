const express = require('express');
const { Movie, Actor } = require('../db');
const movie = require('../models/movie');

function list(req, res, next){
    Movie.findAll({include: ['director', 'genre', 'actors', 'copies']}).then(objects => res.json(objects)).catch(err => res.send(err));
}

function index(req, res, next){
    const id = req.params.id;
    Movie.findByPk(id).then(object => res.json(object)).catch(err => res.send(error));
}

function create(req, res, next){
    const title = req.body.title;
    const directorId = req.body.directorId
    const genreId = req.body.genreId

    let movie = new Object({
        title:title,
        directorId:directorId,
        genreId:genreId
    });

    Movie.create(movie).then(obj => res.json(obj)).catch(err => res.send(err));
}

function addActor(req, res, next){
    const idMovie = req.body.idMovie;
    const idActor = req.body.idActor;

    Movie.findByPk(idMovie).then((movie)=>{
        Actor.findByPk(idActor).then((actor)=>{
            movie.addActor(actor);
            res.json(movie);
        }).catch(err => res.send(err));
    }).catch(err => res.send(err));
}

function replace(req, res, next){
    const id = req.params.id;
    Director.findByPk(id).then((object)=>{
        const name = req.body.name ? req.body.name : "";
        const lastName = req.body.lastName ? req.body.lastName : "";
        object.update({name:name, lastName:lastName}).then(director => res.json(director)).catch(err => res.send(err));
    }).catch(err => res.send(err));
}

function edit(req, res, next){
    const id = req.params.id;
    Director.findByPk(id).then((object)=>{
        const name = req.body.name ? req.body.name : object.name;
        const lastName = req.body.lastName ? req.body.lastName : object.lastName;
        object.update({name:name, lastName:lastName}).then(director => res.json(director)).catch(err => res.send(err));
    }).catch(err => res.send(err));
}

function destroy(req, res, next){
    const id = req.params.id;
    Movie.destroy({ where:{id:id} }).then(object => res.json(object)).catch(err => res.send(err));
}

module.exports = {
    list, index, create, replace, edit, destroy, addActor
}