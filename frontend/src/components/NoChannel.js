import React from 'react'
import styled from 'styled-components'

const NoChannel = () => {
    return (
        <Container>
            <Text>
                Select or create a channel
            </Text>
        </Container>
    )
}

export default NoChannel

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = styled.span`
    padding: 20px;
    border-radius: 4px;
    border: 1px solid gray;
`