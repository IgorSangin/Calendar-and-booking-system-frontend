import React from 'react';
import 'antd/dist/antd.css';
import {
    Comment,
    Tooltip,
    Avatar
} from 'antd';
import moment from 'moment';

class Comments extends React.Component{

    render(){
        return(
            <Comment
                key={this.props.id}
                author={this.props.name}
                avatar={
                <Avatar
                    src={this.props.URL}
                    alt={this.props.name}
                />
            }
            content={this.props.text}
            datetime={
                <Tooltip title={moment().format('DD-MM-YYYY HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                </Tooltip>
            }
            />
        )
    }

    // Comments(){
    // }

}


    

export default Comments