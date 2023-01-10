class rgfController {
  async viewrgf(req, res) {
    res.render("user/rgf/rgfPage");
  }
}

module.exports = new rgfController();
