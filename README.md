# ECE WEBTECH - 2023 fall - GR 03 14

## Presentation

---

## Installation

---

1. Clone our repo to your computer:

```bash
git clone https://github.com/tristanqtn/ece-webtech-2023-fall-gr03-14/
```

2. Navigate to the freshly downloaded repo:

```bash
cd ece-webtech-2023-fall-gr03-14
cd app
```

3. Since node modules are not present in this repo you should install them manually using the following command:

```bash
npm install
```

## Server side

---

To start the server on a local device you should use the following command (even if it's not for developement purposes).

```bash
npm run dev
```

This application is using hardcoded URLs for data fetching. If the application starts on a different port than 3000, you should interrupt the execution and make sure the application starts on port `:3000`.

Both following commands must be used only in production environnement and for local testing.

```bash
npm run start
```

```bash
npm run build
```

The `npm run build` could fail for this version of the project because our application still uses hardcoded URLs.

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The used port could change if you're running the web app multiple times without closing it properly. The terminal will automatically give you the URL to use.

ESlint is installed for this application. To run it, run the following command in the app foldder:

```bash
npm run lint
```

## Testing

---

Tests have been implemented in order to check the integrity of the application. Those tests are either performed on the APIs and on the site pages. To run the tests follow the instructions below:

0. Before anything else make sure you are in the `app` folder and that all dependencies has been installed with the `npm i` command.

1. Start the server with one of the following commands (to run `start` make sure that the application has been built before):

```bash
npm run dev
```

```bash
npm run start
```

2. Run the testing script with the following command:

```bash
npm run lint
```

## Authors

---

- Tristan QUERTON: tristan.querton@edu.ece.fr
