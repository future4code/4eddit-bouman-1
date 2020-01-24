import React, { Component } from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { PostContainer, PostCard, UserNameBox, UserName, Text, BottonField, CountVote, CountComment, ButtonLight, TextAreaComment } from '../../style/PostPage'
import { getPostDetails, createComment } from "../../actions/lorenzo"
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { putVoteDirection } from '../../actions/vote'

class PostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: "",
        }
    }

    componentWillMount(){
        this.props.getPostDetails(this.props.selectedPostId)
        console.log(this.props.selectedPostId)
    }

    componentDidMount() {
        this.props.getPostDetails(this.props.selectedPostId)
    }

    handleInputChange = ev => {
        this.setState({ comment: ev.target.value });
    }

    createComment = () => {
        this.props.createComment(this.props.selectedPostId, this.state.comment)
        this.setState({ comment: "" })
    }


    putUpVote = (event) => {
        const direction = event.target.value
        const id = event.target.name

        if (direction === "0") {
            this.props.putVoteDirection(id, +1)
            this.props.getPostDetails(this.props.selectedPostId)
        } else {
            this.props.putVoteDirection(id, 0)
            this.props.getPostDetails(this.props.selectedPostId)
        }

    }

    putDownVote = (event) => {
        const direction = event.target.value
        const id = event.target.name

        if (direction !== '-1') {
            this.props.putVoteDirection(id, -1)
            this.props.getPostDetails(this.props.selectedPostId)
        } else {
            this.props.putVoteDirection(id, 0)
            this.props.getPostDetails(this.props.selectedPostId)
        }
    }

    render() {
        return (
            <PostContainer maxWidth="sm">
                <PostCard>
                    <UserNameBox>
                        <UserName>{this.props.selectedPost.username}</UserName>
                        <Text>{this.props.selectedPost.text}</Text>
                    </UserNameBox>
                    <BottonField>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onClick={this.putUpVote}
                                    name={this.props.selectedPost.id}
                                    value={this.props.selectedPost.userVoteDirection}
                                    icon={
                                        <ArrowUpwardIcon color={this.props.selectedPost.userVoteDirection === 1 ? "secondary" : "primary"} />}
                                    checkedIcon={
                                        <ArrowUpwardIcon color={this.props.selectedPost.userVoteDirection === 1 ? "secondary" : "primary"} />}
                                />}
                        />
                        <CountVote>{this.props.selectedPost.votesCount}</CountVote>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onClick={this.putDownVote}
                                    name={this.props.selectedPost.id}
                                    value={this.props.selectedPost.userVoteDirection}
                                    icon={<ArrowDownwardIcon color={this.props.selectedPost.userVoteDirection === -1 ? "secondary" : "primary"} />}
                                    checkedIcon={<ArrowDownwardIcon color={this.props.selectedPost.userVoteDirection === -1 ? "secondary" : "primary"} />}
                                />}
                        />
                        <CountComment>{this.props.selectedPost.commentsNumber} comentário(s)</CountComment>
                    </BottonField>
                </PostCard>

                <PostCard>
                    <TextAreaComment placeholder="Comentar..." rows="4" value={this.state.comment} onChange={this.handleInputChange} />
                    <BottonField>
                        <ButtonLight onClick={this.createComment}>Comentar</ButtonLight>
                    </BottonField>
                </PostCard>

            </PostContainer>
        )
    }
}

const mapStateToProps = state => ({
    selectedPostId: state.posts.selectedPostId,
    selectedPost: state.posts.selectedPost
})

const mapDispatchToProps = dispatch => ({
    getPostDetails: postId => dispatch(getPostDetails(postId)),
    putVoteDirection: (postId, direction) => dispatch(putVoteDirection(postId, direction)),
    createComment: (id, text) => dispatch(createComment(id, text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)