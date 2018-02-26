

export function booksReducers(state={
    books:[{
        id:1,
        title:'ROMA CHAUDHURI',
        description:'btech-cse',
        price:22
    },
    {
        id:2,
        title:'RITIKA CHATTERJEE',
        description:'btech-ee',
        price:21
}]

},action)
{
    switch(action.type){
        case "GET_BOOKS":
        return {...state, books:[...state.books]}
        break;
    
        case "POST_BOOK":
        return {books:[...state.books, ...action.payload]}
        break;
    
        case "DELETE_BOOK":
        const currentBookToDelete = [...state.books]
        const indexToDelete = currentBookToDelete.findIndex(
            function(book)
            {
                return book.id ===action.payload.id;
            }
        )
        return {books:[...currentBookToDelete.slice(0, indexToDelete),...currentBookToDelete.slice(indexToDelete+1)]}
        break;
    
    }
}