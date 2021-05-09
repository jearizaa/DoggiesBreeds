import React from 'react'
import './_Nav.scss'
import { useSelector } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import PetsIcon from '@material-ui/icons/Pets';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchBar from '../SearchBar/SearchBar';

export default function Nav() {
    const status = useSelector((state) => state.searchBarReducer.status);

    return (
        <div className='navContainer'>
            <AppBar className='appBar'>
                <Toolbar className='toolBar'>  
                    <IconButton className='iconButton' edge='end'>
                        <PetsIcon />
                    </IconButton>    
                    <h2 className={`typo ${status}Typo`}>
                        Doggies
                    </h2>    
                    <SearchBar /> 
                    <IconButton className='iconButton' edge='end'>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}