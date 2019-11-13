
import React from 'react';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class LoginForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        //echo the values to the browser console to make sure they are correct
        console.log('Received values of form: ', values);
        // window.username = values.username
        // window.password = values.password
        // console.log(username, password)
    

        //here we should send a request to our server to post the user

        //use fetch API to post the user data
        fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization' : 'Basic ' + window.btoa(window.username + ':' + window.password)
          },
          body: JSON.stringify({values})
        })
        .then(res => {
          console.log('Response', res)
        })
        .catch(err => {
          console.log('Error', err)
        })
        
        // .then(res => {
        //   if(res.ok)
        //     this.setState({addedSucessfully:true})
        //   else
        //     this.setState({
        //       addedSucessfully:false,
        //       errorCode: res.status
        //     });

        //     return res.json()
        // }).then(data => this.checkResponse(data))
      }
    });
  };

  checkResponse = (data) => {

    if(this.state.addedSucessfully){
      this.props.form.resetFields();
      this.setState({
        showSuccess:true,
        showError : false
      });
    }
    else{
      //handle errors
      this.setState({
        errorMessage: data.message,
        showSuccess:false,
        showError : true, 
        responseStatus: "error"
      });
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item label="Username">
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item label="Password">
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your Password!'
              },
            ],

          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="/Signup">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

const Login = Form.create({ name: 'login' })(LoginForm);

export default Login;