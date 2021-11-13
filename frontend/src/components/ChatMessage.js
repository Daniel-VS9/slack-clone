import styled from 'styled-components'
import React from 'react'

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src='https://randomuser.me/api/portraits/men/11.jpg' alt='' />
            </UserAvatar>
            <MessageContent>
                <Name>
                    Juan Rogers
                </Name>
                <Text>
                    This is the best challenge
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage


const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;

    :hover{
        background: #E6E6E6;
    }
`

const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 3px;
    overflow: hidden;
    margin-right: 8px;

    img{
        width: 100%;
    }
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
`

const Text = styled.span``