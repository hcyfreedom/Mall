import gritter from './gritter';

const logError = (res) => {
    if (res.code === 500) {
        gritter.error('系统错误');
    }

    return console && console.error(res);
};

export default logError;
