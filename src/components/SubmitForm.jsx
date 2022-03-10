import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class SubmitForm extends Component {
    constructor(props) {
        super(props);

        this.onChangeContent = this.onChangeContent.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            content: '',
            username: ''
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeContent(e) {
        this.setState({
            content: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const payload = {
            content: this.state.content,
            username: this.state.username
        }

        axios.post('http://localhost:5000/comment/post', payload)
            .then(this.props.updateList());

        this.setState({
            content: '',
            username: ''
        })
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        className="username"
                        as="textarea"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        type="text"
                    />
                    <Form.Control
                        className="comment"
                        as="textarea"
                        rows="3"
                        placeholder="comment"
                        value={this.state.content}
                        onChange={this.onChangeContent}
                        type="text"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Post
                </Button>
            </Form>
        )
    }
}