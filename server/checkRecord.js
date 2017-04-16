module.exports = function (app) {
    app.use("/main/getMainPageGoods",(req,res) =>{
        res.json(require('./json/MainPageGoods.json'))
    });
    app.use("/main/getGoodBrandItem", (req, res)=> {
        res.json(require('./json/GoodBrandItem.json'))
    });

    app.use("/main/getClassify",(req,res) => {
        res.json(require('./json/Classify.json'))
    })
    app.use("/classify/getGoods",(req,res) => {
        res.json(require('./json/Goods.json'))
    })
    app.use("/shop/getAll/*",(req,res) => {
        res.json(require('./json/AllShopGoods.json'))
    })
    app.use("/shop/getHotSale/*",(req,res) => {
        res.json(require('./json/HotSale.json'))
    })
    app.use("/shop/getShopMainPage/*",(req,res) => {
        res.json(require('./json/ShopMainPage.json'))
    })
    app.use("/shop/getActivityImgUrl/*",(req,res) => {
        res.json(require('./json/ActivityImgUrl.json'))
    })
    app.use("/shop/getTelephone/*",(req,res) => {
        res.json(require('./json/ShopTelephone.json'))
    })
    app.use("/good/getGoodContent/*",(req,res) => {
        res.json(require('./json/GoodContent.json'))
    })
    app.use("/shop/addGoodToCart",(req,res) => {
        res.json(require('./json/AddGoodToCart.json'))
    })
}