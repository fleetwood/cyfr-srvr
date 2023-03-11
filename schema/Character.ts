export const Character = `#graphql  
  type Character {
    id:           String    
    createdAt:    DateTime  
    updatedAt:    DateTime  
    active:       Boolean   
    name:         String
    family:Name:  String
    givenName:    String
    middleName:   String
    age:          String
    role:         String
    description:  String
    backstory:    String
    title:        String
    archetype:    String
    likes:        [Like]    
    fans:         [Follow]  
    books:        [Book]    
    chapters:     [Chapter] 
    gallery:      Gallery #?  
  }
`