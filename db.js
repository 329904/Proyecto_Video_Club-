const Sequelize = require('sequelize');

const directorModel = require('./models/director');
const genreModel = require('./models/genre');
const actorModel = require('./models/actor');
const memberModel = require('./models/member');
const movieModel = require('./models/movie');
const movieActorModel = require('./models/movieActor');
const copieModel = require('./models/copie');
const bookingModel = require('./models/booking');

const sequelize = new Sequelize('video-club', 'root', 'abc123', {
    host:'localhost',
    dialect:'mysql'
});

const Director = directorModel(sequelize, Sequelize);
const Genre = genreModel(sequelize, Sequelize);
const Actor = actorModel(sequelize, Sequelize);
const Member = memberModel(sequelize, Sequelize);
const Movie = movieModel(sequelize, Sequelize);
const MovieActor = movieActorModel(sequelize, Sequelize);
const Copie = copieModel(sequelize, Sequelize);
const Booking = bookingModel(sequelize, Sequelize);

// Relaciones________________________________

Director.hasMany(Movie, {as: 'movies'});
Movie.belongsTo(Director, {as: 'director'});

Genre.hasMany(Movie, {as: 'movies'});
Movie.belongsTo(Genre, {as:'genre'});


MovieActor.belongsTo(Movie, {foreignKey: 'movieId'});
MovieActor.belongsTo(Actor, {foreignKey: 'actorId'});
Movie.belongsToMany(Actor, {
    foreignKey: 'actorId', 
    as: 'actors', 
    through: 'moviesActors'});
Actor.belongsToMany(Movie, {
    foreignKey: 'movieId', 
    as: 'movies', 
    through: 'moviesActors'});


Movie.hasMany(Copie, {as: 'copies'});   
Copie.belongsTo(Movie, {as:'movie'});

Copie.hasMany(Booking, {as: 'bookings'});   
Booking.belongsTo(Copie, {as:'copie'});

Member.hasMany(Booking, {as: 'bookings'});   
Booking.belongsTo(Member, {as:'member'});

//______________________________________

sequelize.sync({
    force:true
}).then(()=>{
    console.log("Base de datos actualizada");
});

module.exports = {Director, Genre, Actor, Member, Movie, MovieActor, Copie, Booking};