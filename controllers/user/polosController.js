class polosController {
  async viewpolos(req, res) {
    res.render("user/polos/polosPage");
  }
}

module.exports = new polosController();
