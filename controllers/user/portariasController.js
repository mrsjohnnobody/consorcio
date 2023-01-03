//MODELS
const Portaria = require("../../models/Portaria");

class portariasController {
  async viewportarias(req, res) {
    const portarias = await Portaria.findAll({ raw: true });
    res.render("user/portarias/portariasPage", {
      portarias: portarias,
    });
  }
}

module.exports = new portariasController();
