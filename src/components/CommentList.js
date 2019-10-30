import React from 'react';
import 'antd/dist/antd.css';
import moment from 'moment'
import Comment from './Comments'
import { Col, Row } from 'antd';

class CommentList extends React.Component{
    render(){
        return(
        <li> <Comment name ="Carl"/> </li>
        )
    }
    // oneRow(comments, rowNumber){

    //     let row = comment.map(element =>{

    //         return<>
    //             <Col>
    //                 {element !== null ?(
    //                     <Comment key={element.id} name={element.name} 
    //                     text={element.text} avatar={element.avatar}></Comment>
    //                 ) : null}
    //             </Col>
    //         </>

    //     });

    //     return<div key={rowNumber}>
    //     <Row type ="flex" justify="center">
    //         {row}
    //     </Row>
    //     <br/>
    //     </div>
    // }

    // render(){


    // }
}
export default CommentList;