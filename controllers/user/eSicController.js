class eSicController {
  async vieweSic(req, res) {
    res.render("user/eSic/eSicPage");
  }
}

module.exports = new eSicController();
