export const Book = `#graphql  
  type Book {
    id:           String         
    createdAt:    DateTime       
    updatedAt:    DateTime       
    active:       Boolean        
    status:       BookStatus #?    
    prospect:     Boolean        
    title:        String
    cover:        Cover
    genre:        Genre          
    categories:   [BookCategory] 
    hook:         String #?
    synopsis:     String #?
    back:         String #?
    words:        Int            
    author:       [User]         
    chapters:     [Chapter]      
    characters:   [Character]    
    gallery:      Gallery #?       
    fans:         [Follow]       
    likes:        [Like]         
  }
`