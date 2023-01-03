const { Op } = require("sequelize")

//MODELS
const Parlamentar = require("../../models/Parlamentar");

class staticController {
    async viewCamara(req, res){
        let legislaturas = new Array()

        for(var i=1992; i < new Date().getFullYear(); i+=4){
            legislaturas.push(`(${i+1} - ${i+4})`)
        }

        const parlamentares = await Parlamentar.findAll({
            where: {
                legislatura: legislaturas.concat().pop()
            }
        });

        let parlamentarMesaDiretoraOrder  = []
        let parlamentarOrder  = []
        parlamentares.forEach(parlamentar => {
            if(parlamentar.occupation == 'PRESIDENTE')
            parlamentarMesaDiretoraOrder.push(parlamentar)
        });

        parlamentares.forEach(parlamentar => {
            if(parlamentar.occupation == '1° VICE-PRESIDENTE')
                parlamentarMesaDiretoraOrder.push(parlamentar)
        });

        parlamentares.forEach(parlamentar => {
            if(parlamentar.occupation == '2° VICE-PRESIDENTE')
                parlamentarMesaDiretoraOrder.push(parlamentar)
        });

        parlamentares.forEach(parlamentar => {
            if(parlamentar.occupation == '1° SECRETÁRIO')
                parlamentarMesaDiretoraOrder.push(parlamentar)
        });

        parlamentares.forEach(parlamentar => {
            if(parlamentar.occupation == '2° SECRETÁRIO')
                parlamentarMesaDiretoraOrder.push(parlamentar)
        });

        parlamentares.forEach(parlamentar => {
            if(parlamentar.occupation == '3° SECRETÁRIO')
                parlamentarMesaDiretoraOrder.push(parlamentar)
        });

        parlamentares.forEach(parlamentar => {
            if(parlamentar.occupation == '4° SECRETÁRIO')
                parlamentarMesaDiretoraOrder.push(parlamentar)
        });

        parlamentares.forEach(parlamentar => {
            if(parlamentar.occupation == 'SUPLENTE')
                parlamentarMesaDiretoraOrder.push(parlamentar)
        });

        parlamentares.forEach(parlamentar => {
            if(parlamentar.occupation == 'VEREADOR')
                parlamentarOrder.push(parlamentar)
        });

        res.render("user/static/camaraPage", { parlamentares: parlamentarOrder, mesaDiretora: parlamentarMesaDiretoraOrder });
    }

    async viewInfoCamara(req, res){
        res.render("user/static/infoCamaraPage");
    }

    async viewInfoParlamentar(req, res){
        res.render("user/static/infoParlamentarPage");
    }
}

module.exports = new staticController
