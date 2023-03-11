export const Chapter = `#graphql  
  type Chapter {
    id:         String      
    createdAt:  DateTime    
    updatedAt:  DateTime    
    active:     Boolean     
    content:    String      
    words:      Int         
    characters: [Character] 
    gallery:    Gallery #?    
  }
`