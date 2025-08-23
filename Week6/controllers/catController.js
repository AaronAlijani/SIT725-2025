const catModel = require('../services/catService');

const getAllCats = (req, res) => {
    const cats = catModel.getAllCats();
    res.render('index', { cats: cats });
};

module.exports = {
    getAllCats
};