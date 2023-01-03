//MODELS
const Comissao = require("../../models/Comissao");

class CommissionController {
    async viewCommission(req, res){
        const comissao = await Comissao.findAll({ raw: true });
        res.render("user/comissoes/comissoesPage", { comissao: comissao });
    }
}

module.exports = new CommissionController
