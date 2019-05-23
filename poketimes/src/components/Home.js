import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  
  state = {
    posts: [ ]

  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => {
        this.setState({
          posts: resp.data.slice(0, 10)
        })
      });

  }

  render() {
    const {posts} = this.state;
    const postList = posts.length ?
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        )
      }) :
      (
        <div className="center">No posts yet</div>
      );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

export default Home;