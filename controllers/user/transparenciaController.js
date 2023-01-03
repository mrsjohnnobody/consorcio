//MODELS

class TransparenciaController {
    async viewTransparencia(req, res){
        res.render("user/transparencia/transparenciaPage");
    }
}

module.exports = new TransparenciaController
