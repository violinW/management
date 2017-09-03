import './Query.scss';
import React from 'react';
import {Input, Button, DatePicker, Table} from 'antd';

const {RangePicker} = DatePicker;
import clientAction from 'Action/client';
import clientStore from 'Store/client';

export default class Query extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: '',
            endTime: '',
            number: '',
            columns: [{
                title: '时间',
                dataIndex: 'time',
                key: 'time',
                render: text => <a href="#">{text}</a>,
            }, {
                title: '单号',
                dataIndex: 'number',
                key: 'number',
            }, {
                title: '客户名称',
                dataIndex: 'customer',
                key: 'customer',
            }],
            list: []
        };
    }

    componentWillMount() {
        clientStore.addChangeListener(this.update);
    }

    componentWillUnmount() {
        clientStore.removeChangeListener(this.update);
    }

    update = () => {
        const list = clientStore.getQueryList();
        this.setState({
            list
        });
    }

    onTimeOk = (value) => {
        this.setState({
            startTime: value[0].format('YYYY-MM-DD HH:mm:ss'),
            endTime: value[1].format('YYYY-MM-DD HH:mm:ss')
        })
    }
    onWordChange = (value) => {
        this.setState({
            number: value
        })
    }

    onQuery = () => {
        let {number, startTime, endTime} = this.state;
        clientAction.query(number, startTime, endTime)
    }

    render() {
        return (
            <div className="QUERY">
                <Input size="large" placeholder="用户编号" onChange={this.onWordChange}/>
                <RangePicker
                    size="large"
                    showTime={{format: 'HH:mm'}}
                    format="YYYY-MM-DD HH:mm"
                    placeholder={['开始时间', '结束时间']}
                    onOk={this.onTimeOk}
                />
                <Button className="query" type="primary" size="large" onClick={this.onQuery}>查询</Button>
                <Table columns={this.state.columns} dataSource={this.state.list}/>
            </div>
        );
    }
}
