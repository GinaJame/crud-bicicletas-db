let Bicicleta = require('../../models/bicicleta')

exports.bicicleta_list = function(req, res){
    Bicicleta.all()
    .then((data) =>{
        res.status(200).json({
            bicicletas: data
        })
    })
    
}

exports.bicicleta_create = function(req, res){
    let bici = {
        color : req.body.color,
        modelo: req.body.modelo,
        lat: parseFloat(req.body.lat),
        lon: parseFloat(req.body.lon)
    }
    Bicicleta.create(bici)
    .then((id) =>{
        res.status(200).json({
            id
        })
    })
    
}

exports.bicicleta_delete = function(req, res){
    let id = req.body.id;
    Bicicleta.find(id).then((bici)=>{
        if(bici == null){
            res.status(404).send('Not Found');
            return;
        }
        Bicicleta.delete(bici.id)
        .then((id)=>{
            res.status(204).send()
        });
    })
    
}