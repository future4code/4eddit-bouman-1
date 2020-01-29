import styled from 'styled-components';

export const Background = styled.section`
  background-color: #EC7F60;
`

export const LightBackground = styled.section`
  background-color: #FFD0BB;
  min-height: 100vh;
`

export const Container = styled.main`
  font-family: 'Muli', sans-serif;
  margin: auto;
  width: 80vw;
  display: flex;
  flex-direction: column;
  &#signup {
    height: 100vh;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`

export const Box = styled.div`
  justify-content: center;
  margin: auto;
  align-self: center;
  width: 80%;
  margin: 2vh 1vw;
  padding: 5vh 2vw;
  border-radius: 40px;
  &#purple {
    background-color: #2F2963;
    color: white;
    @media (min-width: 768px) {
      width: 40%;
    }
  }
  &#image {
    @media (min-width: 768px) {
      width: 60%;
    }
  }
`

export const Input = styled.input`
  font-family: 'Muli', sans-serif;
  background-color: white;
  color: #2F2963;
  border: 1px solid white;
	-moz-border-radius: 50px;
	-webkit-border-radius: 50px;
	border-radius: 50px;
	font-size: 18px;
  padding: 4px 8px;
  margin: 4px;
  outline: 0;
`

export const LightButton = styled.button`
  font-family: 'Muli', sans-serif;
  background-color: #5C5291;
  border: 1px solid #5C5291;
  color: white;
  -moz-border-radius: 50px;
	-webkit-border-radius: 50px;
  border-radius: 50px;
  font-size: 20px;
  padding: 4px 8px;
	outline: 0;
  -webkit-appearance: none;
  display: block;
  margin-left: auto;
`

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  max-height: 40vh;
  max-width: 80%;
`

export const PostBox = styled.div`
  margin: 1vh 1vw;
`

export const ContentBox = styled.div`
  background-color: #F5EBE7;
  justify-content: center;
  margin: auto;
  align-self: center;
  width: 80%;
  padding: 2vh 1vw;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const Title = styled.span`
  color: #2F2963;
  font-weight: bold;
  font-size: 22px;
`

export const ReactionBox = styled.div`
  background-color: #5C5291;
  justify-content: center;
  margin: auto;
  align-self: center;
  width: 80%;
  padding: 0.01vh 1vw;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

export const Central = styled.div`
  margin: auto;
  text-align: center;
`

export const Select = styled.select`
  font-size: 18px;
  margin: 4em 0 0;
  width: 200px;
  background-color: white;
  cursor: pointer;
  border: 1px solid white;
  -moz-border-radius: 20px;
	-webkit-border-radius: 20px;
  border-radius: 20px;
  outline: 0;
  color: #2F2963;
`