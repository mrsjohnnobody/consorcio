class editaisController {
  async vieweditais(req, res) {
    res.render("user/editais/editaisPage");
  }
}

module.exports = new editaisController();
