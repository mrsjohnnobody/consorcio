class faleConoscoController {
  async viewfaleConosco(req, res) {
    res.render("user/faleConosco/faleConoscoPage");
  }
}

module.exports = new faleConoscoController();
