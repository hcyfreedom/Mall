import http from 'axios';
import logError from './logError';
import gritter from "./gritter";

module.exports = {
    get: function (url, callback,failCallback) {
        http.get(url)
            .then((res) => {
                if(res.data.code && res.data.code == 402){
                    gritter.error(res.data.msg);
                    failCallback&&failCallback(res);
                    return ;
                }

                if(res.data.code && res.data.code == 501){
                    failCallback&&failCallback(res);
                    return;
                }
                if(res.data.code && res.data.code !== 200){
                    failCallback&&failCallback(res);
                    gritter.error(res.data.msg);
                    return;
                }
                callback(res);
            })
            .catch(logError);
    },

    post: function (url,data , callback,failCallback) {
        http.post(url, data)
            .then((res) => {

                if(res.data.code && res.data.code == 403){
                    gritter.error(res.data.msg);
                    failCallback&&failCallback(res);
                    return;
                }
                if(res.data.code && res.data.code == 501){
                    failCallback&&failCallback(res);
                    gritter.error(res.data.msg);
                    return;
                }
                if(res.data.code && res.data.code !== 200){
                    failCallback&&failCallback(res);
                    gritter.error(res.data.msg);
                    return;
                }
                callback(res);
            })
            .catch(logError);
    }

};
