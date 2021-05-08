import React from 'react'
import { FormControl } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import { useSelector } from 'react-redux';
import './_SearchBar.scss'


export default function SearchBar() {
    const status = useSelector((state) => state.searchBarReducer.status);

    return (
        <div className={`searchBarContainer ${status}`}>
        <FormControl>
            <Toolbar>
                <IconButton className='iconButton' edge='end'>  
                    <SearchIcon />
                </IconButton>
                <InputBase
                className='inputBase'
                placeholder="Search…"
                />
            </Toolbar>
        </FormControl>   
                
        </div>
    )
}
