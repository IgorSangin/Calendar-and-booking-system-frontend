import React from 'react';
import '../App.css';
import{
    Form,
    Input,
    Button,
    Alert,
    List
} from 'antd'
import CommentList from './CommentList'


const {TextArea} = Input;
class CommentForm extends React.Component {

    state = {
        confirmDirty: false,
        addedSucessfully: false,
        showSuccess: false,
        getSucessfull : false,

        showError: false,

        errorCode: 400,
        responseStatus : "nothing",
        errorMessage: "",
        data: null
    }

    

    handleSubmit = e => {
        this.props.form.validateFieldsAndScroll((err, values)=> {
            if(!err){
                console.log('Recieved values of form', values);
            }
            //POST fetch request
            fetch('http://localhost:3000/api/calendar/comments',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                //takes the value from the comment box and sends it to backend in the request
                body: JSON.stringify({values})
            }).then(res =>{
                if(res.ok)
                this.setState({addedSucessfully:true})
                else{
                    this.setState({
                        addedSucessfully:false,
                        errorCode: res.status
                    });

                    return res.json()
                }
            }).then(data => this.checkResponse(data))
        });
    };

    checkResponse = (data) => {
        if(this.state.addedSucessfully){
        this.props.form.resetFields();
        this.setState({
            showSuccess:true,
            showError : false
            });
        }else{
            //handle errors
            this.setState({
            errorMessage: data.message,
            showSuccess:false,
            showError : true,
            responseStatus: "error"
            });
            } 
    } 

    render(){
        const{getFieldDecorator} = this.props.form;
        return( 
            <List>
                {/* renders component that displays comments */}
            <CommentList comments={this.items}/>
            {/* When this form is submitted it calls the handle submit function */}
            <Form onSubmit={this.handleSubmit} className="comment-form">
                    
                <Form.Item label="comment" hasFeedback help={this.state.error}>
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
                {this.state.showSuccess ? <Alert message="comment created successfully" type="success"/> : null}
                {this.state.showError ? <Alert message={this.state.errorMessage} type="error"/> : null}
            </Form>
            </List>
        );
    }
}const WrappedCommentForm = Form.create({name: 'commentForm'})(CommentForm);

export default WrappedCommentForm