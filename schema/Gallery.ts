export const Gallery = `#graphql  
  type Gallery {
    id:                String     
    createdAt:         DateTime   
    updatedAt:         DateTime   
    visible:           Boolean    
    title:             String #?
    description:       String #?
    blocking:          [Block]    
    commune:           Commune #?   
    author:            User       
    images:            [Image]    
    likes:             [Like]     
    shares:            [Share]    
    book_gallery:      Book #?      
    character_gallery: Character #? 
    chapter_gallery:   Chapter #?   
  }
`