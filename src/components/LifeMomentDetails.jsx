import React from 'react'
import PropTypes from 'prop-types'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const LifeMomentDetails = (props) => {
  const [open, setOpen] = React.useState(false)
  const link = new URL(props.link)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color='black'>Show Details</Button>}
    >
      <Modal.Header>{props.title}</Modal.Header>
      <Modal.Content image>
        <Image wrapped rounded src={props.image} />
        <Modal.Description>
          <Header>{props.name}</Header>
          <p>{props.content}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' href={link} target='_blank'>
          Visit Website
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

LifeMomentDetails.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.object
}

export default LifeMomentDetails
