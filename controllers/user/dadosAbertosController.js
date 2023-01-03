class dadosAbertosController {
  async viewdadosAbertos(req, res) {
    res.render("user/dadosAbertos/dadosAbertosPage");
  }
}

module.exports = new dadosAbertosController();
