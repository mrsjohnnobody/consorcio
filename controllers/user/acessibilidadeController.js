class acessibilidadeController {
  async viewacessibilidade(req, res) {
    res.render("user/acessibilidade/acessibilidadePage");
  }
}

module.exports = new acessibilidadeController();
