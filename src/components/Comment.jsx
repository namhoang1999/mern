import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export default class Comment extends Component {
    constructor(props) {
        super(props);

        this.deleteComment = this.deleteComment.bind(this)
        this.state = { 
            id: props.id,
            username: props.username, 
            content: props.content 
        };
    }

    deleteComment(e, id) {
        e.preventDefault();

        axios.delete('http://localhost:5000/comment/delete/' + id)
            .then(this.props.updateList());
    }

    render() {
        return (
            <div>
                <h3>{this.state.username}</h3> commented <b>{this.state.content}</b>
                <Button variant="danger" onClick={e => this.deleteComment(e, this.state.id)}>Danger</Button>
            </div>
        );
    }
}