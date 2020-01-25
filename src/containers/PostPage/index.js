import React, { Component } from 'react';
import { connect } from "react-redux";
import { PostContainer, PostCard, UserNameBox, Title, UserName, Text, BottonField, CountVote, CountComment, ButtonLight, TextAreaComment } from '../../style/PostPage'
import { getPostDetails, createComment } from "../../actions/general"
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { putVoteDirection } from '../../actions/vote'
import { LightBackground } from '../../style/general';

class PostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: "",
        }
    }

    componentWillMount() {
        this.props.getPostDetails(this.props.selectedPostId)
        console.log(this.props.selectedPostId)
    }

    componentDidMount() {
        this.props.getPostDetails(this.props.selectedPostId)
    }

    handleInputChange = e => {
        this.setState({ comment: e.target.value });
    }

    createComment = () => {
        this.props.createComment(this.props.selectedPostId, this.state.comment)
        this.setState({ comment: "" })
    }


    putUpVote = (e) => {
        const direction = e.target.value
        const id = e.target.name

        if (direction === "0") {
            this.props.putVoteDirection(id, +1)
            this.props.getPostDetails(this.props.selectedPostId)
        } else {
            this.props.putVoteDirection(id, 0)
            this.props.getPostDetails(this.props.selectedPostId)
        }

    }

    putDownVote = (e) => {
        const direction = e.target.value
        const id = e.target.name

        if (direction !== '-1') {
            this.props.putVoteDirection(id, -1)
            this.props.getPostDetails(this.props.selectedPostId)
        } else {
            this.props.putVoteDirection(id, 0)
            this.props.getPostDetails(this.props.selectedPostId)
        }
    }

    render() {

        const { selectedPost } = this.props

        return (
            <LightBackground>
                <PostContainer maxWidth="sm">
                    <PostCard>
                        <UserNameBox>
                            <Title>{selectedPost.title}</Title>
                            <UserName>{selectedPost.username}</UserName>
                            <Text>{selectedPost.text}</Text>
                        </UserNameBox>
                        <BottonField>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        onClick={this.putUpVote}
                                        name={selectedPost.id}
                                        value={selectedPost.userVoteDirection}
                                        icon={
                                            <ArrowUpwardIcon color={selectedPost.userVoteDirection === 1 ? "secondary" : "primary"} />}
                                        checkedIcon={
                                            <ArrowUpwardIcon color={selectedPost.userVoteDirection === 1 ? "secondary" : "primary"} />}
                                    />}
                            />
                            <CountVote>{selectedPost.votesCount}</CountVote>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        onClick={this.putDownVote}
                                        name={selectedPost.id}
                                        value={selectedPost.userVoteDirection}
                                        icon={<ArrowDownwardIcon color={selectedPost.userVoteDirection === -1 ? "secondary" : "primary"} />}
                                        checkedIcon={<ArrowDownwardIcon color={selectedPost.userVoteDirection === -1 ? "secondary" : "primary"} />}
                                    />}
                            />
                            <CountComment>{selectedPost.commentsNumber} comentário(s)</CountComment>
                        </BottonField>
                    </PostCard>

                    <PostCard>
                        <TextAreaComment placeholder="Comentar..." rows="4" value={this.state.comment} onChange={this.handleInputChange} />
                        <BottonField>
                            <ButtonLight onClick={this.createComment}>Comentar</ButtonLight>
                        </BottonField>
                    </PostCard>

                    {selectedPost.comments && selectedPost.comments.map(comment => (
                        <PostCard>
                            <UserNameBox>
                                <UserName>{comment.username}</UserName>
                                <Text>{comment.text}</Text>
                            </UserNameBox>
                        </PostCard>))}

                </PostContainer>
            </LightBackground>
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