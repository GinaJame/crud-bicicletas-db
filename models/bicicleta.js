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
        id : 3,
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
    .update('updated_at', knex.fn.now())
    .where('id', id);
}

exports.delete = (id) => {
    return knex('bicicletas')
    .delete()
    .where('id', id);
}
/*
Bicicleta.prototype.toString = function(){
    return `id: ${this.id} | color: ${this.color}`
}

Bicicleta.allBicis = []

Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici)
}

Bicicleta.findById = function(aBiciId){
    let aBici = Bicicleta.allBicis.find( x => x.id == aBiciId)
    if(aBici){
        return aBici
    }
    else{
        throw new Error(`No existe una bicicleta con el id: ${aBiciId}`)
    }
}

Bicicleta.removeById = function(aBiciId){
    for(let i = 0; i < Bicicleta.allBicis.length; i++){
        if (Bicicleta.allBicis[i].id == aBiciId){
            Bicicleta.allBicis.splice(i, 1)
            break
        }
    }
}
*/