export const enums = `#graphql
  enum Audience {
    PUBLIC
    USER
    READER
    MEMBER
    MEMBER_EXP
    AGENT
    AGENT_EXP
    ADMIN
    OWNER
  }
  
  enum Role {
    BLOCKED
    VIEW
    comment:
    REVIEW
    EDIT
    ADMIN
    OWNER
  }
  
  enum Entity {
    INBOX
    gallery:
    POST
    ARTICLE
    BOOK
    CHARACTER
    USER
  }
  
  enum BookStatus {
    PRIVATE
    DRAFT
    MANUSCRIPT
    PUBLISHED
  }
  
  enum Visibility {
    PUBLIC
    READERS
    MEMBERS
    AGENTS
    GROUP
  }
`