//MODELS
const PrestacaoContas = require("../../models/PrestacaoContas");
const Parlamentar = require("../../models/Parlamentar");

class prestacaoContasController {
  async viewprestacaoContas(req, res) {

    const prestacaoContas = await PrestacaoContas.findAll(
      { include: [{
        model: Parlamentar,
        required: true
       }] }
    );

    res.render("user/prestacaoContas/prestacaoContasPage", { prestacaoContas: prestacaoContas});
  }
}

module.exports = new prestacaoContasController();
