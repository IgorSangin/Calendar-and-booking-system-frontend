import React from 'react';
import 'antd/dist/antd.css';
import moment from 'moment'
import Comment from './Comments'
import { Col, Row, Avatar } from 'antd';

class CommentList extends React.Component{

    render(){
        let list = [];
        let i =0;
        return(
        function printComments(length,element){
            for(i=0; i<length; i++){
            list+= <Comment key={element.id} name={element.name} avatar={ <Avatar URL={element.URL} alt={element.name}/>}
            content={element.content}/>
            }
            return list;
        })
        // return(
        // <li> <Comment name ="Carl"
        // URL="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"/> </li>
        // )
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