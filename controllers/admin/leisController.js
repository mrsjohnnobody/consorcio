//MODULES
const fs = require('fs');

// MODELS
const Leis = require("../../models/Leis");

class leisController {
  async viewleis(req, res) {
    try {
      const leis = await Leis.findAll({  order: [
        ["date", "DESC"]
      ]})
      res.render("admin/leis/leisPage", { leis: leis });
    } catch (error) {
      //salvar error em table
      res.redirec("/admin/home");
    }
  }

  async deleteLei(req, res) {
    try{

      if(!req.params.id)
        return res.status(200).json({ status: "false", message: "Não foi possível remover esta lei" });
      
      const lei = await Leis.findByPk(req.params.id);
  
      if (!lei)
        return res.status(200).json({ status: "false", message: "Não foi possível remover esta lei" })
  
      await fs.unlinkSync(lei.path);
      
      await lei.destroy();
  
      return res.status(200).json({ status: "success", message: "Lei removida com sucesso"});

    } catch (error) {
      //salvar error em table
      return res.status(500).json({ status: "false", message: "Não foi possível realizar essa operação, tente novamente mais tarde" })
    }
  }

  async createLei(req, res) {
    try{
      const { number, description, date } = req.body;
      console.log(number, description, date);
      if(!number || !description || !date)
        return res.status(200).json({ status: "false", message: "As informações enviadas são inválidas" })
  
      const lei = {
        number: number,
        description: description,
        date: date,
        path: req.file.path
      }
  
      const leiReturn = await Leis.create(lei)
  
      return res.status(200).json({ status: "success", message: "Lei cadastrada com sucesso", lei: leiReturn })

    } catch (error) {
      //salvar error em table
      return res.status(500).json({ status: "false", message: "Não foi possível realizar essa operação, tente novamente mais tarde" })
    }
  }
}

module.exports = new leisController();