import { styled } from '@material-ui/core/styles';
import style from 'styled-components'

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

import WebFont from 'webfontloader'
WebFont.load({
  google: {
    families: ['Muli', 'sans-serif']
  }
});




export const BackgroundColor = styled(Box)({
  background: '#EC7F60',
  width: '100%',
  display: 'grid',
  'grid-template-columns': '1fr 1fr',
  'grid-template-row': '1fr 1fr',
  'justify-items': 'center',
  padding: '100px 0',
})

export const ImageCapa = style.img`
  align-self: center;
`

export const LoginArea = styled(Card)({
  display: 'grid',
  'grid-template-columns': '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
  'grid-template-rows' : '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
  background: '#2F2963',
  'border-radius': '25px',
  width: '440px',
  height: '371px',
  'grid-row': 'span 2',
  'font-family': 'Muli, sans-serif'

})

export const Title = style.h1`
  color: #FFF;
  grid-row: 2;
  grid-column: 2;
`

export const InputText = styled(TextField)({
  'grid-row': '3',
  'grid-column-start': '2',
  'grid-column-end': '8',
  '& label': {
    color: '#2F2963',
    'font-family': 'Muli, sans-serif',
  },
  '& label.Mui-focused': {
    color: '#5C5291',
  }, 
  '& .MuiInputBase-root': {
    background: "#FFF",
    color: '#2F2963',
    'font-family': 'Muli, sans-serif',
    'border-radius': '35px',
  },
  '& .MuiFilledInput-inputMarginDense' : {
    'margin-left': '30px',
  },
  '& .MuiFilledInput-underline:before' : {
    'border-bottom': 'none',
  },
  '& .MuiFilledInput-underline:after' : {
    'border-bottom': 'none',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#FFF',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#FFF',
    },
    '&:hover fieldset': {
      borderColor: '#FFF',
      color: '#2F2963',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FFF',
    },
  },
})

export const InputPassword = styled(TextField)({
  'grid-row': '4',
  'grid-column-start': '2',
  'grid-column-end': '8',
  '& label': {
    color: '#2F2963',
    'font-family': 'Muli, sans-serif',
  },
  '& label.Mui-focused': {
    color: '#5C5291',
  }, 
  '& .MuiInputBase-root': {
    background: "#FFF",
    color: '#2F2963',
    'font-family': 'Muli, sans-serif',
    'border-radius': '35px',
  },
  '& .MuiFilledInput-inputMarginDense' : {
    'margin-left': '30px',
  },
  '& .MuiFilledInput-underline:before' : {
    'border-bottom': 'none',
  },
  '& .MuiFilledInput-underline:after' : {
    'border-bottom': 'none',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#FFF',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#FFF',
    },
    '&:hover fieldset': {
      borderColor: '#FFF',
      color: '#2F2963',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FFF',
    },
  },
})

export const Link = styled(Button)({
  'grid-row': '5',
  'grid-column-start': '2',
  'grid-column-end': '5',
  color: '#FFFFFF',
  opacity: '0.7',
  'border-radius': '50px',
  'text-decoration-line': 'underline',
  'font-family': 'Muli, sans-serif',
  'text-transform': 'none',
})

export const ButtonLight = styled(Button)({
  'grid-row': '5',
  'grid-column-start': '6',
  'grid-column-end': '8',
  background: '#5C5291',
  color: '#FFFFFF',
  'border-radius': '50px',
  'font-family': 'Muli, sans-serif',
})

