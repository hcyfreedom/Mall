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
    app.use("/good/addGoodToCart",(req,res) => {
        res.json(require('./json/AddGoodToCart.json'))
    })
    app.use("/good/getOrdersInCart",(req,res) => {
        res.json(require('./json/OrdersInCart.json'))
    })
    app.use("/good/changeOrderCount/*",(req,res) => {
        res.json(require('./json/OrderCount.json'))
    })
    app.use("/good/deleteGoodFromCart",(req,res) => {
        res.json(require('./json/DeleteGoodFromCart.json'))
    })
    app.use("/good/abandonOrder",(req,res) => {
        res.json(require('./json/AbandonOrder.json'))
    })
    app.use("/good/getRate",(req,res) => {
        res.json(require('./json/Rate.json'))
    })
    app.use("/account/getAddress",(req,res) =>{
        res.json(require('./json/GetAddress.json'))
    })
    app.use("/good/getGifts",(req,res) =>{
        res.json(require('./json/GiftsIndex.json'))
    })
    app.use("/good/getGift/*",(req,res) =>{
        res.json(require('./json/GiftDetali.json'))
    })
    app.use("/good/exchangeGift/*",(req,res) =>{
        res.json(require('./json/ExchangeGift.json'))
    })
    app.use("/account/register",(req,res) =>{
        res.json(require('./json/Register.json'))
    })
    app.use("/account/login",(req,res) =>{
        res.json(require('./json/Register.json'))
    })

    app.use("/account/getMessage",(req,res) =>{
        res.json(require('./json/GetMessafe.json'))
    })
    app.use("/account/getAdminCode",(req,res) =>{
        res.json(require('./json/GetAdminCode.json'))
    })
    app.use("/account/getInvitationCode",(req,res) =>{
        res.json(require('./json/GetAdminCode.json'))
    })
    app.use("/main/getUserInfo",(req,res) =>{
        res.json(require('./json/GetUserInfo.json'))
    })
    app.use("/account/checkLogin",(req,res) =>{
        res.json(require('./json/CheckLogin.json'))
    })
    app.use("/good/getOrderInfo/*",(req,res) =>{
        res.json(require('./json/OrderInfo.json'))
    })
    app.use("/good/search",(req,res) =>{
        res.json(require('./json/Search.json'))
    })
    app.use("/main/getAdvertisingShop",(req,res) =>{
        res.json(require('./json/AdvertiseShopId.json'))
    })
}