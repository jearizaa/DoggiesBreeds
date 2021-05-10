import React, { useState } from 'react'
import './_Nav.scss'
import { useSelector, useDispatch } from 'react-redux';
import { setQuery, setSearch, setFilter } from '../../redux/searchBarReducer/searchBarActions'
import { resetSearch } from '../../redux/catalogueReducer/catalogueActions'
import AppBar from '@material-ui/core/AppBar';
import PetsIcon from '@material-ui/icons/Pets';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import SearchBar from '../SearchBar/SearchBar';

export default function Nav() {
    const status = useSelector((state) => state.searchBarReducer.status);
    const filter = useSelector((state) => state.searchBarReducer.filter);
    const breedGroups = useSelector((state) => state.catalogueReducer.breedGroups);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch()

    function handleReset(){
        dispatch(setQuery('')) 
        dispatch(setSearch(false))
        dispatch(resetSearch())
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleFilter = (event) => {
        dispatch(setFilter(event.target.textContent))
        handleClose()
    }

    return (
        <div className='navContainer'>
            <AppBar className='appBar'>
                <Toolbar className='toolBar'>  
                    <IconButton className='iconButton' edge='end' onClick={handleReset}>
                        <PetsIcon />
                    </IconButton>    
                    <h2 className={`typo ${status}Typo`}>
                        Doggies
                    </h2>    
                    <SearchBar /> 
                    <IconButton className='iconButton' edge='end' onClick={handleClick}>
                        <MenuIcon />                        
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                    <MenuItem key='All' selected={'All' === filter} onClick={handleFilter}>All</MenuItem>
                        {
                            breedGroups.map(group => {
                                return <MenuItem key={group} selected={group === filter} onClick={handleFilter}>{group}</MenuItem>
                            })
                        }                        
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}