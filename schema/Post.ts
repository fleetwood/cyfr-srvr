export const Post = `#graphql
type Post {
    id:            String   
    createdAt:     DateTime 
    updatedAt:     DateTime 
    visible:       Boolean  
    content:       String #?
    images:        [Image]  
    likes:         [Like]   
    author:        User     
    news:          News #?    
    comment:       Post #?    
    post_comments: [Post]   
    shares:        [Share]  
  }
`