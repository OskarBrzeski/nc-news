# Northcoders News

Northcoders News is a single-page application which uses the
[NC News API](https://github.com/OskarBrzeski/nc-news-api)
to display data in a stright-forward manner. The app is hosted using Netlify and can be accessed via the link below:

https://nc-news-ob.netlify.app

The app may take some time to load initially if the API hasn't been used recently.

## Requirements

To use this project, you need to install the following on your system:
- Node 20.10.0 or greater

This project may work with some earlier versions of Node, but I cannot make any guarantees.

## Set up the project locally

### Clone Repo

Clone this repository and enter the directory:
```bash
git clone https://github.com/OskarBrzeski/nc-news.git

cd nc-news
```

### Set up NPM

Install all of the dependencies using npm:

```bash
npm install
```

### Start local server

Use the following command to start a local server which will serve the app

```bash
npm run dev
```

The app will now be available, typically via http://localhost:5173/.