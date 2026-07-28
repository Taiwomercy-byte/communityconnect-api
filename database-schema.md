models:

user (
    email
    token
    username 
)
user has one profile (0ne-one)
user has many post (one-many)
users has many followers (many-many)

profile (
   username
   bio 
   following
) 

post (
   Id
   content 
   created_at 
   updated_at
   author
   username
   bio
   image
) 
post has many comments (one-many)
posts has many likes (many-many)

Comment (
    Id ,
    body
    created_at 
    updated_at
    author
) 

Follower (
   username
   bio 
   following
)

Like (
   likescount
   commentscount
   likesbyme
) 

