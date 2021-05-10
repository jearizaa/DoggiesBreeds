import axios from 'axios'
export const GET_DOGS = 'GET_DOGS';
export const ADD_DOGS = 'ADD_DOGS'
export const SEARCH_DOGS = 'SEARCH_DOGS'
export const RESET_SEARCH = 'RESET_SEARCH';
export const SET_PAGE = 'SET_PAGE'

export function getDoggies() {    
    return function (dispatch) {
        axios.get(`https://api.thedogapi.com/v1/images/search?limit=12&page=1&order=asc`, {
            headers: {'x-api-key': '2d661813-6ac9-4c1a-9438-b7ed68030f94'}
        }).then(data => {
            dispatch({
                type: GET_DOGS,
                payload: data.data,
            });
        }).catch(err => console.log(err))
    };
}

export function addDoggies(page){
    return function (dispatch){
        axios.get(`https://api.thedogapi.com/v1/images/search?limit=12&page=${page}&order=asc`, {
            headers: {'x-api-key': '2d661813-6ac9-4c1a-9438-b7ed68030f94'}
        }).then(data => {
            dispatch({
                type: ADD_DOGS,
                payload: data.data,
            });
        }).catch(err => console.log(err))        
    }
}

export function resetSearch() {
    return function (dispatch) {
        dispatch({
            type: RESET_SEARCH,
        });
    };
}

export function setPage(page) {
    return function (dispatch) {
        dispatch({
            type: SET_PAGE,
            payload: page,
        });
    };
}

export function searchDoggies(query){
    return async function (dispatch){
        try{
            //let A = Date.now()
            const data = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${query}&limit=12`, {
                headers: {'x-api-key': '2d661813-6ac9-4c1a-9438-b7ed68030f94'}
            })
            //los modelos de la API no son consistentes, asi que tenemos que organizar la info
            //la busqueda nos retorna la id sin imagenes, entonces hacemos busquedas por id de la imagen
            //let B = Date.now()
            //console.log((B-A)/1000)
            let ids = []
            data.data.forEach( async (dog) => { 
                try{
                    if(dog.reference_image_id){
                        ids.push(axios.get(`https://api.thedogapi.com/v1/images/${dog.reference_image_id}`, {
                            headers: {'x-api-key': '2d661813-6ac9-4c1a-9438-b7ed68030f94'}
                            })
                        )
                    }
                }catch(error){
                    console.log(error)
                }           
            })
            //let C = Date.now()
            //console.log((C-B)/1000)
            ids = await Promise.all(ids)  
            //let D = Date.now()
            //console.log((D-C)/1000) 
            // el modelo de busqueda por id si coincide con el modelo usado
            ids = ids.map(id => {
                    return id.data            
            })
            //let E = Date.now()
            //console.log((E-D)/1000)
            dispatch({
                type: SEARCH_DOGS,
                payload: ids,
            });
        }catch(err){
            console.log(err)
        }        
    }
}