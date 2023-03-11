export const Like = `#graphql  
  type Like {
    id:           String     
    createdAt:    DateTime   
    updatedAt:    DateTime   
    author:       User       
    comment:      Comment #?   
    gallery:      Gallery #?   
    image:        Image #?     
    post:         Post #?      
    character:    Character #? 
    book:         Book #?      
  }
`