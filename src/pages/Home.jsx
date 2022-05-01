import React from 'react'
import MediaQuery from 'react-responsive'
import { Container, Image, Grid } from 'semantic-ui-react'
import Avatar from '../images/avatar.svg'

const Home = () => {
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <MediaQuery minWidth={695}>
            <Grid.Column width={4}>
            </Grid.Column>
            <Grid.Column width={8}>
              <Image src={Avatar} fluid rounded />
            </Grid.Column>
            <Grid.Column width={4}>
            </Grid.Column>
          </MediaQuery>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <h1>Hi!</h1>
            <h2>My name is Gonçalo Amaro and this is my Website</h2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <h3>Please, navigate.</h3>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Home
