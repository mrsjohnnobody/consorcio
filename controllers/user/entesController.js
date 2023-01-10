class entesController {
  async viewentes(req, res) {
    res.render("user/entes/entesPage");
  }
}

module.exports = new entesController();
