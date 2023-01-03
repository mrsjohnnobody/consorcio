class publicacoesController {
  async viewpublicacoes(req, res) {
    res.render("user/publicacoes/publicacoesPage");
  }
}

module.exports = new publicacoesController();
