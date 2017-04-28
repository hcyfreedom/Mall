import http from 'axios';

module.exports = {
    get: function (url, callback,failCallback) {
        http.get(url)
            .then((res) => {
                if(res.data.code && res.data.code == 402){
                    failCallback&&failCallback(res);
                    return ;
                }

                if(res.data.code && res.data.code == 501){
                    failCallback&&failCallback(res);
                    return;
                }
                if(res.data.code && res.data.code !== 200){
                    alert(res.data.message);
                    failCallback&&failCallback(res);
                    return;
                }
                callback(res);
            })
            .catch();
    },

    post: function (url,data , callback,failCallback) {
        http.post(url, data)
            .then((res) => {
                if(res.data.code && res.data.code == 403){

                    failCallback&&failCallback(res);
                    return;
                }
                if(res.data.code && res.data.code == 501){
                    failCallback&&failCallback(res);
                    return;
                }
                if(res.data.code && res.data.code !== 200){
                    alert(res.data.message);
                    failCallback&&failCallback(res);
                    return;
                }

                callback(res);
            })
            .catch();
    }

};
