# BRAINWASH

## Introduction
---
Over the last few years, while working through the pandemic, we’ve been spending a lot more time at home and people have turned to social media to stay connected with others to fill that extra time.

As we know, many of the popular social media platforms, like Instagram and TikTok, have been proven to be quite detrimental to our mental health, so we wanted to create a platform which would foster a healthier online community where people can connect with others in a social context, all while consuming more positive content.

Users come to Brainwash to learn new skills, improve existing passions, and share their own knowledge through various media types with an online community of other passionate lifelong learners - Think master class meets instagram & youtube.

Brainwash is our submission for the final project for the lighthouse labs web development bootcamp. Over an enjoyable 10 days, the creators: Russell Engebretson, Sophie Oliver and Katie Herda, worked together to build out an MVP of the platform, expanding on knowledge learned in the bootcamp, to add functionality that would allow users to create and consume content, and communicate with other Brainwashers.

## Live Server
We have launched our app live using Heroku, and it can be accessed at [https://brainwash-ify-ology.herokuapp.com/](https://brainwash-ify-ology.herokuapp.com/)

## Features
---
### Log in/out
- log in using either your Google or Github account
- This login will pull data from your social account, including email and your social avatar
- signing in will create a local user for you which is customizable (see profile page section)
- you can then use all features of our site
- log out simply by clicking log out

### Index Page

When you arrive on our site you will be on the main index page. This page has the following features:

- List of the most recent posts by other users
- Save posts to learn more about the topics later by browsing through the posts and liking them
- Toggle to your liked posts by selecting the "Liked posts" tab in the top right
- Click on a post to go to the post show page where you can view details about the lesson, and watch any audio or video files attached to it
- Search by title
- Filter by your interests
- Click on the "New Post" button to create your own post

### Post Show

When you click on a post, it will take you to the Post Show page, where you can:

- Watch the Audio or Video file
- Read the description
- Like/unlike the post
- Leave a comment on the post
- Delete any of YOUR comments on the post
- Navigate to the profile page of the Poster or any of the commentors

### Profile Page

There are two profile pages on our site, one for yourself and one for any other user. To access YOUR page, click your avatar/username in the top right of the Navbar next to the Log out button

Here you will see your profile along with an index of all of YOUR posts, where you can:
- view your follower/following counts
- view profile info (username, bio, avatar)
- edit your profile (change name, username, bio and avatar)
- Search through your posts by title
- filter your posts by interests
- create a new post

You can also view other people's profile pages by clicking on their usernames on either their posts, or in their comments. Here you can:

- View their profile
- View all the posts created by them
- follow/unfollow
- view any of their posts which you liked
- search by title, filter by your interests
- create a new post

### Create Post

On this page you can create your own post:

- Add a title, description, post type (Audio/video), main category (interest)
- Choose a thumbnail image
- Choose a post file (audio/video)
- Create and save files to the cloud


## Repository
---
This is the front end repository for our app, if you would like to view the backend API click [Brainwash-API](https://github.com/rengebre/brainwash-ify-ology-api)

We built the front end using React, with React router to navigate between pages and allow for a multi-page feel which our founders preferred.

With the short 10 day timeline for producing the platform, we wanted to go with a simple sleek layout and style for the UI, so we implemented Material UI components as they come pre-built with some attractive features.

Additionally we integrated Autho0 using oAuth 2.0 to allow for user authentication and social logins, without having to deal with security issues associated with handling user data properly... let's offload that to companies who have this well sorted out ;).

## Project Layout
---
This application was laid out following some best practices while using React. In the src directory you will find a [component directory](https://github.com/rengebre/brainwash-ify-ology/tree/main/src/components) which houses all of our react components which are fed to the App.js file located in the root of the src directory.

# Running the Repo locally for development
---
create a .env file with a single component in it
```js
  PORT=3002
```

This is to avoid conflicts with the rails backend API running on port 3000, React's default.

run the following commands in your terminal: 
```js
npm install
npm start
```
The server should start on localhost port 3002.
