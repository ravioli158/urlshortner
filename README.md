# URL Shortener React App

This is a simple URL shortener web application built using React, React Router DOM, Axios, and React-Redux. It allows users to shorten long URLs into shorter, more manageable links. The app utilizes the [shrtco.de](https://shrtco.de/) API for URL shortening and is styled using [Tailwind CSS](https://tailwindcss.com/).

![Screenshot](screenshot.png)

## Features

- Shorten long URLs to create concise links.
- Copy shortened links to the clipboard with one click.
- View a list of previously shortened URLs.
- Easily navigate between the home page and the history page using React Router.

## Getting Started

Follow these steps to set up and run the URL Shortener React App on your local machine:

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/url-shortener-react-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd url-shortener-react-app
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

### Configuration

The app is set up to use the [shrtco.de](https://shrtco.de/) API by default. You don't need to configure any API keys for this app to work.

### Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the URL Shortener app.

### Shortening URLs

To shorten a URL, follow these steps:

1. Enter the long URL you want to shorten in the input field on the home page.

2. Click the "Shorten" button.

3. The shortened URL will appear below the input field, and you can click the "Copy" button to copy it to your clipboard.

### Viewing Shortened URL History

To view your previously shortened URLs, click the "History" link in the navigation menu. This will take you to the history page, where you can see a list of your shortened links.

## Technologies Used

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [React-Redux](https://react-redux.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Credits

- This app uses the [shrtco.de](https://shrtco.de/) API for URL shortening.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.