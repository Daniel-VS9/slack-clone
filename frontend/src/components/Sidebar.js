import { Add, AddCircleOutline } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { sidebarItems } from '../data/sidebarData'

const Sidebar = ({ rooms, getChannels }) => {

    const navigate = useNavigate()

    const addChannel = async() => {
        const promptChannel = prompt('Enter channel name');
        if(promptChannel){
            await fetch('/channel/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: promptChannel })
            })
        }

        getChannels()
    }

    const goToChannel = (id) => {
        if(id) {
            navigate(`/room/${id}`)
        }
    }

    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Acamica
                </Name>
                <NewMessage>
                    <AddCircleOutline />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItems.map(item => (
                        <MainChannelsItem key={item.text}>
                            {item.icon}
                            {item.text}
                        </MainChannelsItem>
                    ))
                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <Add onClick={addChannel} />
                </NewChannelContainer>
                <ChannelsList>
                    {
                        rooms.map(item => (
                            <Channel key={item._id} onClick={() => goToChannel(item._id)}>
                                # {item.name}
                            </Channel>
                        ))
                    }
                </ChannelsList>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar


const Container = styled.div`
    background: #3f0e40;
    color: white;
`

const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
`

const Name = styled.div``

const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background-color: white;
    color: #3f0e40;
    fill: #3f0e40;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
`

const MainChannelsItem = styled.div`
    color: rgb(188 178 188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;

    :hover {
        background: #350D36;
    }
`

const MainChannels = styled.div`
    padding-top: 20px;
`

const ChannelsContainer = styled.div`
    color: rgb(188 178 188);
    margin-top: 10px;
`

const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    padding-left: 19px;
    padding-right: 12px;
`

const ChannelsList = styled.div`
    padding-top: 5px;
`

const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;

    :hover {
        background: #350D36;
    }
`