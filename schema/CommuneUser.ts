export const CommuneUser = `#graphql  
  type CommuneUser {
    id:           String   
    createdAt:    DateTime 
    updatedAt:    DateTime 
    role:         Role     
    commune:      Commune  
    user:         User     
  }
`