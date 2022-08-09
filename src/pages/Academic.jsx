import React from 'react'
import { Container, Header, Divider, Item, Card } from 'semantic-ui-react'
import LifeMoment from '../components/LifeMoment'
import ExtraCurricular from '../components/ExtraCurricular'
import IPELogo from '../images/pupilos.svg'
import IPEPhoto from '../images/pupilos.jpeg'
import ESTIGLogo from '../images/estig.png'
import ESTIGPhoto from '../images/estig.jpeg'
import CambridgeLogo from '../images/cambridge.svg'

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
          link='https://www.pupilos.eu'
          title='Pupilos do Exército'
          name='Middle and High School also a Professional Degree (Level 4)'
          minContent='I studied in this Military school for most of my young life, I was formed here, for better or worse. I finished this journey with a degree on my hands.'
          content='As I went through troubled schools in my home town, I felt the urge for change, both in my life direction and my attitude, so I volunteered to go.
          I suffered like hell, spent two whole years without a single soul whom I count count on and call a friend...
          Spent the next three, building a social life and hierarchical power through the military structure of my school so I could have some comfort I desperately needed, since I had enrolled in a Computer Management Degree and not only I was a natural and had some previous knowledge, I had time to burn.'
          date='September 2012 - July 2017'
          activities={['Fencing', 'Rowing', 'Magazine Vending', 'Ran website']}
        />
        <LifeMoment
          logo={ESTIGLogo}
          image={ESTIGPhoto}
          link='https://www.ipbeja.pt/UnidadesOrganicas/ESTIG/Paginas/default.aspx'
          title='Escola Superior de Tecnologia e Gestão'
          name='Bachelor in Computer Science (BSc)'
          minContent="I studied in this School for about four years but have been enrolled in five. I had to give one up for health issues, however I both finished my degree and I'm alive."
          content="After finally feeling the relief of five years of pain and the exam season was over, I immediately enrolled in the nearest available Polytechnic Institute, since I would only go to University if it was my home town's.
          However University of Évora was full, and so I would only have time and budget por a more practical education instead of a traditional theoretical one, so Polytechnic Institute of Beja was the obvious choice: cheap, reliable and near-home.
          I had known the curriculum was good since it ranks higher than a lot of other Colleges and my cousin is a graduate from here as well."
          date='September 2017 - July 2021'
          activities={['Sticker Selling', 'Entrepreneurship', 'Psychedelics']}
        />
      </Item.Group>
      <Header size='medium'>
        Extra-Academic
      </Header>
      <Divider />
      <Card.Group centered>
        <ExtraCurricular
          logo={CambridgeLogo}
          title='Cambridge Exam for Children'
          date='June 2011'
          content='Writing (5/5) Listening (5/5) Speaking (4/5)'
        />
        <ExtraCurricular
          logo={CambridgeLogo}
          title='Cambridge Exam for Children'
          date='June 2012'
          content='Writing (5/5) Listening (5/5) Speaking (5/5)'
        />
        <ExtraCurricular
          logo={CambridgeLogo}
          title='National Exam - Cambridge Equivalence'
          date='June 2014'
          content='Writing (5/5) Listening (5/5) Speaking (5/5)'
        />
      </Card.Group>
    </Container >
  )
}

export default Academic
