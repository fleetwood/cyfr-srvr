export const ChatMessage = `#graphql  
  type ChatMessage {
    id:           String   
    createdAt:    DateTime 
    updatedAt:    DateTime 
    visible:      Boolean  
    seen:         Boolean  
    content:      String
    author:       User     
    chatRoom:     ChatRoom 
  }
`