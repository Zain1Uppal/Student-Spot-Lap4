# Api routes

## Base routes

- `admin/`
  - django admin page
- `users/`
- `categories/`
- `posts/`

All require at least regular login authentication to access

```JSON
headers = {
  "content-type": "application/json",
  "Authorization": "Token <user auth token>"
}

```

---

## `users/` routes

### `users/`

- If admin user:
  - GET -> shows all users

### `users/<str:username>/`

- Any authenticated user:
  - GET -> retrieve user by username
- Only the user themselves / admins
  - PUT/PATCH -> update user details
  - DELETE -> delete user

### `users/<str:username>/following/`

- Any authenticated user:
  - GET -> retrieve user's followed users/categories
- Only the user themselves / admins
  - PATCH -> add/remove to the followed users/categories lists
    - Need to provide at least one of the following fields (can provide multiple, or just one):
      - `"follow_user": user_id`
      - `"follow_category": category_id`
      - `"unfollow_user": user_id`
      - `"unfollow_category": category_id`

      ```JSON
        body = {
          "follow_user": 2
        }
      ```

### `users/auth/`

- authentication routes:
  - `login/`
  - `logout/`
  - `user/`
  - `register/`

---

## `categories/` routes

### `categories/`
  
- GET -> shows all categories

### `categories/new/`

- If admin:
  - POST -> create new category
    - Request body:

      ```JSON
        body = {
            "name": "Category name"
        }
      ```

### `categories/<int:cateId>/`

- GET -> retrieve category by id `cateId`

---

## `posts/` routes

### `posts/`

- GET -> shows all posts

### `posts/new/`

- POST -> Create new post
  - Request body (note: tags are optional):

    ```JSON
      body = {
          "body": "Post Content",
          "poster": user_id,
          "tags": [<list of category ids>]
      }
    ```

### `posts/<int:post_id>`

- All authenticated users:
  - GET -> Show individual post
- Only the user who made the post / admins
  - PUT/PATCH -> Edit post
    - Can update body and/or tags
      - When updating tags, send the full updated tags list

      ```JSON
        body = {
          "body": "Edited Post Content",
          "tags": [<updated list of category ids>]
        }
      ```

  - DELETE -> Delete post

### `posts/users/<int:user_id>/`

- GET -> Show all posts by user of id `user_id`

### `posts/users/<int:user_id>/following`

- GET -> Show all posts from users/categories that user of id `user_id` is following

### `posts/categories/<int:category_id>/`

- GET -> Show all posts by category of id `category_id`

### `posts/comments/`

- GET -> Index route for all comments in the database

### `posts/comments/new/`

- POST -> Create new comment
  - Request body:

    ```JSON
      body = {
          "message": "Comment content",
          "post": post_id,
          "commenter": user_id
      }
    ```

### `posts/comments/<int:comment_id>`

- All authenticated users:
  - GET -> Show individual comment
- Only the user who made the comment / admins
  - PUT/PATCH -> Edit comment
    - Request body:

      ```JSON
        body = {
          "message": "Edited Comment Content",
        }
      ```

  - DELETE -> Delete comment

### `posts/<int:post_id>/comments/`
  
- GET -> Show all comments for a post of id `post_id`
