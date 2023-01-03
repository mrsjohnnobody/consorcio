class legislaturaController {
  async viewlegislatura(req, res) {
    const legislaturaTitle = [];
    res.render("user/legislatura/legislaturaPage", {
      legislatura: legislaturaTitle,
    });
  }
}

module.exports = new legislaturaController();
