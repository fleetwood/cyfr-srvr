export const Block = `#graphql  
  type Block {
    id:             String         
    createdAt:      DateTime       
    updatedAt:      DateTime       
    blockedUser:    User           
    blockedGallery: Gallery #?       
    blockedThread:  CommentThread #? 
    user:           User           
  }
`