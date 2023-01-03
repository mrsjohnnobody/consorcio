//MODELS
const Comissao = require("../../models/Comissao");
const Parlamentar = require("../../models/Parlamentar");
const ParlamentarComissao = require("../../models/ParlamentarComissao");

class CommissionController {
    async viewCommission(req, res){
        const comissao = await Comissao.findAll({ raw: true });
        const parlamentares = await Parlamentar.findAll({ raw: true });

        res.render("admin/comissoes/comissoesPage", { comissao, parlamentares });
    }

    async addCommission(req, res){
        const { comissaoName, ComissaoObjetivo, selectType, selectParlamentares , initialDate, finalDate } = req.body;

        if (!comissaoName || !selectType || !selectParlamentares)
            return console.log("O nome e tipo da comissão são obrigatórios"); //erro bostratp message

        const createComissao = await Comissao.create({
            Name: comissaoName,
            Description: ComissaoObjetivo,
            Type: selectType,
            InitialDate: initialDate,
            FinalDate: finalDate,
        });

        if(selectParlamentares){
            if(Array.isArray(selectParlamentares)){
                selectParlamentares.forEach(async element => {
                    const parlamentar = await Parlamentar.findByPk(element)
    
                    if(parlamentar){
                        await ParlamentarComissao.create({
                            ParlamentarId: parlamentar.id,
                            ComissaoId: createComissao.id
                        });
                    }
                });
            }else{
                const parlamentar = await Parlamentar.findByPk(selectParlamentares)
    
                if(parlamentar){
                    await ParlamentarComissao.create({
                        ParlamentarId: parlamentar.id,
                        ComissaoId: createComissao.id
                    });
                }
            }
        }

        res.redirect("/admin/commission");
    }

    async editCommission(req, res){
        const comissao = await Comissao.findAll({ raw: true });
        const parlamentares = await Parlamentar.findAll({ raw: true });

        res.render("admin/comissoes/comissoesPage", { comissao, parlamentares });
    }

    async deleteCommission(req, res){
        if (!req.params.id) 
            return console.log("id incorreto");

        const comissao = await Comissao.findByPk(req.params.id);

        if (comissao) 
            await comissao.destroy();

        res.redirect("/admin/commission");
    }
}

module.exports = new CommissionController
