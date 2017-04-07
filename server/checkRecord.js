module.exports = function (app) {
    app.use("/MallMore/getGoodBrandItem", (req, res)=> {
        res.json(require('./json/GoodBrandItem.json'))
    })

}