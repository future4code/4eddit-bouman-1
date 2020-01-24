import { styled } from '@material-ui/core/styles';
import style from 'styled-components'

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


import WebFont from 'webfontloader'
WebFont.load({
  google: {
    families: ['Muli', 'sans-serif']
  }
});

export const PostContainer = styled(Container)({
    'margin-top': '25px',
})

export const PostCard = styled(Card)({
    'margin-top': '25px',
    'border-radius': '25px',
    'background-color': '#F5EBE7',
    'max-width': '536px',
})

export const PostCardHover = styled(Card)({
  'margin-top': '25px',
  'border-radius': '25px',
  'background-color': '#F5EBE7',
  'max-width': '536px',
  '&:hover':{
    'box-shadow': '0px 2px 1px -1px rgba(0,0,0,0.72), 0px 1px 1px 0px rgba(0,0,0,0.84), 0px 1px 3px 0px rgba(0,0,0,0.82)',
    transition: '0.6s',
  }
})

export const BorderHoverPost = style.div`

`

export const UserNameBox = styled(Box)({
    'padding-left': '25px',
    'padding-right': '25px',
    'width': '487px',
})

export const UserName = style.h1`
    font-size: 28px;
    margin: 0;
    padding: 0;
    font-family: Muli;
    color: #2F2963;
`

export const Text = style.p`
    max-width: 487px;
    word-wrap: break-word;
    width: 487px;
    font-family: Muli;
    font-size: 18px;
`
export const BottonField = styled(Box)({
    display: 'grid',
    'grid-template-columns': 'repeat(15, 1fr)',
    background: '#5C5291',
    'padding-left': '25px',
    height: '50px',
})

export const CountVote = style.p`
    font-size: 18px;
    font-family: Muli;
    color: #FFF;
    margin-left: -23px;
`

export const CountComment = style.p`
    font-size: 18px;
    font-family: Muli;
    color: #FFF;
    margin-left: -23px;
    grid-column-start: 12;
    grid-column-end: 16;
`

export const ButtonLight = styled(Button)({
    'grid-column-start': '12',
    'grid-column-end': '16',
    background: '#5C5291',
    color: '#FFFFFF',
    'border-radius': '50px',
    'font-family': 'Muli, sans-serif',
  })

export const TextAreaComment = style.textarea`
  width: 100%;
  padding: 25px;
  heigth: 300px;
  border: none;
  background-color: #F5EBE7;
  font-family: Muli, sans-serif;
  font-size: 18px;
`

export const InputTitlePost = style.input`
  width: 100%;
  padding: 25px;
  heigth: 300px;
  border: none;
  font-family: Muli, sans-serif;
  font-size: 18px;
  background-color: #F5EBE7;
`