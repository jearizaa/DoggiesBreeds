import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setQuery } from '../../redux/searchBarReducer/searchBarActions'
import { FormControl } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import './_SearchBar.scss'


export default function SearchBar() {
    const status = useSelector((state) => state.searchBarReducer.status);
    const query = useSelector((state) => state.searchBarReducer.query);
    const dispatch = useDispatch()

    function handleChange(event){
        dispatch(setQuery(event.target.value))
    }

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
                value={query}
                onChange={handleChange}
                />
            </Toolbar>
        </FormControl>   
                
        </div>
    )
}
