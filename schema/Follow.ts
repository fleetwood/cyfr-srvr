export const Follow = `#graphql  
  type Follow {
    id:           String     
    createdAt:    DateTime   
    updatedAt:    DateTime   
    follower:     User       
    following:    User #?      
    character:    Character #? 
    book:         Book #?      
  }
`