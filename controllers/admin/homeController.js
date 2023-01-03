//MODELS
const News = require("../../models/News");
const GestaoFiscal = require("../../models/GestaoFiscal");
const Licitacao = require("../../models/Licitacao");
const Contrato = require("../../models/Contrato");
const Sessao = require("../../models/Sessao");

class HomeController {
    async viewHome(req, res){
        try{
            const latestnews = await News.findAll({ limit: 3 });
            const gestoesFiscais = await GestaoFiscal.findAll({ limit: 4 });
            const licitacoes = await Licitacao.findAll({ limit: 4 });
            const contratos = await Contrato.findAll({ limit: 4 });

            const sessoes = await Sessao.findAll({ 
                order: [ [ 'Data', 'DESC' ]],
                limit: 8
            });
    
            res.render("admin/home/homePage", { latestnews, gestoesFiscais, licitacoes, contratos, sessoes });
        }catch(error){
            console.log(error);
            res.redirect("/admin")
        }
    }
}

module.exports = new HomeController
