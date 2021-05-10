import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setQuery, setSearch } from '../../redux/searchBarReducer/searchBarActions'
import { searchDoggies, resetSearch, setPage } from '../../redux/catalogueReducer/catalogueActions'
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
        if(event.target.value.length === 0){
            dispatch(setSearch(false))
            dispatch(resetSearch())
            dispatch(setPage(1))
        }
        dispatch(setQuery(event.target.value))        
    }

    function handleSearch(){
        if(query.length > 0){
            dispatch(searchDoggies(query))
            dispatch(setSearch(true))
            dispatch(setPage(1))
        }
    }

    return (
        <div className={`searchBarContainer ${status}`}>
        <FormControl>
            <Toolbar>
                <IconButton className='iconButton' edge='end' onClick={handleSearch}>  
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
