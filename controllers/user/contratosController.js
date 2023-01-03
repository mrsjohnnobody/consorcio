const Contrato = require("../../models/Contrato");

class contratosController {
  async viewcontratos(req, res) {
    const contratos = await Contrato.findAll({ raw: true });
    res.render("user/contratos/contratosPage", { contratos: contratos });
  }
}

module.exports = new contratosController();
