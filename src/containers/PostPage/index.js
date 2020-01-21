import React, { Component } from 'react';
import { PostContainer, PostCard, UserNameBox, UserName, Text, BottonField, CountVote, CountComment, ButtonLight, TextAreaComment } from '../../style/PostPage'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

class PostPage extends Component {

    render(){
        return(
            <PostContainer maxWidth="sm">
                <PostCard>
                    <UserNameBox>
                        <UserName>Luan Bonetto</UserName>
                        <Text>Because Joe Biden isn't going after giant corporations, he will keep the status quo and the Millionaires and billionaires who own things like Fox News, CNN and other major news organizations wont have to worry about paying their fair share of taxes if Joe Biden wins.</Text>
                    </UserNameBox>
                    <BottonField>
                        <FormControlLabel
                            control={<Checkbox icon={<ArrowUpwardIcon color="default"/>} checkedIcon={<ArrowUpwardIcon color="secondary" />} value="checkedH" />}
                        />
                        <CountVote>4343</CountVote>
                        <FormControlLabel
                            control={<Checkbox icon={<ArrowDownwardIcon color="default"/>} checkedIcon={<ArrowDownwardIcon color="secondary" />} value="checkedH" />}
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

                <PostCard>
                    <UserNameBox>
                        <UserName>Luan Bonetto</UserName>
                        <Text>Because Joe Biden isn't going after giant corporations, he will keep the status quo and the Millionaires and billionaires who own things like Fox News, CNN and other major news organizations wont have to worry about paying their fair share of taxes if Joe Biden wins.</Text>
                    </UserNameBox>
                    <BottonField>
                        <FormControlLabel
                            control={<Checkbox icon={<ArrowUpwardIcon color="default"/>} checkedIcon={<ArrowUpwardIcon color="secondary" />} value="checkedH" />}
                        />
                        <CountVote>4343</CountVote>
                        <FormControlLabel
                            control={<Checkbox icon={<ArrowDownwardIcon color="default"/>} checkedIcon={<ArrowDownwardIcon color="secondary" />} value="checkedH" />}
                        />
                    </BottonField>
                </PostCard>
                
            </PostContainer>
        )
    }
}

export default PostPage