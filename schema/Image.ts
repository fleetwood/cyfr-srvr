export const Image = `#graphql  
  type Image {
    id:           String   
    createdAt:    DateTime 
    updatedAt:    DateTime 
    visible:      Boolean  
    title:        String #?
    url:          String
    height:       Int #?     
    width:        Int #?     
    author:       User     
    gallery:      Gallery #? 
    post:         Post #?    
    likes:        [Like]   
    shares:       [Share]  
  }
`