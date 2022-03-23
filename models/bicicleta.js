const knex = require('../database/connection');


exports.factory = (id, color, modelo, lat, lon) => {
    return {
        id : id,
        color : color,
        modelo : modelo,
        lat : lat,
        lon : lon
    }
}

exports.all = () => {
    // Realiza la consulta dentro de knex
    return knex
      .select('*')
      .from('bicicletas');
}

exports.create = (bicicleta) => {
    return knex('bicicletas')
    .insert({
        color : bicicleta.color,
        modelo : bicicleta.modelo,
        lat: bicicleta.lat,
        lon: bicicleta.lon
    });
}

exports.find = (id) => {
    return knex
    .select('*')
    .from('bicicletas')
    .where('id', id)
    .first();
}

exports.update = (id, bicicleta) => {
    return knex('bicicletas')
    .update(bicicleta)
    .where('id', id);
}

exports.delete = (id) => {
    return knex('bicicletas')
    .delete()
    .where('id', id);
}
