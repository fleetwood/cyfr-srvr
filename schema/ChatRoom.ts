export const ChatRoom = `#graphql  
  type ChatRoom {
    id:           String        
    createdAt:    DateTime      
    updatedAt:    DateTime      
    visible:      Boolean       
    party:        String        
    messages:     [ChatMessage]
    users:        [User]        
  }
`