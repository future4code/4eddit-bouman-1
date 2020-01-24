import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../actions/lorenzo"
import { PostContainer, PostCard, BottonField, ButtonLight, TextAreaComment } from '../../style/PostPage'


class FieldPost extends Component {

    state = {
        textPost: "",
        titlePost: " ",
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createPost = ev => {
        ev.preventDefault();
        const text = this.state.textPost
        const title = this.state.titlePost
        this.props.createPost(text, title)
        this.setState({ textPost: "" })
    }

    render() {
        console.log(this.state.textPost)
        return (
            <>
                <PostContainer maxWidth="sm">
                    <PostCard>
                        <TextAreaComment onChange={this.handleInputChange} name="textPost" value={this.state.textPost} placeholder="O que você tem para postar hoje?" rows="4" />
                        <BottonField>
                            <ButtonLight type="submit" onSubmit={this.createPost}>Postar</ButtonLight>
                        </BottonField>
                    </PostCard>
                </PostContainer>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    createPost: (text, title) => dispatch(createPost(text, title)),
})

export default connect(null, mapDispatchToProps)(FieldPost)