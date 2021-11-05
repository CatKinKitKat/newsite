import React from 'react'
import { Container, Header, Divider, Item } from 'semantic-ui-react'
import LifeMoment from '../components/LifeMoment'
import IPELogo from '../images/pupilos.svg'
import IPEPhoto from '../images/pupilos.jpeg'

const Academic = () => {
  return (
    <Container>
      <Header size='huge'>
        Academic
      </Header>
      <Divider />
      <Item.Group divided>
        <LifeMoment
          logo={IPELogo}
          image={IPEPhoto}
          link='www.pupilos.eu'
          title='Pupilos do Exercito'
          name='Middle and High School also a Professional Degree'
          minContent='I studied in this Military school for most of my young life, I was formed here, for better or worse. I finished this journey with a degree on my hands.'
          content='As I went through troubled schools in my home town, I felt the urge for change, both in my life direction and my attitude, so I volunteered to go. I suffered like hell, spent two whole years without a single soul whom I count count on and call a friend... Spent the next three, building a social life and hierachical power through the military structure of my school so I could have some confort I desperatly needed, since I had enrolled in a Computer Managment Degree and not only I was a natural and had some previous knowledge, I had time to burn.'
          date='September 2012 - July 2017'
        />
      </Item.Group>
    </Container>
  )
}

export default Academic
