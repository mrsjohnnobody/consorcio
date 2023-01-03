class veiculosController {
  async viewveiculos(req, res) {
    res.render("user/veiculos/veiculosPage");
  }
}

module.exports = new veiculosController();
