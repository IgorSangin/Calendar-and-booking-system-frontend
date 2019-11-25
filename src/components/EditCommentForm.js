import React from 'react';
import '../App.css';
import{
    Form,
    Input,
    Button,
    Alert,
} from 'antd'

const {TextArea} = Input;
class EditCommentForm extends React.Component {
    
    state = {
        confirmDirty: false,
        updatedSucessfully: false,
        showSuccess: false,
        getSucessfull : false,

        showError: false,

        errorCode: 400,
        responseStatus : "nothing",
        errorMessage: "",
        data: null,
    }

    handleSubmit = e => {
        this.props.form.validateFieldsAndScroll((err, values)=> {
            if(!err){
                console.log('Recieved values of form', values);
            }
            fetch('http://localhost:3000/api/calendar/comments/'+ this.props.commentId,{
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: [JSON.stringify({values})]
            }).then(res =>{
                if(res.ok)
                this.setState({updatedSucessfully:true})
                else{
                    this.setState({
                        updatedSucessfully:false,
                        errorCode: res.status
                    });

                    return res.json()
                }
            }).then(data => this.checkResponse(data))
        });
    };

    checkResponse = (data) => {
        if(this.state.updatedSucessfully){
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
        console.log(this.props.commentId)
        return( 
            <Form onSubmit={this.handleSubmit} className="comment-form">
                <Form.Item label="New Comment" hasFeedback help={this.state.error}>
                    {getFieldDecorator('newComment',{
                        rules: [{required: true, message: 'Please input a comment!'}],
                    })(
                        <TextArea placeholder="Write your new comment here"/>
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="comment-form-button">
                        Edit Comment
                    </Button>
                </Form.Item>
                {this.state.showSuccess ? <Alert message="Comment edited!" type="success"/> : null}
                {this.state.showError ? <Alert message={this.state.errorMessage} type="error"/> : null}
            </Form>

        );
    }
}const WrappedCommentForm = Form.create({name:'commentForm'})(EditCommentForm);

export default WrappedCommentForm