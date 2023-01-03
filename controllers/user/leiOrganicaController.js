class leiOrganicaController {
  async viewleiOrganica(req, res) {
    res.render("user/leiOrganica/leiOrganicaPage");
  }
}

module.exports = new leiOrganicaController();
