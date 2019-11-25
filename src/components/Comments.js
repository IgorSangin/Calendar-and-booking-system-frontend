import React from 'react';
import '../App.css';
import {
    Comment,
    Tooltip,
    Popover,
    Button,
    List
} from 'antd';
//import {BrowserRouter as  Router, Switch, Route, Link} from 'react-router-dom';
import EditCommentForm from './EditCommentForm'


class Comments extends React.Component{

    state = {
        visible: false,
        displayEdit: false,
    };

    hide = () => {
        this.setState({
            visible: false,
        });
    };

    handleVisibleChange = visible => {
        this.setState({visible});
    }

    displayEditForm = () =>{
        this.setState({
            displayEdit: !this.state.displayEdit
        })
    }

    render(){
        let d = new Date();
        if(this.props.dateModified != null){
            d = this.props.dateModified;
            d = d.toLocaleString().replace('Z', '').replace('T', ' ');
            d = "Edited " + d;
        }else{
            d = this.props.date;
            d = d.toLocaleString().replace('Z', '').replace('T', ' ');
            d = "Created " + d;
        }
        
        if(this.state.displayEdit){
            return <Comment
            key={this.props.id}
            author={this.props.name}
            content={<List>
                        <List.Item>
                            <Button type="link"> {this.props.text}</Button>
                        </List.Item>
                        <List.Item>
                        <EditCommentForm commentId={this.props.id}/>
                        </List.Item>
                        <List.Item>
                            <Button type="primary" onClick={this.displayEditForm}>Cancel</Button>
                        </List.Item>
                    </List>  }
            datetime={
            <Tooltip title={d}>
                <span>{d}</span>
            </Tooltip>
        }
        /> 
        }
        if(!this.state.displayEdit){
            return(
                <Comment
                    key={this.props.id}
                    author={this.props.name}
                    content={ <Popover content={<Button onClick={this.displayEditForm} type="primary">Edit comment</Button>}
                    visible={this.state.visible}
                    trigger="click"
                    onVisibleChange={this.handleVisibleChange}>
                    <Button type="link"> {this.props.text}</Button>
                    </Popover>}
                    datetime={
                    <Tooltip title={d}>
                        <span>{d}</span>
                    </Tooltip>
                }
                />
            )
        }
    }
}


    

export default Comments