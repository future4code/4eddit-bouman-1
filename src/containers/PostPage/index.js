import React, { Component } from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { PostContainer, PostCard, UserNameBox, UserName, Text, BottonField, CountVote, CountComment, ButtonLight, TextAreaComment } from '../../style/PostPage'
import { getPostDetails } from "../../actions/lorenzo"
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

class PostPage extends Component {

    componentDidMount() {
        this.props.getPostDetails(this.props.selectedPostId)
        console.log(this.props.selectedPostId)
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
                            control={<Checkbox icon={<ArrowUpwardIcon color="default" />} checkedIcon={<ArrowUpwardIcon color="secondary" />} value="checkedH" />}
                        />
                        <CountVote>4343</CountVote>
                        <FormControlLabel
                            control={<Checkbox icon={<ArrowDownwardIcon color="default" />} checkedIcon={<ArrowDownwardIcon color="secondary" />} value="checkedH" />}
                        />
                        <CountComment>0 Comentários</CountComment>
                    </BottonField>
                </PostCard>

                <PostCard>
                    <TextAreaComment placeholder="Comentar..." rows="4" />
                    <BottonField>
                        <ButtonLight>Comentar</ButtonLight>
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
    getPostDetails: postId => dispatch(getPostDetails(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)