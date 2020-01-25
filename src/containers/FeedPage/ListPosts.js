import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts, selectPostId } from "../../actions/general"
import { PostContainer, PostCardHover, UserNameBox, Title, UserName, Text, BottonField, CountVote, CountComment } from '../../style/PostPage'
import { Central, Select } from "../../style/general"
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { putVoteDirection } from '../../actions/vote'
import { push } from "connected-react-router";
import { routes } from "../Router";

class ListPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: "",
        }
    }

    componentDidMount() {
        this.props.getPosts()
    }

    putUpVote = (e) => {
        const direction = e.target.value
        const id = e.target.name

        if (direction === "0") {
            this.props.putVoteDirection(id, +1)
            this.props.getPosts()
        } else {
            this.props.putVoteDirection(id, 0)
            this.props.getPosts()
        }

    }

    putDownVote = (e) => {
        const direction = e.target.value
        const id = e.target.name

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

    changeOrder = (e) => {
        this.setState({ order: e.target.value })
    }

    isntThePageLoaded = () => {
        if (this.props.posts.length === 0) {
            return true
        } else {
            return false
        }
    }

    sortPosts = (itemA, itemB) => {
        switch (this.state.order) {
            case 'userAsc':
                return (itemA.username.toLowerCase() > itemB.username.toLowerCase()) ? 1 : ((itemB.username.toLowerCase() > itemA.username.toLowerCase()) ? -1 : 0);
            case 'userDec':
                return (itemB.username.toLowerCase() > itemA.username.toLowerCase()) ? 1 : ((itemA.username.toLowerCase() > itemB.username.toLowerCase()) ? -1 : 0);
            case 'titleAsc':
                return (itemA.title > itemB.title) ? 1 : ((itemB.title > itemA.title) ? -1 : 0);
            case 'titleDec':
                return (itemB.title > itemA.title) ? 1 : ((itemA.title > itemB.title) ? -1 : 0);
            case 'mostLiked':
                return itemB.votesCount - itemA.votesCount;
            case 'lessLiked':
                return itemA.votesCount - itemB.votesCount;
            case 'mostCommented':
                return itemB.commentsNumber - itemA.commentsNumber;
            case 'lessCommented':
                return itemA.commentsNumber - itemB.commentsNumber;
        }
    }

    render() {
        const sortedPosts = this.props.posts.sort(this.sortPosts)
        return (
            <>
                <Central>
                    <Select onChange={this.changeOrder}>
                        <option>Ordenar por:</option>
                        <option value='userAsc'>Usuário (crescente)</option>
                        <option value='userDec'>Usuário (decrescente)</option>
                        <option value='titleAsc'>Título (crescente)</option>
                        <option value='titleDec'>Título (decrescente)</option>
                        <option value='mostLiked'>Mais curtidos</option>
                        <option value='lessLiked'>Menos curtidos</option>
                        <option value='mostCommented'>Mais comentados</option>
                        <option value='lessCommented'>Menos comentados</option>
                    </Select>
                </Central>
                {this.isntThePageLoaded() ? <Central><Title>Carregando</Title><Text>Isso pode demorar muito...</Text></Central> : sortedPosts.map(post => {
                    return (
                        <PostContainer maxWidth="sm" key={post.id}>
                            <PostCardHover>
                                <UserNameBox onClick={() => { this.goToPostPage(post.id) }}>
                                    <Title>{post.title}</Title>
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
                                    <CountComment onClick={() => { this.goToPostPage(post.id) }}>{post.commentsNumber} comentário(s)</CountComment>
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