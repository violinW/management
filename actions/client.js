import RequestResultHandler from 'Modules/requestResultHandler';
import Dispatcher from 'Dispatcher';
import constants from 'Constants';
import Action from 'Modules/action';

module.exports = {
    query(number, startTime, endTime) {
        let list = [{
            time: "时间",
            number: "单号",
            customer: "客户名称"
        }, {
            time: "时间",
            number: "单号",
            customer: "客户名称"
        }, {
            time: "时间",
            number: "单号",
            customer: "客户名称"
        }, {
            time: "时间",
            number: "单号",
            customer: "客户名称"
        }, {
            time: "时间",
            number: "单号",
            customer: "客户名称"
        }, {
            time: "时间",
            number: "单号",
            customer: "客户名称"
        }, {
            time: "时间",
            number: "单号",
            customer: "客户名称"
        }, {
            time: "时间",
            number: "单号",
            customer: "客户名称"
        }, {
            time: "时间",
            number: "单号",
            customer: "客户名称"
        }];

        Dispatcher.dispatch(new Action(constants.client.QUERY_LIST, list));
    },
    findPassword(count, callback) {
        callback()
    }
}