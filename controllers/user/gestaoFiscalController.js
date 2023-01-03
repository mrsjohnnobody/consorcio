//MODELS
const GestaoFiscal = require("../../models/GestaoFiscal");

class GestaoFiscalController {
  async viewGestaoFiscal(req, res) {
    const gestaofiscal = await GestaoFiscal.findAll({
      order: [["ano", "DESC"]],
    });
    res.render("user/gestaoFiscal/gestaoFiscalPage", {
      gestaofiscal: gestaofiscal,
    });
  }
}

module.exports = new GestaoFiscalController();
