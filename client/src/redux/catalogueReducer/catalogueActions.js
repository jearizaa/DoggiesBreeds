import axios from 'axios'
export const GET_DOGS = 'GET_DOGS';
export const ADD_DOGS = 'ADD_DOGS'
export const SEARCH_DOGS = 'SEARCH_DOGS'
export const RESET_SEARCH = 'RESET_SEARCH';
export const SET_PAGE = 'SET_PAGE'

export function getDoggies() {    
    return async function (dispatch) {
        const data = await axios.get(`https://api.thedogapi.com/v1/images/search?limit=12&page=1&order=asc`, {
            headers: {'x-api-key': '2d661813-6ac9-4c1a-9438-b7ed68030f94'}
        })
        dispatch({
            type: GET_DOGS,
            payload: data.data,
        });
    };
}

export function addDoggies(page){
    return async function (dispatch){
        const data = await axios.get(`https://api.thedogapi.com/v1/images/search?limit=12&page=${page}&order=asc`, {
            headers: {'x-api-key': '2d661813-6ac9-4c1a-9438-b7ed68030f94'}
        })
        dispatch({
            type: ADD_DOGS,
            payload: data.data,
        });
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
    let idFake = 0;
    return async function (dispatch){
        const data = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${query}&limit=12`, {
            headers: {'x-api-key': '2d661813-6ac9-4c1a-9438-b7ed68030f94'}
        })
        //los modelos de la API no son consistentes, asi que tenemos que organizar la info
        //la busqueda nos retorna la id sin imagenes, entonces hacemos busquedas por id
        let ids = data.data.map( async (dog) => { 
            try{
                if(dog.reference_image_id){
                    return axios.get(`https://api.thedogapi.com/v1/images/${dog.reference_image_id}`, {
                        headers: {'x-api-key': '2d661813-6ac9-4c1a-9438-b7ed68030f94'}
                        })
                }
            }catch(error){
                console.log(error)
            }           
        })
        ids = await Promise.all(ids)   
        // el modelo de busqueda por id conincide con el modelo usado
        // sin embargo hay varias respuestas vacias metidas entre las correctas    
        ids = ids.map(id => {
            if(id){
                return id.data
            }else{
                return {//retornamos lo minimo necesario para la tarjeta
                    url: 'https://cdn.livekindly.co/wp-content/uploads/2018/11/livekindly-animal-movies-1.jpg',
                    id: idFake++,
                    breeds: [{}],
                }
            }            
        })

        dispatch({
            type: SEARCH_DOGS,
            payload: ids,
        });
    }
}