export const VerificationToken = `#graphql  
  type VerificationToken {
    identifier:   String
    token:        String   
    expires:      DateTime
  }
`
export const Session = `#graphql 
  type Session {
    id:           String   
    sessionToken: String   
    userId:       String
    expires:      DateTime
    user:         User     
  }
`