class regimentoController {
  async viewregimento(req, res) {
    res.render("user/regimento/regimentoPage");
  }
}

module.exports = new regimentoController();
