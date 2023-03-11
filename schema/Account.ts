export const Account = `#graphql
type Account {
    id:                   String  
    userId:               String
    type:                 String
    provider:             String
    providerAccountId:    String
    refresh_token:        String #?
    access_token:         String #?
    expires_at:           Int #?
    token_type:           String #?
    scope:                String #?
    id_token:             String #?
    session_state:        String #?
    oauth_token_secret:   String #?
    oauth_token:          String #?
    user:                 User    
  }
`