class atasController {
  async viewatas(req, res) {
    res.render("user/atas/atasPage");
  }
}

module.exports = new atasController();
