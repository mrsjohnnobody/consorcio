const axios = require('axios');

//MODELS
const News = require("../../models/News");
const GestaoFiscal = require("../../models/GestaoFiscal");
const Licitacao = require("../../models/Licitacao");
const Contrato = require("../../models/Contrato");
const Sessao = require("../../models/Sessao");

class HomeController {
    async viewHome(req, res){
        try {
            const latestnews = await News.findAll({ limit: 3 });
            
            let url = 'https://www.googleapis.com/youtube/v3/search'
            let channelId = 'UCPRDssMnDgfp7fvjf4VoUFQ'

            let videos = null
            try {
                const response = await axios.get(url, {
                    params: {
                        pageToken: '',
                        key: process.env.GOOGLE_API_KEY,
                        channelId: channelId,
                        part: 'snippet,id',
                        maxResults: 8,
                        resultsNumber: '',
                        order: 'date',
                    }
                });
                    
                videos = response.data.items
            } catch (error) {
                videos = []
            }
    
            const gestoesFiscais = await GestaoFiscal.findAll({ limit: 4 });
            const licitacoes = await Licitacao.findAll({ limit: 4 });
            const contratos = await Contrato.findAll({ limit: 4 });
            const sessoes = await Sessao.findAll({ 
                order: [ [ 'Data', 'DESC' ]],
                limit: 8
            });
    
            res.render("user/home/homePage", { videos, latestnews, gestoesFiscais, licitacoes, contratos, sessoes });
        } catch (error) {
            console.log(error)
            res.redirect("/user/transparencia")
        }
    }
}

module.exports = new HomeController
