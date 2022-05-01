import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Header, Divider, Grid, CardGroup, Card } from 'semantic-ui-react'

const Projects = () => {
  const [user, setUser] = useState([])
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setUser(await fetchUser())
      setRepos(await fetchRepos())
    }
    fetchAPI()
  }, [])

  const fetchUser = async () => {
    let data = []
    await axios.get('https://api.github.com/users/CatKinKitKat', {
    }).then(response => {
      data = response.data
    }).catch(_error => {
      console.log('Error fetching user')
      console.log(_error)
    })
    return data
  }

  const fetchRepos = async () => {
    let data = []
    await axios.get('https://api.github.com/users/CatKinKitKat/repos', {
    }).then(response => {
      data = response.data
    }).catch(_error => {
      console.log('Error fetching repos')
      console.log(_error)
    })
    return data
  }

  return (
    <Container>
      <Header size="huge">
        (Github) Projects
      </Header>
      <Divider />
      <Grid>
        <Grid.Row className="ui centered">
          <Card fluid>
            <Card.Content>
              <Card.Header>
                {user.login} - {user.name}
              </Card.Header>
              <Card.Meta>
                {user.bio}
              </Card.Meta>
              <Card.Description>
                {user.location}
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row>
          <CardGroup className='ui centered'>
            {repos.map((repo, index) => {
              if (repo.name != "CatKinKitKat") {
                let description = repo.description
                if (repo.description == null) {
                  description = 'Empty description'
                }
                return (
                  <Card key={index} onClick={() => window.open(repo.html_url, "_blank")}>
                    <Card.Content>
                      <Card.Header>
                        {repo.name}
                      </Card.Header>
                      <Card.Description>
                        {description}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Card.Meta>
                        {repo.language}
                      </Card.Meta>
                    </Card.Content>
                  </Card>
                )
              }
            })}
          </CardGroup>
        </Grid.Row>
        <Grid.Row>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Projects
