const Sessao = require("../../models/Sessao");
const SessaoChamada = require("../../models/SessaoChamada");
const Tramite = require("../../models/Tramite");
const Materia = require("../../models/Materia");
const Parlamentar = require("../../models/Parlamentar");

class sessoesController {
  async viewSessaoById(req, res) {
    const sessao = [];
    res.render("user/sessoes/sessoesIdPage", {
      sessao: sessao,
    });
  }

  async viewSessoes(req, res) {
    try {
      let page = 0;

      let pagination = {
        totalItems: 0,
        currentPage: page,
        totalPage: Math.ceil((await Sessao.count()) / 10),
      };

      res.render("user/sessoes/sessoesPage", { pagination });
    } catch (error) {
      console.log(error);
      res.redirect("/user/home");
    }
  }

  async getSessoesList(req, res) {
    try {
      let page = req.header("page-header");

      if (page) page = parseInt(page);
      else page = 0;

      let sessoes = await Sessao.findAll({
        offset: (page - 1) * 10,
        limit: 10,
        order: [ [ 'Data', 'DESC' ]],
      },
      );

      let pagination = {
        totalItems: sessoes.length,
        currentPage: page,
        totalPage: Math.ceil((await Sessao.count()) / 10),
      };

      return res.status(200).json({ status: "success", sessoes, pagination });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({
          status: "false",
          message:
            "Não foi possível realizar essa operação, tente novamente mais tarde",
        });
    }
  }

  async viewSessoesId(req, res) {
    const id = req.params.id;

    if (!id) return res.redirect("/user/sessoes");

    const sessao = await Sessao.findByPk(id, {
      include: [
        { model: Materia, include: [Tramite] },
        { model: SessaoChamada, include: [Parlamentar] },
      ],
    });

    let legislaturas = new Array();

    for (var i = 1992; i < new Date().getFullYear(); i += 4) {
      legislaturas.push(`(${i + 1} - ${i + 4})`);
    }

    const parlamentares = await Parlamentar.findAll({
      where: {
        legislatura: legislaturas.pop(),
      }
    });

    if (!sessao) return res.redirect("/user/sessoes");

    res.render("user/sessoes/sessaoIdPage", { sessao, parlamentares });
  }
}

module.exports = new sessoesController();
