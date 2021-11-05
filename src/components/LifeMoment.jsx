import React from 'react'
import PropTypes from 'prop-types'
import { Item, Label } from 'semantic-ui-react'
import LifeMomentDetails from './LifeMomentDetails'

const LifeMoment = (props) => {
  const activities = props.activities
  const buildActivities = () => {
    const builder = (activities) => {
      return activities.map((activity, index) => {
        return (
          <Label key={index}>
            {activity}
          </Label>
        )
      })
    }
    if (activities.length > 0) {
      return (
        <>
          Extra-Curricular Activities:
          <div>
            {builder(activities)}
          </div>
        </>
      )
    }
  }

  return (
    <Item>
      <Item.Image size='tiny' src={props.logo} />
      <Item.Content verticalAlign='middle'>
        <Item.Header as='a'>{props.title}</Item.Header>
        <Item.Meta>{props.date}</Item.Meta>
        <Item.Description>{props.minContent}</Item.Description>
        <Item.Extra>
          {buildActivities()}
          <LifeMomentDetails
            title={props.title}
            name={props.name}
            content={props.content}
            link={props.link}
            image={props.image}
          />
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

LifeMoment.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string,
  minContent: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.object,
  logo: PropTypes.object,
  activities: PropTypes.array
}

export default LifeMoment
