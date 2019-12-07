
import React from 'react';
import { Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';
import '../App.css';
import { Form, Icon, Input, Alert, Button, Checkbox } from 'antd';

class LoginForm extends React.Component {

  state = {
    loggedSucessfully: false, //if the user is logged successfully
    showSuccess: false, //if should we show a successful feedback message after user logged in
    showError: false, //if should we show an error feedback message after user logged in
    errorCode: 401,  //to save the errorCode we recieved from the api server
    errorMessage: "",   //the error message to display to the user after server rejects action
    redirect: false  //to redirect after successful login
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        //echo the values to the browser console to make sure they are correct
        console.log('Received values of form: ', values);
        window.username = values.username
        window.password = values.password   

        //here we should send a request to our server to post the user

        //use fetch API to post the user data
        fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : 'Basic ' + window.btoa(window.username + ':' + window.password)
          },
          body: JSON.stringify({values})
        }).then(res => {
          if(res.ok)
            this.setState({
              loggedSucessfully:true,
            })
          else
            this.setState({
              loggedSucessfully:false,
              showError : true
            });

            return res.json()
        }).then(data => this.checkResponse(data))
      }
    });
  };

  checkResponse = (data) => {

    if(this.state.loggedSucessfully){
      this.setState({
        showSuccess:true,
        showError : false,
        redirect:true,
      });
    }
    else{
      //handle errors
      this.props.form.resetFields();
      this.setState({
        showSuccess:false,
        showError : true, 
      });
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    //this code will handle form responsivness on small devices
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
    <div className="centered-form">
      <Form {...formItemLayout}  onSubmit={this.handleSubmit} className="login-form">
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
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="/Signup">register now!</a>
        </Form.Item>
        {this.state.showSuccess ? <Alert message="Success. Redirecting..." type="success" /> :null}
        {this.state.showError ? <Alert message="Invalid credentials" type="error" /> :null}
        {this.state.redirect ?  <Redirect to='/calendar' /> :null}
      </Form>
    </div>
    );
  }
}

const Login = Form.create({ name: 'login' })(LoginForm);

export default Login;