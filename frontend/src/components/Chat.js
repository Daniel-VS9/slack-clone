import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import { useParams } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

const Chat = () => {

    let { channelId } = useParams()

    const getChannel = () => {
        fetch('') // TODO
    }

    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # clever
                        <StarBorderOutlined />
                    </ChannelName>
                    <ChannelInfo>
                        Company-wide announcements and work-based matters
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>Details</div>
                    <InfoIcon />
                </ChannelDetails>
            </Header>
            <MessageContainer>
                <ChatMessage />
            </MessageContainer>
            <ChatInput />
        </Container>
    )
}

export default Chat


const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
`

const Header = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(83, 39, 83, .13);
    justify-content: space-between;
`

const Channel = styled.div``

const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    color: #606060;
`

const ChannelName = styled.div`
    font-weight: 700;
`

const ChannelInfo = styled.div`
    font-weight: 400;
    color: #606060;
    font-size: 13px;
    margin-top: 8px;
`

const InfoIcon = styled(InfoOutlined)`
    margin-left: 10px;
`

const MessageContainer = styled.div`

`