import React from 'react'
import PropTypes from 'prop-types'
import { Item } from 'semantic-ui-react'
import LifeMomentDetails from './LifeMomentDetails'

const LifeMoment = (props) => {
    return (
        <Item>
            <Item.Image size='tiny' src={props.logo} />
            <Item.Content verticalAlign='middle'>
                <Item.Header as='a'>{props.title}</Item.Header>
                <Item.Meta>{props.date}</Item.Meta>
                <Item.Description>{props.minContent}</Item.Description>
                <Item.Extra>
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
    logo: PropTypes.object
}

export default LifeMoment
