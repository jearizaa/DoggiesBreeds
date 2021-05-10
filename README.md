# DoggiesBreeds
 
 TheDogApi FrontEnd

 The API has only three valid routes. The other promised routes are not working.

GET ALL ROUTE
https://api.thedogapi.com/v1/images/search?limit=12&page=${page}&order=asc

SEARCH BY NAME ROUTE - NO PAGINATION AVAILABLE
https://api.thedogapi.com/v1/breeds/search?q={{query}}

SEARCH BY ID ROUTE
https://api.thedogapi.com/v1/images/:dogID

 The routes working do not share the same model and there is missing data among true data. Handled as "Unknown". 

 Tranlating the models have a cost on performance (search).

 Search route has neither limitation nor pagination.

 Data loading and search by name is done with the API.

 Filtering is done in the client side based in the data loaded previously. When 12 are loaded, the filter is done on those 12. When there is a search query, the filter is done on the results from the search.
 
 There is no route to know any classification for filtering, so data is classified by breed groups, breed groups for filtering are updated according to loaded data.

 <a href='https://jearizaa.github.io/DoggiesBreeds/'>https://jearizaa.github.io/DoggiesBreeds/</a>



