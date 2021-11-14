import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {

constructor(props) {
    super(props)

    this.state = {
         posts:[],
         errorMsg:''
    }
}
componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts1')     //link is api endpoint
    .then(response => {       
        console.log(response);
        this.setState({
            posts: response.data //data is set in posts array
        })
    })                          //then recieves the data
    .catch(error=>{
        console.log(error);
    this.setState({
        errorMsg:"error in retrieving data"
    })
    })
}

    render() {
        const { posts,errorMsg } = this.state   //destructuring state property
        return (
            <div>
                List of posts
               {
                   posts.length ? //when posts is not empty
                   posts.map(post => <div key={post.id}>{post.title}</div>) : null
               }
               {                //conditional rendering
                   errorMsg ? 
                   <div><h1>{errorMsg}</h1></div> : null
               }
            </div>
        )
    }
}

export default PostList
