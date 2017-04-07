/*eslint block-scoped-var:0, no-undef:0*/
export default {
    success(title, res, text) {
        $.gritter.add({
            title: title,
            text: text,
            class_name: 'gritter-success',
            time: 1500
        });
        return new Promise((resolve) => {
            resolve(res);
        })
    },
    error(title, text) {
        $.gritter.add({
            title: title,
            text: text,
            class_name: 'gritter-error',
            time: 2500
        });
    },
    warn(title, text) {
        $.gritter.add({
            title: title,
            text: text,
            class_name: 'gritter-warning',
            time: 2000
        });
    }
};
