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

## `users/` routes

- `users/`
  - Index route, shows all users
  - Requires admin login/auth
- `users/<int:user_id>/`
  - Show route for user of specified id
- `users/auth/`
  - authentication routes:
    - `login/`
    - `logout/`
    - `user/`
    - `register/`

## `categories/` routes

- `categories/`
  - Index route, showing all categories
- `categories/new/`
  - Create route for new category
  - Requires admin login/auth

Request body for `categories/new:

```JSON
{
    "name": "Category name"
}
```

## `posts/` routes

- `posts/`
  - Index route, shows all posts
- `posts/new/`
  - Create route for new post
- `posts/users/<int:user_id>/`
  - Show all posts by user of id `user_id`
- `posts/users/<int:user_id>/following`
  - Show all posts from users/categories that user of id `user_id` is following
- `posts/categories/<int:category_id>/`
  - Show all posts by category of id `category_id`
- `posts/comments/`
  - Index route for all comments in the database
- `posts/<int:post_id>/comments/`
  - Show all comments for a post of id `post_id`
  - Create route for new comment

Request body for `posts/new/` (tags optional):

```JSON
{
    "body": "Post content",
    "poster": user_id,
    "tags": [<list of category ids>]
}
```

Request body for `comments/new/`:

```JSON
{
    "message": "comment content",
    "post": post_id,
    "commenter": user_id
}
```
