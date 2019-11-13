import React from 'react';
import 'antd/dist/antd.css';
import Comments from './Comments';

class CommentList extends React.Component{

    constructor(props){
        super(props)
        this.printComments = this.printComments.bind(this);
        this.state = {
            comments :[]
        }
    }

    componentDidMount(){
        fetch("http://localhost:3000/api/calendar/comments")
        .then(res => res.json())
        .then(
            (result) =>{
                console.log(result)
            this.setState({
                isLoaded: true,
                comments:result
            })
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    printComments(){
        let comment = this.state.comments.map(element =>{
            return<>
                {element != null ?(
                    <Comments key={element.id} id={element.id} name={element.userId} 
                    URL={element.url} text={element.allText}/>):null}
            </>
        })

        return <>
            <li>
                <ul>
                    {comment}
                </ul>
            </li>
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
        let data = [];
        let comments = this.printComments(data)
        return(
            comments

        )
    }
}
export default CommentList;