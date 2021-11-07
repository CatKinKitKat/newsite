import React from 'react'
import { Container, Divider, Header, Item } from 'semantic-ui-react'
import LifeMoment from '../components/LifeMoment'
import NBLogo from '../images/novabase.svg'
import NBImage from '../images/novabase.jpeg'
import VodaLogo from '../images/vodafone.svg'
import VodaImage from '../images/vodafone.jpeg'

const Career = () => {
  return (
    <Container>
      <Header size="huge">
        Career
      </Header>
      <Divider />
      <Item.Group divided>
      <LifeMoment
          logo={VodaLogo}
          image={VodaImage}
          link='https://www.vodafone.pt'
          title='Tech Support Intern'
          name='Schoolar Internship for skill development'
          minContent='This was my first working experience, that was provided by my school for social and troubleshooting skill development and work experience.'
          content="This was rather annoying. This company is not bad, not at all, they are very good... Yet, the division which lured us in was specialized in 'the dark arts of Lying', the call centre.
          They started to show us different roles and specialities, which we could have developed and worked long-term, in a daily cycle in the first two weeks and then told us the truth, a month of Call Center classes and a tiny bit of real work at the end with a bad, bad team which couldn't stand each other and somehow had the bad mixture jealousy and superiority complex because of our military school and culture."
          date='May 2016 - June 2016'
          activities={['Smartphone Repair', 'Flyer Distribution']}
        />
        <LifeMoment
          logo={NBLogo}
          image={NBImage}
          link='https://www.novabase.pt'
          title='Cybersecurity Intern'
          name="12th Grade's Professional Internship"
          minContent='My second work experience also provided by my high school for my 12th grade work experience requirements, this was more technical and way more enjoyable.'
          content='The Professional Internship of 12th Grade developed my skill set and a new vision about a company very different of the last one, with a completely different internal culture and ways of being although very efficient and competitive with the competition. I also learnt new things, new ideas, connections and a wider "field-of-view".
          I was also in a project on a wIDS wish enriched my knowledge in Pen Testing, networks and communication, Linux and coding.'
          date='November 2016 - February 2017'
          activities={['Bash scripting', 'Pen Testing Classes']}
        />
      </Item.Group>
    </Container>
  )
}

export default Career
