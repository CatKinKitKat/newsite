import React from 'react'
import { Container, Header, Divider, Item } from 'semantic-ui-react'
import LifeMoment from '../components/LifeMoment'
import IPELogo from '../images/pupilos.svg'
import IPEPhoto from '../images/pupilos.jpeg'
import ESTIGLogo from '../images/estig.png'
import ESTIGPhoto from '../images/estig.jpeg'

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
          link='https://www.pupilos.eu/'
          title='Pupilos do Exército'
          name='Middle and High School also a Professional Degree (Level 4)'
          minContent='I studied in this Military school for most of my young life, I was formed here, for better or worse. I finished this journey with a degree on my hands.'
          content='As I went through troubled schools in my home town, I felt the urge for change, both in my life direction and my attitude, so I volunteered to go.
          I suffered like hell, spent two whole years without a single soul whom I count count on and call a friend...
          Spent the next three, building a social life and hierachical power through the military structure of my school so I could have some confort I desperately needed, since I had enrolled in a Computer Managment Degree and not only I was a natural and had some previous knowledge, I had time to burn.'
          date='September 2012 - July 2017'
          activities={['Fencing', 'Rowing', 'Magazine Vending', 'Ran website']}
        />
        <LifeMoment
          logo={ESTIGLogo}
          image={ESTIGPhoto}
          link='https://www.pupilos.eu/'
          title='Escola Superior de Tecnologia e Gestão'
          name='Bachelor in Computer Science (BSc)'
          minContent="I studied in this School for about four years but have been enrolled in five. I had to give one up for health issues, however I both finished my degree and I'm alive."
          content="After finally feeling the relief of five years of pain and the exam season was over, I imediately enrolled in the nearest available Polytechnic Institute, since I would only go to University if it was my home town's.
          However University of Évora was full, and so I would only have time and budget por a more practical education instead of a traditional theoretical one, so Polytechnic Instutute of Beja was the obvious choice: cheap, reliable and near-home.
          I had known the curriculum was good since it ranks higher than a lot of other Colleges and my cousin is a gradutate from here as well."
          date='September 2017 - July 2021'
          activities={['Sticker Selling', 'Entrepeneurship', 'Psychedelics']}
          />
      </Item.Group>
    </Container>
  )
}

export default Academic
