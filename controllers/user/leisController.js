// MODELS
const Leis = require("../../models/Leis");

class leisController {
  async viewleis(req, res) {
    const leis = await Leis.findAll({  order: [
      ["date", "DESC"]
    ]})
    res.render("user/leis/leisPage", { leis: leis });
  }
}

module.exports = new leisController();
