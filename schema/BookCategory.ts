export const BookCategory = `#graphql  
  type BookCategory {
    id:           String   
    createdAt:    DateTime 
    updatedAt:    DateTime 
    title:        String
    description:  String
    books:        [Book]   
  }
`