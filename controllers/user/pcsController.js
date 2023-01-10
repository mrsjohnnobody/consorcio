class pcsController {
  async viewpcs(req, res) {
    res.render("user/pcs/pcsPage");
  }
}

module.exports = new pcsController();
