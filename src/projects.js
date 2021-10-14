const projects = [
    { name: "Rel-Event", 
    language: "Ruby", 
    description: "A CLI app allows users to use keywords to search for any type of event they can imagine. The program takes a keyword (like concert, art, food, or even moms)and a location (can be a city, state, zip, country, etc) and presents the user with a list of events showing the title, time/date, and location.",
    github: "https://github.com/MikeShahin/REL-Event", 
    picture: "url", 
    video: "url" },

    { name: "Protest Tracker", 
    language: "Ruby/Sinatra", 
    description: "Protest trackers allows people to see protest events globally. Users who sign up for an account may also create new protest events. It uses Sinatara with Active Record to create a database used to persist data. The user can also edit or delete their own protest event while the program blocks users from editing or deleting events posted by others.", 
    github: "https://github.com/MikeShahin/ProtestTracker",
    picture: "https://camo.githubusercontent.com/ff7f701ee506dd53522e7a355c5c48986ca08877ab73aec43c2a862f8800af0c/68747470733a2f2f692e696d6775722e636f6d2f5367346e6e63582e6a7067", 
    video: "https://www.youtube.com/watch?v=TvqgZyzq9NM" },

    { name: "Praxis Post", 
    language: "Ruby/Rails", 
    description: "Praxis Post is a Reddit clone that allows people to create posts in different communities and comment on them. Users can sign up for an account locally or through facebook using OmniAuth. It uses Rails version 5 and Active Record to create a database used to persist data. The user can also edit or delete their own posts, add comments to others posts, and create new communities.",
    github: "https://github.com/MikeShahin/PraxisPost", 
    picture: "", 
    video: "https://youtu.be/CmeLDXopg6Q" },

    { name: "News Aggregator", 
    language: "JavaScript", 
    description: "This is a project I did following a General Assembly class on JavaScript. It pulls news articles from a variety of API sources and shows them to the user.",
    github: "https://github.com/MikeShahin/News-aggregator-project/blob/master/README.md", 
    picture: "", 
    video: "" },

    { name: "Foodelio", 
    language: "JavaScript", 
    description: "A webapp I created after my intro to Javascript course at General Assembly. It allows the user to search for any recipe by typing a search word and filtering for diet (vegan or vegetarian) and type of cuisine (e.g. Italian, Chinese, French, etc.). It will return a grid of recipes that match your search with a recipe title, picture, estimated time, and yield. Clicking on the respective recipe will take you to the website with the actual published recipe. It is built with Javascript/jquery and hosted with Google Firebase at https://foodelio.web.app/",
    github: "https://github.com/MikeShahin/Foodelio/tree/master/public", 
    picture: "https://raw.githubusercontent.com/MikeShahin/Foodelio/master/public/images/readme.png", 
    video: "" },

    { name: "Mikebot", 
    language: "Javascript/CoffeeScript", 
    description: "This project was to create a bot for slack. I created it so that users can get music suggestions, play games, and ask it simple math problems",
    github: "https://github.com/MikeShahin/Mikebot", 
    picture: "", 
    video: "" },

    { name: "Big Jams Playlist Creator", 
    language: "JavaScript", 
    description: "My JavaScript project for Flatiron School, utilizes JavaScript for the front end with a Rails API to persist data on the back end. Big Jams lets users search for songs to create new playlists and browse playlists other users have created. The user can search for songs using artist and/or album keyword searches, the search uses Deezer's api to find songs.",
    github: "https://github.com/MikeShahin/playlisterFrontEnd", 
    picture: "", 
    video: "https://youtu.be/oCB497CcnPE" },

    { name: "Divelog", 
    language: "JavaScript/React/Redux", 
    description: "Dive Log allows users to create an account then log all of their SCUBA dives. The users dashboard lets users see all the dives they have logged and the All Dives page allows user to see all the dives currently logged on the site by all users. It was created using a React/Redux frontend with a Rails API to persist user and dive data.",
    github: "https://github.com/MikeShahin/divelog_frontend", 
    picture: "", 
    video: "https://youtu.be/y-Uf2vPaPmM" },

]

export default projects