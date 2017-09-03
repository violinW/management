
/*****************************************************************
 * 青岛雨人软件有限公司©2016版权所有
 *
 * 本软件之所有（包括但不限于）源代码、设计图、效果图、动画、日志、
 * 脚本、数据库、文档均为青岛雨人软件或其附属子公司所有。任何组织
 * 或者个人，未经青岛雨人软件书面授权，不得复制、使用、修改、分发、
 * 公布本软件的任何部分。青岛雨人软件有限公司保留对任何违反本声明
 * 的组织和个人采取法律手段维护合法权益的权利。
 *****************************************************************/
import 'Sass/common.scss';
import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';
//登录
import Login from 'Component/pageUI/common/login/login';
//找回密码
import Forgot from 'Component/pageUI/common/forgot/Forgot';
//公共部分
import Body from 'Component/pageUI/common/body/Body';
//个人中心
import Frame from 'Component/pageUI/client/frame/Frame';
//个人信息
import ClientSelf from 'Component/pageUI/client/self/Self';
//个人查询
import ClientQuery from 'Component/pageUI/client/query/Query';


module.exports = (
    <Router history={hashHistory}>
        <Route path='/login' component={Login} />
        <Route path='/forgot' component={Forgot} />
        <Route path='/body' component={Body} >
            <Route path='/client' component={Frame} >
                <Route path='self' component={ClientSelf} />
                <Route path='query' component={ClientQuery} />
            </Route>
        </Route>
    </Router>
);
