export const Comment = `#graphql
type Comment {
    id:           String        
    createdAt:    DateTime      
    updatedAt:    DateTime      
    threadType:   Entity
    content:      String
    visible:      Boolean       
    author:       User
    thread:       CommentThread
    likes:        [Like]        
  }
`