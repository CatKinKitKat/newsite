import React from 'react'
import { Container, Header, Divider, Grid, Image, Card } from 'semantic-ui-react'
import MediaQuery from 'react-responsive'
import MyFace from '../images/me.jpeg'
import MyWastedFace from '../images/me2.jpeg'
import NB from '../images/novabase.svg'
import Op from '../images/optiply.svg'
import VF from '../images/vodafone.svg'
import IPE from '../images/pupilos.svg'
import IPB from '../images/estig.png'

const Personal = () => {
  return (
    <Container>
      <Header size="huge">
        Personal
      </Header>
      <Divider />
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Image src={MyFace} size='medium' rounded />
          </Grid.Column>
          <MediaQuery minWidth={695}>
            <Grid.Column width={1}>
              <Image.Group>
                <Image src={IPB} size='small' />
                <Image src={IPE} size='small' />
                <Image src={Op} size='small' />
                <Image src={NB} size='small' />
                <Image src={VF} size='small' />
              </Image.Group>
            </Grid.Column>
            <Grid.Column width={11}>
              <Grid.Row>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>High! Oops. Hi!</Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Card.Description>
                      My name is Gonçalo Candeias Amaro and I am a software developer. I am currently working at Optiply as a Backend Intern.
                    </Card.Description>
                  </Card.Content>
                  <MediaQuery minWidth={695}>
                    <Card.Content>
                      <Card.Description>
                        I have always been interested in technology and had some good fortune with computers. I have a passion for programming and I am always trying to learn new things.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content>
                      <Card.Description>
                        I need more fillers for these descriptions...
                      </Card.Description>
                    </Card.Content>
                  </MediaQuery>
                </Card>
              </Grid.Row>
            </Grid.Column>
          </MediaQuery>
          <MediaQuery maxWidth={695}>
            <Grid.Column width={12}>
              <Grid.Row>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>High! Oops. Hi!</Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Card.Description>
                      My name is Gonçalo Candeias Amaro and I am a software developer. I am currently working at Optiply as a Backend Intern.
                    </Card.Description>
                  </Card.Content>
                  <MediaQuery minWidth={695}>
                    <Card.Content>
                      <Card.Description>
                        I have always been interested in technology and had some good fortune with computers. I have a passion for programming and I am always trying to learn new things.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content>
                      <Card.Description>
                        I need more fillers for these descriptions...
                      </Card.Description>
                    </Card.Content>
                  </MediaQuery>
                </Card>
              </Grid.Row>
            </Grid.Column>
          </MediaQuery>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12}>
            <Grid.Row>
              <Card fluid>
                <Card.Content>
                  <Card.Header>Current Lifestyle</Card.Header>
                </Card.Content>
                <Card.Content>
                  <Card.Description>
                    I was once a team player, played a lot of sports, was a Boy Scout, was in a Military School marching with my platoon, but now...
                    Now, I have learned to enjoy and embraced the Lebowski Lifestyle, and I now enjoy going out with friends, meeting girls and playing video games or creating personal projects when alone.
                  </Card.Description>
                </Card.Content>
                <MediaQuery minWidth={695}>
                  <Card.Content>
                    <Card.Description>
                      Since you are on desktop and you are forcing me to fill some gaps, I will fill this block with a list of my favourite media:
                      <h3>Music:</h3>
                      <ul>
                        <li>Psytrance: Basically the whole genre but MAD TRIBE has a special place</li>
                        <li>Rammstein: I grew up listening to these german sickos</li>
                        <li>G-Eazy: I know it is just a character but I once wanted to be like that persona</li>
                      </ul>
                      <h3>Movies:</h3>
                      <ul>
                        <li>The Matrix</li>
                        <li>The Matrix Reloaded</li>
                        <li>The Matrix Revolutions</li>
                        <li>Django: Unchained</li>
                        <li>Pulp Fiction</li>
                        <li>Kill Bill</li>
                        <li>Kill Bill 2</li>
                        <li>Inglourious Basterds</li>
                        <li>Fear and Loathing in Las Vegas</li>
                        <li>Catch Me If You Can</li>
                        <li>The Godfather</li>
                        <li>The Godfather 2</li>
                        <li>The Godfather 3</li>
                        <li>The Hangover</li>
                        <li>The Hangover Part II</li>
                        <li>The Hangover Part III</li>
                      </ul>
                      And more...
                    </Card.Description>
                  </Card.Content>
                </MediaQuery>
              </Card>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={4}>
            <Image src={MyWastedFace} size='medium' rounded />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Personal
