import Dispatcher from 'Dispatcher';
import actionConstants from 'Constants';
import BasicFunc from 'Store/basicStoreFunc';

let queryList = [];

const clientStore = BasicFunc("登录数据", "login", {
    getQueryList(){
        return queryList;
    }
});

Dispatcher.register(function (action) {
    const data = action.data;
    switch (action.type) {
        case actionConstants.client.QUERY_LIST:
            queryList = data;
            break;
        default:
    }
    clientStore.emitChange();
    return true;
});

module.exports = clientStore;
