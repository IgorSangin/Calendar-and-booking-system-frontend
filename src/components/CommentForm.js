import React from 'react';
import 'antd/dist/antd.css';
import{
    Form,
    Input,
    Button,
} from 'antd'

const {TextArea} = Input;

class CommentForm extends React.Component {

    handleSubmit = e => {
        this.props.form.validateField((err, values)=> {
            if(!err){
                console.log('Recieved values of form', values);
            }
        });
    };

    render(){
        const{getFieldDecorator} = this.props.form;
        return(
            <Form onSubmit={this.handleSubmit} className="comment-form">
                <Form.Item>
                    {getFieldDecorator('comment',{
                        rules: [{required: true, message: 'Please input a comment!'}],
                    })(
                        <TextArea placeholder="Write your comment here"/>
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="comment-form-button">
                        Submit Comment
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}const WrappedCommentForm = Form.create({name: 'commentForm'})(CommentForm);

export default WrappedCommentForm