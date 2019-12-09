import React from 'react';
import '../App.css';
import Comments from './Comments';

class CommentList extends React.Component{

    constructor(props){
        super(props)
        //binds the function to the component
        this.printComments = this.printComments.bind(this);
        //creates an array to store the comments from the fetch request
        this.state = {
            comments :[]
        }
    }

    componentDidMount(){
        //a fetch request without a method defaults to GET as this one does
        fetch("http://localhost:3000/api/calendar/comments")
        .then(res => res.json())
        .then(
            (result) =>{
            this.setState({
                isLoaded: true,
                //saves the result to the comments array
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
        //maps the values from comments to Comments component
        let comment = this.state.comments.map(element =>{
            return<>
                    {element != null ?(
                        <Comments key={element.ID} id={element.ID} name={element.userId} 
                        URL={element.url} text={element.allText} date={element.dateCreated} dateModified={element.dateModified}/>):null}
                    
            </>
        })

        //returns comments in an unordered list
        return <>
                <ul>
                    {comment}
                </ul>

        </>
        
    }

    render(){
        let comments = this.printComments()
        return(
            <li>{comments}</li>
            

        )
    }
}
export default CommentList;