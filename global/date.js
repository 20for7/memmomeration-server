const mathSupport = require('./math-support');

module.exports = function (value, sourceFormat, resultFormat) {
    if (!value || !sourceFormat || !resultFormat) return null;

    let middleFormat = null; // change all sourceFormat to datetime object

    switch (sourceFormat) {
        case 'Date': {
            middleFormat = value;
            break;
        }
        case 'dd/MM/yyyy HH:mm:ss':
        case 'dd-MM-yyyy HH:mm:ss': {
            let d = +(value.substring(0, 2));
            let M = +(value.substring(3, 5));
            let y = +(value.substring(6, 10));
            let h = +(value.substring(11, 13));
            let m = +(value.substring(14, 16));
            let s = +(value.substring(17, 19));

            middleFormat = new Date(y, M - 1, d, h, m, s);
            break;
        }
        case 'yyyy-MM-dd HH:mm:ss': {
            let y = +(value.substring(0, 4));
            let M = +(value.substring(5, 7));
            let d = +(value.substring(8, 10));
            let h = +(value.substring(11, 13));
            let m = +(value.substring(14, 16));
            let s = +(value.substring(17, 19));

            middleFormat = new Date(y, M - 1, d, h, m, s);
            break;
        }
    }

    switch (resultFormat) {
        case 'Date': {
            return middleFormat;
        }
        case 'yyyy-MM-dd HH:mm:ss': {
            return middleFormat.getFullYear() + '-' +
                mathSupport.correctZero(middleFormat.getMonth() + 1) + '-' +
                mathSupport.correctZero(middleFormat.getDate()) + ' ' +
                mathSupport.correctZero(middleFormat.getHours()) + ':' +
                mathSupport.correctZero(middleFormat.getMinutes()) + ':' +
                mathSupport.correctZero(middleFormat.getSeconds());
        }
        case 'dd-MM-yyyy HH:mm:ss': {
            return mathSupport.correctZero(middleFormat.getDate()) + '-' +
                mathSupport.correctZero(middleFormat.getMonth() + 1) + '-' +
                middleFormat.getFullYear() + ' ' +
                mathSupport.correctZero(middleFormat.getHours()) + ':' +
                mathSupport.correctZero(middleFormat.getMinutes()) + ':' +
                mathSupport.correctZero(middleFormat.getSeconds());
        }
        case 'dd/MM/yyyy HH:mm:ss': {
            return mathSupport.correctZero(middleFormat.getDate()) + '/' +
                mathSupport.correctZero(middleFormat.getMonth() + 1) + '/' +
                middleFormat.getFullYear() + ' ' +
                mathSupport.correctZero(middleFormat.getHours()) + ':' +
                mathSupport.correctZero(middleFormat.getMinutes()) + ':' +
                mathSupport.correctZero(middleFormat.getSeconds());
        }
    }
}

