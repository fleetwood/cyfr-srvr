export const CommentThread = `#graphql  
  type CommentThread {
    id:           String    
    createdAt:    DateTime  
    updatedAt:    DateTime  
    requiredRole: Role      
    blocked:      [Block]   
    comments:     [comment:] 
    commune:      Commune #?  
  }
  `