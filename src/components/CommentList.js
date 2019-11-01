import React from 'react';
import 'antd/dist/antd.css';
import moment from 'moment'
import Comment from './Comments'
import { Col, Row, Avatar } from 'antd';
import Comments from './Comments';

class CommentList extends React.Component{

    printComments(comments){

        let comment = comments.map(element =>{
            
            return<>
                {element != null ?(
                    <Comment key={element.id} author={element.name} 
                    avatar={<Avatar src={element.URL} alt={element.name}/>} 
                    content={element.text}/>):null}
            </>
        })

        return <div>
            <li>
                <ul>
                    {comment}
                </ul>
            </li>
        </div>
        
    }

    render(){
        let comments = [];
        comments.push(this.printComments)
        return(
            this.printComments(comments)
        )
        
    }
}
export default CommentList;