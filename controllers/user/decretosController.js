class decretosController {
  async viewdecretos(req, res) {
    res.render("user/decretos/decretosPage");
  }
}

module.exports = new decretosController();
