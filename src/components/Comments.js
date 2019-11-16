import React from 'react';
import '../App.css';
import {
    Comment,
    Tooltip,
    Popover,
    Button
} from 'antd';

import moment from 'moment';

class Comments extends React.Component{

    constructor(props){
        super(props);
    }

    state = {
        visible: false,
    };

    hide = () => {
        this.setState({
            visible: false,
        });
    };

    handleVisibleChange = visible => {
        this.setState({visible});
    }

    render(){
        return(
            <Comment
                key={this.props.id}
                author={this.props.name}
                content={ <Popover content={<a onClick={this.hide}>Close</a>}
                title="title"
                trigger="click"
                visible={this.state.visible}
                onVisibleChange={this.handleVisibleChange}>
                <Button type="primary"> {this.props.text}  </Button>
                </Popover>}
                datetime={
                <Tooltip title={moment().format('DD-MM-YYYY HH:mm:ss')}>
                    <span>{this.props.date}</span>
                </Tooltip>
            }
            />
           
            
        )
    }

    // Comments(){
    // }

}


    

export default Comments