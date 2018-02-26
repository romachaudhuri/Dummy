"use strict"
//GET A BOOK
export function getBooks(book)
{
    return{
        type:"GET_BOOKS",
        PAYLOAD:book
    }
}
//UPDATE A BOOK
export function updateBooks(book)
{
    return{
        type:"POST_BOOKS",
        PAYLOAD:book
    }
}
//DELETE A BOOK
export function deleteBooks(book)
{
    return{
        type:"DELETE_BOOKS",
        PAYLOAD:id
    }
}
