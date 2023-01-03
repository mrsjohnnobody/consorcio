//MODELS
const News = require("../../models/News");

class NewsController {
    async viewNews(req, res){
        const news = await News.findAll({ raw: true });
        res.render("user/noticias/noticiasPage", { news: news });
    }

    async viewNewsById(req, res){
        const news = await News.findByPk(req.params.id);

        console.log(req.params.id)
        
        if (!news) 
            return res.redirect("/user/news");

        const lastedNews = await News.findAll({ raw: true });

        res.render("user/noticias/noticiaIdPage", { news: news, lastedNews: lastedNews });
    }
}

module.exports = new NewsController
