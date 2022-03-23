const express = require('express');
const { Booking } = require('../db');

function list(req, res, next){
    Booking.findAll({include: ['member', 'copie']}).then(objects => res.json(objects)).catch(err => res.send(err));
}

function index(req, res, next){
    const id = req.params.id;
    Booking.findByPk(id).then(object => res.json(object)).catch(err => res.send(error));
}

function create(req, res, next){
    const date = req.body.date;
    const memberId = req.body.memberId;
    const copieId = req.body.copieId;

    let booking = new Object({
        date:date,
        memberId:memberId,
        copieId:copieId
    });

    Booking.create(booking).then(obj => res.json(obj)).catch(err => res.send(err));
}

function replace(req, res, next){
    const id = req.params.id;
    Booking.findByPk(id).then((object)=>{
        const date = req.body.date ? req.body.date : "";
        object.update({date:date}).then(booking => res.json(booking)).catch(err => res.send(err));
    }).catch(err => res.send(err));
}

function edit(req, res, next){
    const id = req.params.id;
    Booking.findByPk(id).then((object)=>{
        const date = req.body.date ? req.body.date : object.date;
        object.update({date:date}).then(booking => res.json(booking)).catch(err => res.send(err));
    }).catch(err => res.send(err));
}

function destroy(req, res, next){
    const id = req.params.id;
    Booking.destroy({ where:{id:id} }).then(object => res.json(object)).catch(err => res.send(err));
}

module.exports = {
    list, index, create, replace, edit, destroy
}