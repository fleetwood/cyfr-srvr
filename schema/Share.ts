export const Share = `#graphql  
  type Share {
    id:           String   
    createdAt:    DateTime 
    updatedAt:    DateTime 
    visible:      Boolean  
    author:       User     
    gallery:      Gallery #? 
    image:        Image #?   
    post:         Post #?    
  }
`