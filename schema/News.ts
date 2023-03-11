export const News = `#graphql  
  type News {
    id:        String    
    createdAt: DateTime  
    updatedAt: DateTime  
    visible:   Boolean   
    title:     String
    banner:    String #?
    startDate: DateTime #?
    endDate:   DateTime #?
    post:      Post      
    audience:  Audience
    views:     Int       
    priority:  Int       
  }
`