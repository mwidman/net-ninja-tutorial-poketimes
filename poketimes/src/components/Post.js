import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {

  render() {
    console.log(this.props);
    const post = this.props.post ?
    (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
      </div>
    ) :
    (
      <div className="center">Loading post...</div>
    );

    return (
      <div className="center">{post}</div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.postId;
  return {
    post: state.posts.find((post) => post.id === id)
  };
}

export default connect(mapStateToProps)(Post);