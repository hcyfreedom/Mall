module.exports = function (app) {
    app.use("/MallMore/getGood",(req,res) =>{
        res.json(require('./json/MainPageGoods.json'))
    });
    app.use("/MallMore/getGoodBrandItem", (req, res)=> {
        res.json(require('./json/GoodBrandItem.json'))
    });
    app.use("/MallMore/getIntroDetail",(req,res)=> {
        res.json(require('./json/IntroDetail.json'))
    });
    app.use("/MallMore/getClassify",(req,res) => {
        res.json(require('./json/Classify.json'))
    })
    app.use("/MallMore/getClassifyGood",(req,res) => {
        res.json(require('./json/Goods.json'))
    })
    app.use("/MallMore/getShopItemsAll",(req,res) => {
        res.json(require('./json/AllShopGoods.json'))
    })
    app.use("/MallMore/getHotSale",(req,res) => {
        res.json(require('./json/HotSale.json'))
    })
    app.use("/MallMore/getShopMainPage",(req,res) => {
        res.json(require('./json/ShopMainPage.json'))
    })
    app.use("/MallMore/getActivityImgUrl",(req,res) => {
        res.json(require('./json/ActivityImgUrl.json'))
    })
    app.use("/MallMore/getTelephone",(req,res) => {
        res.json(require('./json/ShopTelephone.json'))
    })
}