module.exports = function (app) {
    app.use("/cat/getAboutText", (req, res) => {
        res.json(require('./json/GoodBrandItem.json'));
    });
};

//# sourceMappingURL=checkRecord-compiled.js.map