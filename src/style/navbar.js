import styled from 'styled-components'

import WebFont from 'webfontloader'
WebFont.load({
  google: {
    families: ['Muli', 'sans-serif']
  }
});


export const NavBar = styled.div`
    display: flex;
    width: 100%;
    heigth: 51px;
    background: #EC7F60;
    justify-content: space-around;
    align-items: center;
`

export const LogoNavBar = styled.img`
    width: 138px;
    heigth: 51px;
`

export const LogoutButton = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 50px;
    border: 0;
    color: #FFF;
    font-family: Muli, sans-serif;
    background-color: #2f2963;
    :hover{
        background-color: #040038;
    }
`