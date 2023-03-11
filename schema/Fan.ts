export const Fan = `#graphql  
  type Fan {
    id:           String   
    createdAt:    DateTime 
    updatedAt:    DateTime 
    fan:          User     
    fanOf:        User     
  }
`