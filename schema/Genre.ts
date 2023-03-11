export const Genre = `#graphql  
  type Genre {
    id:           String   
    createdAt:    DateTime 
    updatedAt:    DateTime 
    title:        String   
    descripion:   String
    fiction:      Boolean  
    books:        [Book]   
    covers:       [Covers]  
  }
`