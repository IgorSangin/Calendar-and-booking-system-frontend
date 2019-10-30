import React from 'react';
import 'antd/dist/antd.css';
import {
    Comment,
    Icon,
    Tooltip,
    Avatar
} from 'antd';
import moment from 'moment';

function Comments(props){
    return(
        <div>
        <Comment
            author={props.name}
            avatar={
            <Avatar
                src={props.URL}
                alt={props.name}
            />
        }
        content={props.text}
        datetime={
            <Tooltip title={moment().format('DD-MM-YYYY HH:mm:ss')}>
                <span>{moment().fromNow}</span>
            </Tooltip>
        }
        />
        </div>
    )
}
    

export default Comments