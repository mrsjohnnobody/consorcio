class perguntasController {
  async viewperguntas(req, res) {
    res.render("user/perguntas/perguntasPage");
  }
}

module.exports = new perguntasController();
