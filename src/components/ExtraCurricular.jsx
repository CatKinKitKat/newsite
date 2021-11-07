import React from 'react'
import PropType from 'prop-types'
import { Image, Card } from 'semantic-ui-react'

const ExtraCurricular = (props) => {
  return (
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={props.logo}
        />
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>{props.date}</Card.Meta>
        <Card.Description>{props.content}</Card.Description>
      </Card.Content>
    </Card>
  )
}

ExtraCurricular.propTypes = {
  title: PropType.string,
  content: PropType.string,
  date: PropType.string,
  logo: PropType.object
}

export default ExtraCurricular
