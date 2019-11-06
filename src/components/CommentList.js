import React from 'react';
import 'antd/dist/antd.css';
import { Input, Form} from 'antd';
import Comments from './Comments';
//import { element } from 'prop-types';
const {TextArea} =Input;

class CommentList extends React.Component{

    constructor(props){
        super(props)
        this.printComments = this.printComments.bind(this);
    }

    printComments(){

        console.log(this.props.comments)
        let comment = this.props.comments.map(element =>{
            
            return<>
                {element != null ?(
                    <Comments key={element.id} id={element.id} name={element.name} 
                    URL={element.URL} text={element.content}/>):null}
            </>
        })

        return <>
            <li>
                <ul>
                    {comment}
                </ul>
            </li>
            {/* <Form>
                <Form.Item label="Write a comment">
                    {getFielddecorator('comment',{
                        rules: [
                            {
                                required: true,
                                message: 'Please input a comment!',
                                whitespace: true},
                        ],
                    })(<TextArea/>)}
                </Form.Item>
            </Form> */}
        </>
        
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };

    render(){
        const { getFieldDecorator } = this.props.form;
        let data = [];
        let comments = this.printComments(data)
        return(
            comments
        )
        
    }
}
export default CommentList;