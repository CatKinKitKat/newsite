import React from 'react'
import MediaQuery from 'react-responsive'
import { Menu, Header, Image, Dropdown } from 'semantic-ui-react'
import NavList from './NavList'
import avatar from '../images/avatar.svg'

const Navigation = () => {
  return (
    <Menu pointing secondary>
      <Menu.Header>
        <Header as='h5'>
          <Image src={avatar} />
        </Header>
      </Menu.Header>
      <MediaQuery minWidth={695}>
        <NavList />
      </MediaQuery>
      <MediaQuery maxWidth={695}>
        <Menu.Item position='right'>
          <Dropdown
            text='Navigation'
            position='right'>
            <Dropdown.Menu>
              <NavList />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </MediaQuery>
    </Menu>
  )
}

export default Navigation
