//MODULES
const fs = require('fs');

// MODELS
const Contrato = require("../../models/Contrato");
const Licitacao = require("../../models/Licitacao");


class ContratoController {
  async viewContratos(req, res) {
    try {
        const contratos = await Contrato.findAll({ raw: true });
        const licitacoes = await Licitacao.findAll({ raw: true });
        res.render("admin/contratos/contratosPage", { contratos: contratos, licitacoes: licitacoes });
    } catch (error) {
        //salvar error em table
        res.redirect("/admin/contratos");
    }
  }
  
  async createContrato(req, res) {
    try{
        const { numero, dataExercicio, nomeContratado, objetivo, valorTotal, licitacaoId } = req.body;
        if(!numero || !dataExercicio || !nomeContratado || !objetivo || !valorTotal || !licitacaoId)
            return res.status(200).json({ status: "false", message: "As informações enviadas são inválidas" })
        
        const contrato = {
            Numero: numero,
            DataExercicio: dataExercicio,
            NomeContratado: nomeContratado,
            Objetivo: objetivo,
            ValorTotal: valorTotal,
            path: req.file.path,
            LicitacaoId: licitacaoId
        }
        
        const contratoReturn = await Contrato.create(contrato)
  
        return res.status(200).json({ status: "success", message: "Contrato cadastrado com sucesso", contrato: contrato })

    } catch (error) {
        //salvar error em table
        console.log(error)
        res.redirect("/admin/contratos");
    }
  }

  async deleteContrato(req, res) {
    try{

      if(!req.params.id)
        return res.status(200).json({ status: "false", message: "Não foi possível remover este contrato" });
      
      const contrato = await Contrato.findByPk(req.params.id);
  
      if (!contrato)
        return res.status(200).json({ status: "false", message: "Não foi possível remover eestesta contrato" })
  
      await fs.unlinkSync(contrato.path);
      
      await contrato.destroy();
  
      return res.status(200).json({ status: "success", message: "Contrato removida com sucesso"});

    } catch (error) {
      //salvar error em table
      res.redirec("/admin/Contrato");
    }
  }
}

module.exports = new ContratoController();