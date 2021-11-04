import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const Error = () => {
    return (
        <Container>
            <Header size="h1" textAlign="center" color="orange">
                404
            </Header>
            <Header size="h3" textAlign="center" color="black">
                Page not Found
            </Header>
        </Container>
    )
}

export default Error
