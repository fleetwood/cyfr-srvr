export const Commune = `#graphql  
  type Commune {
    id:           String         
    createdAt:    DateTime       
    updatedAt:    DateTime       
    entity:       Entity
    gallery:      Gallery #?       
    owner:        User           
    thread:       CommentThread #? 
    users:        [CommunUser]  
  }
`