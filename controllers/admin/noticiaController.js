const fs = require('fs');

//MODELS
const News = require("../../models/News");

//DEPENDENCIES
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class NewsController {
    async viewNoticias(req, res){
        const news = await News.findAll({ raw: true });
        res.render("admin/noticias/noticiasPage", { news: news });
    }

    async viewNoticiaId(req, res){
        if(!req.params.id)
            res.redirect("/admin/noticias");

        const news = await News.findByPk(req.params.id);

        if(!news)
            res.redirect("/admin/noticias");

        res.render("admin/noticias/noticiaIdPage", { news: news });
    }

    async addNoticia(req, res){
        try {
            const { title, content } = req.body;
    
            if (!title || !content)
                return res.status(200).json({ status: "false", message: "O título da notícia e o conteúdo são obrigatórios" });

            const news = {
                title: title,
                content: content,
                image: req.file.path,
                type: "outro",
                numberOfViews: 0,
            };
            
            await News.create(news);
    
            return res.status(201).json({ status: "success", message: "Notícia cadastrada com sucesso", noticia: news });

        } catch (error) {
            console.log(error)
            return res.status(500).json({ status: "false", message: "Não foi possível realizar essa operação, tente novamente mais tarde" })
        }
    }

    async deleteNoticia(req, res) {
        try {
            if(!req.params.id)
                return res.status(200).json({ status: "false", message: "Não foi possível remover esta notícia" });
          
            const news = await News.findByPk(req.params.id);

            if (!news)
                return res.status(200).json({ status: "false", message: "Não foi possível remover esta notícia" });

            await fs.unlinkSync(news.image);

            await news.destroy();

            return res.status(200).json({ status: "success", message: "Notícia removida com sucesso"});
        } catch (error) {
            console.log(error)
            return res.status(500).json({ status: "false", message: "Não foi possível realizar essa operação, tente novamente mais tarde" })
        }

    }

}

module.exports = new NewsController
