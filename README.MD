# Reactive Youtube Search
Interact with it [live](https://agile-peak-93412.herokuapp.com/)

## Intro
This project is a web application that allow ones to query Youtube for video requests and recieve the video loaded instatly in the main window. It also loads the top 5 relevant videos in a mini-view sidepanel list. From where users can click to load that element as the main video.

The purpose of this was to build a highly reactive application. It was built using Node.js and the React framework, and The Youtube Search API. It was bundled/compiled together using Webpack5 and Babel7.

## How to Run

1) Clone the repo:
```
git clone https://github.com/PeakyCryptos/reactYoutubeSearch.git
```

2) In the root dir run:

```
npm install
```

3) We need to set up a new API key, head to (https://console.cloud.google.com/) and sign in with your google account

4) In the left navigation bar click "APIs & Services"

5) On this page there will be a prompt to create a new project, do so with default settings

6) In the top search bar lookup "Youtube Data API v3"

7) Click "Enable"

8) from the left panel click "Credentials"

9) Now click "+ Create Credentials" -> "API Key"

10) Copy the API key in the dialog box

11) create a '.env' file inside the root dir and write:

```
API_KEY = {YOUR_API_KEY}
```
Replace everything after the "=" with your API key

12) To host a local instance from a CLI:

```
npm run serve
```
and head to (http://localhost:8080/)

If you would like to run the production build locally then run:

```
npm run build
npm start
```
then head to (http://localhost:3000/)

## Acknowledgements
The briliant teachings of [Stephen Grider](https://www.udemy.com/user/sgslo/)
