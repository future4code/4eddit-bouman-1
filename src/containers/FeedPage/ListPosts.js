import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../actions/lorenzo"
import { PostContainer, PostCardHover, UserNameBox, UserName, Text, BottonField, CountVote, CountComment, ButtonLight, TextAreaComment, InputTitlePost } from '../../style/PostPage'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { putVoteDirection } from '../../actions/vote'
import { push } from "connected-react-router";
import { routes } from "../Router";
import { selectPostId } from "../../actions/lorenzo"

class ListPosts extends Component {

    componentDidMount() {
        this.props.getPosts()
    }

    putUpVote = (event) => {
        const direction = event.target.value
        const id = event.target.name

        if (direction === "0") {
            this.props.putVoteDirection(id, +1)
            this.props.getPosts()
        } else {
            this.props.putVoteDirection(id, 0)
            this.props.getPosts()
        }

    }

    putDownVote = (event) => {
        const direction = event.target.value
        const id = event.target.name

        if (direction !== '-1') {
            this.props.putVoteDirection(id, -1)
            this.props.getPosts()
        } else {
            this.props.putVoteDirection(id, 0)
            this.props.getPosts()
        }
    }

    goToPostPage = postId => {
        const { selectPostId, goToSelectedPost } = this.props
        selectPostId(postId)
        goToSelectedPost()
    }

    render() {
        return (
            <>
                {this.props.posts.map(post => {
                    return (
                        <PostContainer maxWidth="sm" key={post.id}>
                            <PostCardHover onClick={() => { this.goToPostPage(post.id) }} >
                                <UserNameBox>
                                    <UserName>{post.username}</UserName>
                                    <Text>{post.text}</Text>
                                </UserNameBox>
                                <BottonField>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                onClick={this.putUpVote}
                                                name={post.id}
                                                value={post.userVoteDirection}
                                                icon={
                                                    <ArrowUpwardIcon color={post.userVoteDirection === 1 ? "secondary" : "primary"} />}
                                                checkedIcon={
                                                    <ArrowUpwardIcon color={post.userVoteDirection === 1 ? "secondary" : "primary"} />}
                                            />}
                                    />
                                    <CountVote>{post.votesCount}</CountVote>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                onClick={this.putDownVote}
                                                name={post.id}
                                                value={post.userVoteDirection}
                                                icon={<ArrowDownwardIcon color={post.userVoteDirection === -1 ? "secondary" : "primary"} />}
                                                checkedIcon={<ArrowDownwardIcon color={post.userVoteDirection === -1 ? "secondary" : "primary"} />}
                                            />}
                                    />
                                    <CountComment>{post.commentsNumber} Comentários</CountComment>
                                </BottonField>
                            </PostCardHover>

                        </PostContainer>

                    )
                })}
            </>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.allPosts,
})

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(getPosts()),
    putVoteDirection: (postId, direction) => dispatch(putVoteDirection(postId, direction)),
    selectPostId: postId => dispatch(selectPostId(postId)),
    goToSelectedPost: () => dispatch(push(routes.post)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)