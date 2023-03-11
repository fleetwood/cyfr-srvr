export const Membership = `#graphql  
  type Membership {
    id:           String    
    createdAt:    DateTime  
    updatedAt:    DateTime  
    active:       Boolean   
    level:        Audience #? 
  }
`