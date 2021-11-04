import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const NavList = () => {

    const state = { activeItem: '' }
    const handleItemClick = (_event, { name }) => this.setState({ activeItem: name })
    const { activeItem } = state

    return (
        <>
            <Menu.Item
                position="right"
                as={NavLink} to="/"
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
            />
            <Menu.Item
                as={NavLink} to="/personal"
                name='personal'
                active={activeItem === 'personal'}
                onClick={handleItemClick}
            />
            <Menu.Item
                as={NavLink} to="/academic"
                name='academic'
                active={activeItem === 'academic'}
                onClick={handleItemClick}
            />
            <Menu.Item
                as={NavLink} to="/career"
                name='career'
                active={activeItem === 'career'}
                onClick={handleItemClick}
            />
            <Menu.Item
                as={NavLink} to="/projects"
                name='projects'
                active={activeItem === 'projects'}
                onClick={handleItemClick}
            />
            <Menu.Item
                as={NavLink} to="/social"
                name='social'
                active={activeItem === 'social'}
                onClick={handleItemClick}
            />
            <Menu.Item
                as={NavLink} to="/curriculum"
                name='curriculum'
                active={activeItem === 'curriculum'}
                onClick={handleItemClick}
            />
            <Menu.Item
                as={NavLink} to="/contact"
                name='contact'
                active={activeItem === 'contact'}
                onClick={handleItemClick}
            />
        </>
    )
}

export default NavList
