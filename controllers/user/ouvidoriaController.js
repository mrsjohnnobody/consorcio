class ouvidoriaController {
  async viewouvidoria(req, res) {
    res.render("user/ouvidoria/ouvidoriaPage");
  }
}

module.exports = new ouvidoriaController();
