class diariasController {
  async viewdiarias(req, res) {
    res.render("user/diarias/diariasPage");
  }
}

module.exports = new diariasController();
