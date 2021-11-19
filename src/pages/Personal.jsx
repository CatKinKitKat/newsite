import React from 'react'
import { Container, Header, Divider, Grid, Image, Card } from 'semantic-ui-react'
import MyFace from '../images/me.jpeg'
import Test from '../images/novabase.svg'

const Personal = () => {
  return (
    <Container>
      <Header size="huge">
        Personal
      </Header>
      <Divider />
      <Grid>
          <Grid.Row>
            <Card>
              <Image src={MyFace} />
              <Card.Content>
                <Card.Header>This is me.</Card.Header>
              </Card.Content>
            </Card>
          <Grid.Column>
            <Image.Group>
              <Image src={Test} size='tiny' />
            </Image.Group>
          </Grid.Column>
          </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Personal
