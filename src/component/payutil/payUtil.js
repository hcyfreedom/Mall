/**
 * Created by yujingyang on 2017/4/28.
 */
import {get,post} from  '../../http/http'
var pingpp = require('pingpp-js');
/*
    pay_way 字符串 支付宝:alipay_wap
*/
export  default  function pay(pay_way,price,successFun,errFun){
    get('/account/getCharge?channel='+pay_way+"price="+price,(res)=>{
        if(res.data.msg == "auth"){
            get("/account/getUUID",(res)=>{
                let redirectUrl = encodeURIComponent("http://www.tangseng.shop/account/wechatLogin?UUID="+res.data.msg);
                window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1be0f2a1f512729a&redirect_uri="+redirectUrl+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"

            })
        }
        else{
            console.log(res.data.msg);
            
            pingpp.createPayment(res.data.msg, function(result, err){
                if (result == "success") {
                    // 只有微信公众账号 wx_pub 支付成功的结果会在这里返回，其他的支付结果都会跳转到 extra 中对应的 URL。
                    successFun()
                } else if (result == "fail") {
                    // charge 不正确或者微信公众账号支付失败时会在此处返回
                    errFun()
                } else if (result == "cancel") {
                    errFun()
                    // 微信公众账号支付取消支付
                }
            });
        }
    })
}
