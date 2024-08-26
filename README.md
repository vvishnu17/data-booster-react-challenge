# React Remix Application for Course Lessons

## Overview

This project is a React Remix application designed to manage and present course lessons. The application includes video playback using Vimeo, interactive quiz exercises, and responsive navigation. The project is built with a focus on providing a seamless user experience across desktop and mobile devices.

## Features

- **Video Playback**: Stream course videos directly using the Vimeo platform.
- **Quiz Exercises**: Users can engage in interactive quizzes after watching the videos.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Navigation**: Easily navigate through the course content using previous and next buttons.

## Installation

Follow these steps to set up the project locally:

### Clone the Repository

```bash
git clone https://github.com/vvishnu17/data-booster-react-challenge.git
cd data-booster-react-challenge
```

## Install Dependencies
Ensure you have Node.js installed. Then, install the required dependencies:

```shellscript
npm install
```
## Start the Development Server
To start the development server, run:

```shellscript
npm run dev
```
## Build for Production
To build the project for production, use:

```sh
npm run build
```

## Run in Production Mode
After building, you can run the application in production mode with:

```sh
npm start
```

## Project Structure
The project is organized as follows:

```sh
.
├── public/                  # Static assets (e.g., images, icons)
├── app/
│   ├── components/          # React components
│   │   ├── VideoExercise.jsx
│   │   ├── QuizExercise.jsx
│   ├── routes/              # Remix routes
│   │   ├── CourseLessons.jsx
│   ├── styles/              # Custom CSS files
│   ├── assets/              # JSON data and other assets
│   └── entry.client.tsx     # Remix entry point
├── package.json             # Project dependencies and scripts
├── remix.config.js          # Remix configuration
└── README.md                # Project documentation (this file)


```




# Components
## VideoExercise Component

The VideoExercise.jsx component is responsible for rendering video content using the ReactPlayer library to stream videos from Vimeo. Users can interact with the video through play, pause, and control buttons.

## QuizExercise Component

The QuizExercise.jsx component handles rendering multiple-choice quiz questions. Users can select answers, and the component manages the state of the selected options.

## CourseLessons Component

The CourseLessons.jsx component manages the overall flow of the lessons. It handles navigation between lessons and exercises, and conditionally renders the VideoExercise or QuizExercise components based on the type of content.

## Routing

This application includes the following main route:

### Course Lessons: 
Accessible at baseurl/courselessons, this route serves as the entry point for users to start the course, watch videos, and take quizzes.

# Project Approach
## Overview
This React Remix application was designed to deliver a smooth learning experience by combining video lessons and quizzes in a responsive and easy-to-navigate interface. The goal was to create a platform where users can effortlessly move through course content, watch instructional videos, and take quizzes to reinforce their learning.

## Key Components
## VideoExercise Component:

### Purpose: 
To stream video lessons using Vimeo, offering reliable playback with essential controls like play and pause.
Implementation: Utilizes the ReactPlayer library for easy integration and ensures the video player is responsive across devices.

## QuizExercise Component:

### Purpose: 
To display multiple-choice quizzes that allow users to test their understanding after each lesson.
### Implementation: 
Uses React’s useState to manage selected answers and visually highlights the chosen option for better user interaction.

## CourseLessons Component:

### Purpose: 
To manage the flow of lessons and exercises, providing navigation between different content types.
### Implementation: 
Tracks the current lesson and exercise using state, and dynamically renders either a video or quiz based on the lesson type.

## Responsive Design
The app is built to be fully responsive, ensuring it looks and functions well on both desktops and mobile devices. This was achieved using CSS flexbox and media queries.

## Error Handling
Basic error handling is in place to ensure that lessons and exercises load correctly, with plans for more advanced error handling in future updates.

# Additional Features for Future Implementation

Given more time, the following features could be added to enhance the application:

1. ## User Progress Tracking:

    **Feature:** Save and load user progress, allowing users to pick up where they left off.

    **Approach:** Implement this using local storage or a backend database to store the user's current lesson and exercise.

2. ## User Authentication:

    **Feature:** Enable user login to track individual progress and quiz scores.

    **Approach:** Integrate with a service like Firebase or create a custom authentication system.

3. ## Improved Quiz Functionality:

    **Feature:** Add scoring, feedback on answers, and the ability to review past quizzes.

    **Approach:** Enhance state management to track quiz results and provide detailed feedback.

4. ## Interactive Video Features:

    **Feature:** Add features like in-video quizzes and annotations.

    **Approach:** Use Vimeo's API to introduce interactive elements within the videos.

5. ## Performance Optimization:

    **Feature:** Improve video loading times and overall performance on mobile devices.

    **Approach:** Implement lazy loading, use a CDN, and optimize assets.

6. ## Multi-language Support:

    **Feature:** Offer the course in multiple languages.

    **Approach:** Use a library like i18next for easy language switching and translation management.




## Deployment

This project can be deployed on platforms like Vercel, Netlify, or any other service that supports Node.js and Remix applications.

This project is deployed on Vercel. You can access the live site at:

[Course Lessons](https://data-booster-react-challenge-gjv3dsrxy.vercel.app/courselessons)

## Known Issues
### Video Loading Time: 
Videos may take time to load if they are large or if the server is slow. Consider using a CDN to optimize load times.

