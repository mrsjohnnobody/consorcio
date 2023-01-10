class pcgController {
  async viewpcg(req, res) {
    res.render("user/pcg/pcgPage");
  }
}

module.exports = new pcgController();
