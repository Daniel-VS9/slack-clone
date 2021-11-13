import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <Content>
                <SlackImage src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg'  alt='Slack Technologies Logo'/>
                <h1>Sign in Slack</h1>
                <SignInButton>
                    Sign in with Google
                </SignInButton>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F8F8F8;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    background-color: white;
    padding: 100px 50px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 /24%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SlackImage = styled.img`
    height: 80px;
    margin-bottom: 15px;
`

const SignInButton = styled.button`
    margin-top: 50px;
    background-color: #0A8D48;
    color: white;
    border: none;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;

    :hover{
        background-color: #2cab68;
    }
`