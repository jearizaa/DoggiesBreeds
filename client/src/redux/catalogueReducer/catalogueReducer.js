import { GET_DOGS, ADD_DOGS, SEARCH_DOGS, RESET_SEARCH, SET_PAGE } from './catalogueActions' 

const initialState = {
    dogs: [],
    // Estos parecen ser todos los breed_group
    breedGroups: ['Herding', 'Hound', 'Mixed', 'Non-Sporting', 'Sporting', 'Terrier', 'Toy', 'Unknown', 'Working'],
    searchDogs: [],
    page: 1,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
      case GET_DOGS: {
        let breedGroups = [...state.breedGroups]
        // action.payload.forEach(dog => { --------------------------// Actualizacion de breedGroups
        //     let breedGroup = dog.breeds[0].breed_group
        //     if(!breedGroups.includes(breedGroup)){
        //         if(!breedGroup){
        //             if(!breedGroups.includes('Unknown')){
        //                 breedGroups.push('Unknown')
        //             }                    
        //         }else{
        //             breedGroups.push(breedGroup)
        //         }
        //     }
        // })
        return {
          ...state,
          dogs: [...action.payload],
          breedGroups: [...breedGroups].sort()
        };
      }
      case ADD_DOGS: {
        let breedGroups = [...state.breedGroups]
        // action.payload.forEach(dog => { --------------------------// Actualizacion de breedGroups
        //     let breedGroup = dog.breeds[0].breed_group
        //     if(!breedGroups.includes(breedGroup)){
        //         if(!breedGroup){
        //             if(!breedGroups.includes('Unknown')){
        //                 breedGroups.push('Unknown')
        //             }                    
        //         }else{
        //             breedGroups.push(breedGroup)
        //         }
        //     }
        // })
        return {
            ...state,
            dogs: [...state.dogs, ...action.payload],
            breedGroups: [...breedGroups].sort(),
        };
      }
      case SEARCH_DOGS: {
        let breedGroups = [...state.breedGroups]
        // action.payload.forEach(dog => { --------------------------// Actualizacion de breedGroups
        //     let breedGroup = dog.breeds[0].breed_group
        //     if(!breedGroups.includes(breedGroup)){
        //         if(!breedGroup){
        //             if(!breedGroups.includes('Unknown')){
        //                 breedGroups.push('Unknown')
        //             }                    
        //         }else{
        //             breedGroups.push(breedGroup)
        //         }
        //     }
        // })
        return {
          ...state,
          searchDogs: [...action.payload],
          breedGroups: [...breedGroups].sort(),
        };
      }
      case RESET_SEARCH: {
        return {
            ...state,
            searchDogs: [],
          };
      }
      case SET_PAGE: {
          return {
              ...state,
              page: action.payload,
          }
      }
      default:
        return state;
    }
};