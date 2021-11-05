import React from 'react'
import { Container, Header, Image } from 'semantic-ui-react'
import Avatar from '../images/avatar.svg'

const Home = () => {
    return (
        <Container>
            <Header size="huge">
                Home
            </Header>
            <Image src={Avatar} />
        </Container>
    )
}

export default Home
