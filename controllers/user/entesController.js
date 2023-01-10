class entesController {
  async viewentesId(req, res) {
    switch (req.params.id) {
      case '1':
        res.render("user/entes/entes1Page");
        break;
      case '2':
        res.render("user/entes/entes2Page");
        break;
      default:
        res.redirect("/entes");
        break;
    }
  }

  async viewentes(req, res) {
    res.render("user/entes/entesPage");
  }
}

module.exports = new entesController();
