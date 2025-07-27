CREATE TABLE users (
id INT PRIMARY KEY generated ALWAYS AS IDENTITY,
clerk_user_id TEXT UNIQUE,
username TEXT NOT NULL,
bio TEXT
)

CREATE TABLE pet_posts (
  id INT PRIMARY KEY generated ALWAYS AS IDENTITY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  caption TEXT,
  animal_type TEXT CHECK (animal_type IN ('dog', 'cat', 'bird', 'rabbits', 'hamster')),
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE comments (
  id INT PRIMARY KEY generated ALWAYS AS IDENTITY,
  post_id INT REFERENCES pet_posts(id) ON DELETE CASCADE,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
)

INSERT INTO users (clerk_user_id, username, bio) VALUES -- GPT made these
('clerk_abc123', 'flufflover99', 'Proud bunny mum. I also knit.'),
('clerk_def456', 'petdad3000', 'Dog walker and bird watcher.'),
('clerk_ghi789', 'whiskerking', 'Cats. That’s the bio. Just cats.');

INSERT INTO pet_posts (user_id, image_url, caption, animal_type) VALUES
(1, 'https://images.unsplash.com/photo-1580762410711-aa47eb8872d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Snuggles in the sun ☀️', 'rabbits'),
(2, 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Who’s a good boy? Me!', 'dog'),
(3, 'https://images.unsplash.com/photo-1571570703598-39eb580a0329?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'He knocked over my coffee again 😾', 'cat'),
(1, 'https://images.unsplash.com/photo-1721327900411-b315dce4388e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Tiny paws, big attitude', 'hamster'),
(2, 'https://plus.unsplash.com/premium_photo-1661962626711-8121c34826c2?q=80&w=1161&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Singing like it’s a concert 🎶', 'bird');

INSERT INTO comments (post_id, user_id, content) VALUES
(1, 2, 'So cute! What breed is she?'),
(1, 3, 'This bunny melts my heart ❤️'),
(2, 1, 'What a handsome pupper!'),
(3, 2, 'Classic cat behaviour 😂'),
(4, 3, 'That hamster has main character energy.');

SELECT 
  pet_posts.id AS post_id,
  pet_posts.image_url,
  pet_posts.caption,
  pet_posts.animal_type,
  pet_posts.created_at,
  users.username,
  users.bio
FROM pet_posts
JOIN users ON pet_posts.user_id = users.id;

SELECT * FROM users WHERE clerk_user_id = $1

SELECT id, image_url FROM pet_posts ORDER BY created_at DESC
SELECT id, image_url, caption, animal_type FROM pet_posts ORDER BY created_at DESC