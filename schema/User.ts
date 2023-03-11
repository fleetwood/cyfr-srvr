export const User = `#graphql
type User {
  id:            String        
  name:          String #?
  email:         String #?       
  emailVerified: DateTime #?
  image:         String #?
  accounts:      [Account]
  blocking:      [Block]       
  blocked:       [Block]       
  chatMessages:  [ChatMessage] 
  comments:      [comment:]     
  ownedCommunes: [Commune]     
  communes:      [CommunUser] 
  fanOf:         [Fan]         
  fans:          [Fan]         
  follower:      [Follow]      
  following:     [Follow]      
  galleries:     [gallery:]     
  images:        [Image]       
  likes:         [Like]        
  posts:         [Post]        
  sessions:      [Session]
  shares:        [Share]       
  chats:         [ChatRoom]    
  membership:    Membership #?   
  books:         [Book]        
}
`