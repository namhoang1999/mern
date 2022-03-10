import React, { Component } from 'react';
import axios from 'axios';
import Comment from './Comment.jsx';
import SubmitForm from './SubmitForm.jsx';

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.updateList = this.updateList.bind(this)

        this.state = { comments: [] };
    }

    updateList() {
        axios.get('http://localhost:5000/comment/get')
            .then(res => {
                this.setState({ comments: res.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.updateList()
    }

    commentList() {
        return this.state.comments.map(comment => {
            return <Comment 
                        key={comment._id}
                        id={comment._id} 
                        username={comment.username} 
                        content={comment.content}
                        updateList={this.updateList}
                    />;
        })
    }

    render() {
        return (
            <div>
                <SubmitForm updateList={this.updateList}></SubmitForm>

                {this.commentList()}
            </div>
        )
    }
}