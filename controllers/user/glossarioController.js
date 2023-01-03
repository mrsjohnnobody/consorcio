const Glossario = require("../../models/Glossario");

class glossarioController {
  async viewglossario(req, res) {
    let page = 0
    
    let pagination = {
      totalItems: 0,
      currentPage: page,
      totalPage : Math.ceil(await Glossario.count() / 10)
    }

    res.render("user/glossario/glossarioPage", { pagination })
  }

  async getGlossarioList(req, res) {
    try {
      let page = req.header('page-header')
      
      if(page)
        page = parseInt(page)
      else
        page = 0

      let glossario = await Glossario.findAll({  offset: (page - 1) * 10, limit: 10 })
      
      let pagination = {
        totalItems: glossario.length,
        currentPage: page,
        totalPage : Math.ceil(await Glossario.count() / 10)
      }
  
      return res.status(200).json({ status: "success", glossario, pagination })

    } catch (error) {
      console.log(error)
      return res.status(500).json({ status: "false", message: "Não foi possível realizar essa operação, tente novamente mais tarde" })
    }
  }
}

module.exports = new glossarioController();
