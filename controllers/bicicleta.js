const Bicicleta = require('../models/bicicleta')

exports.bicicleta_list = function(req, res){
    Bicicleta.all()
    .then((data) =>{
        let bicis = data;
        res.render('bicicletas/index', {bicis: bicis})
    })
    
}

exports.bicicleta_create_get = function(req, res){
    res.render('bicicletas/create')
}

exports.bicicleta_create_post = function(req, res){
    let bici = {
        color : req.body.color,
        modelo: req.body.modelo,
        lat: parseFloat(req.body.lat),
        lon: parseFloat(req.body.lon)
    }
    console.log(bici)
    Bicicleta.create(bici)
    .then((id) =>{
        res.redirect('/bicicletas')
    })
    

}


exports.bicicleta_update_get = function(req, res){
    let bici = Bicicleta.find(req.params.id)
    res.render('bicicletas/update', {bici})
}

exports.bicicleta_update_post = function(req, res){
    
    let bici = Bicicleta.find(req.body.id)
    bici.id = req.body.id
    bici.color = req.body.color
    bici.modelo = req.body.modelo
    bici.ubicacion = [req.body.lat, req.body.lon]
    
    res.redirect('/bicicletas')

}

exports.bicicleta_delete_post = function(req, res){
    Bicicleta.delete(req.body.id)
    res.redirect('/bicicletas')
}


