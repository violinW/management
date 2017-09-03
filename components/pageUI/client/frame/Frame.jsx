import './Frame.scss';
import React from 'react';
import Nav from 'Component/basicUI/nav/Nav';
export default class Frame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: [
                {
                    icon: 'fa fa-edit',
                    name: "个人信息",
                    src: "/client/self",
                    children: []
                }, {
                    icon: 'fa fa-edit',
                    name: "业务查询",
                    src: "/client/query",
                    children: []
                }
            ]
        };
    }

    render() {
        return (
            <div className="FRAME">
                <Nav navList={this.state.navList}/>
                <div className="content">
                    {this.props.children}

                </div>
            </div>
        );
    }
}
