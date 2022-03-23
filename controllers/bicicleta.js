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
    let id = req.params.id;

    Bicicleta.find(id).then((bici)=>{
        if(bici == null){
            res.status(404).send('Not found');
            return;
        }
        console.log(bici)
        res.render('bicicletas/update', {bici: bici})
    })
    
}

exports.bicicleta_update_post = function(req, res){
    
    let id = req.params.id
    console.log(id)
    Bicicleta.find(id).then((bici)=>{
        if (bici == null) {
            // Regresa el error 404
            res.status(404).send('Not found');
            return;
        }
        let updateBici = {
            color : req.body.color,
            modelo: req.body.modelo,
            lat: parseFloat(req.body.lat),
            lon: parseFloat(req.body.lon)
        }

        Bicicleta.update(bici.id, updateBici)
        .then((id)=>{
            res.redirect('/bicicletas')
        })
    })
    /*bici.id = req.body.id
    bici.color = req.body.color
    bici.modelo = req.body.modelo
    bici.ubicacion = [req.body.lat, req.body.lon]
    
    res.redirect('/bicicletas')*/

}

exports.bicicleta_delete_post = function(req, res){
    let id = req.params.id;

    Bicicleta.find(id).then((bici)=>{
        if(bici == null){
            res.status(404).send('Not Found');
            return;
        }
        console.log(bici)
        Bicicleta.delete(bici.id)
        .then((id)=>{
            res.redirect('/bicicletas')
        });
    })
    
}


