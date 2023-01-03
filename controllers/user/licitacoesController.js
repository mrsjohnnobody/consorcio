//MODELS
const Licitacao = require("../../models/Licitacao");
const LicitacaoAndamento = require("../../models/LicitacaoAndamento");
const LicitacaoFiles = require("../../models/LicitacaoFiles");
const LicitacaoPublicacao = require("../../models/LicitacaoPublicacao");
const LicitacaoResponsaveis = require("../../models/LicitacaoResponsaveis");


class licitacoesController {
  async viewlicitacoes(req, res) {
    const licitacoes = await Licitacao.findAll({ raw: true });
    res.render("user/licitacoes/licitacoesPage", {
      licitacoes: licitacoes,
    });
  }

  async viewLicitacaoById(req, res) {
    const id = req.params.id;
    if(!id)
      return res.redirect("/user/licitacoes");

    const licitacao = await Licitacao.findByPk(
      id,
      { include: [
          LicitacaoFiles, 
          LicitacaoAndamento,
          LicitacaoPublicacao,
          LicitacaoResponsaveis
      ] },
    );
    
    return res.render("user/licitacoes/licitacaoByIdPage", { licitacao });
  }
}

module.exports = new licitacoesController();
