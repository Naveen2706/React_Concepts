import React, { Component } from "react";
import axios from "axios";

//InputFields => Tie the value to state object => make a post request in submit handler// procedure for post operation

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {              //change handler
this.setState({[e.target.name]:e.target.value})             //name is the key
}

submitHandler=(e)=>{            //submit handler
e.preventDefault()              //to prevent from page refreshing
console.log(this.state);            //to print object
axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
.then(response => {
    console.log(response);
})
.catch(error => {
    console.log(error);
})
}

  render() {
    const { userId, title, body } = this.state;

    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>                                                {/*changeHandler is for storing input value in state*/}
            <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
          </div>
          <div>
            <input type="text" name="title" value={title} onChange={this.changeHandler}/>
          </div>
          <div>             
            <input type="text" name="body" value={body} onChange={this.changeHandler}/>
          </div>
<button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
