class rreoController {
  async viewrreo(req, res) {
    res.render("user/rreo/rreoPage");
  }
}

module.exports = new rreoController();
