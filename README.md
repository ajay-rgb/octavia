# YouTube Music Player with Firebase

A web application that allows users to:
- Search for YouTube videos
- Convert YouTube videos to MP3
- Create and manage playlists
- Store converted audio in Firebase Storage
- Play music with standard player controls

## Features
- YouTube video search
- Audio conversion and storage
- Playlist management
- Responsive design
- Volume control
- Play/Pause/Previous/Next controls

## Prerequisites
- Node.js and npm installed
- Firebase account and project setup
- YouTube Data API v3 key
- FFmpeg installed on your system

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
cd youtube-music-api
npm install
```

3. Create a `.env` file in the `youtube-music-api` directory with your credentials:
```
YOUTUBE_API_KEY=your_youtube_api_key_here
FIREBASE_API_KEY=your_firebase_api_key_here
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
```

4. Start the server:
```bash
cd youtube-music-api
node index.js
```

5. Open your browser and navigate to `http://localhost:3000`

## Environment Setup

### YouTube API
1. Go to the Google Cloud Console
2. Create a new project or select an existing one
3. Enable the YouTube Data API v3
4. Create credentials (API key)
5. Add the API key to your `.env` file

### Firebase Setup
1. Create a new Firebase project
2. Enable Storage in your Firebase project
3. Get your Firebase configuration from Project Settings
4. Add the configuration values to your `.env` file

### FFmpeg Installation
- Windows: Download from ffmpeg.org and add to system PATH
- Mac: `brew install ffmpeg`
- Linux: `sudo apt install ffmpeg`

## Usage
1. Enter a song name in the search box
2. Click search to find the video
3. Click "Convert to MP3" to process the video
4. Create playlists and add songs to them
5. Use the player controls to manage playback

## Technologies Used
- Node.js
- Express
- Firebase Storage
- YouTube Data API v3
- ytdl-core
- fluent-ffmpeg