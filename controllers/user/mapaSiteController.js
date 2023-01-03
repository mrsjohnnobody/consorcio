class mapaSiteController {
  async viewmapaSite(req, res) {
    res.render("user/mapaSite/mapaSitePage");
  }
}

module.exports = new mapaSiteController();
