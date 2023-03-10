import css from 'styled-jsx/css';

export const globalStyles = css.global`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  body {
    background: linear-gradient(#272727, #68e7e0);
    min-height: 100vh;
    position: relative;
    padding-bottom: 100px;
  }

  .search-container {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: #272727;
    padding: 17px;
    z-index: 5;
  }

  .search-container input {
    border: 0px;
    border-radius: 6px;
    height: 50px;
    width: 90%;
    max-width: 500px;
    padding: 0 10px;
    font-size: 16px;
  }

  .search-container form {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .search-button {
    padding: 10px;
    border-radius: 6px;
    margin-left: 10px;
    font-size: 16px;
    display: flex;
    align-items: center;
    background-color: #68e7e0;
    transition: all 0.4s;
    cursor: pointer;
  }

  .search-button:hover {
    background-color: #ff8d80;
    transition: all 0.4s;
  }

  .search-button img {
    margin-left: 5px;
  }

  .repo-card-container {
    height: 100%;
    min-height: 300px;
    display: flex;
    margin-bottom: 30px;
    width: 345px;
    max-width: 33%;
  }

  .repo-card-container a {
    height: 100%;
    width: 100%;
  }

  .results-containter {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 12px;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 84px;
  }

  .results-label {
    font-weight: 500;
  }

  .stars-number {
    display: flex;
    align-items: center;
  }

  .stars-number span {
    color: gold;
    margin-right: 5px;
  }

  .results-pagination {
    max-width: calc(100vw - 57px);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 30px;
  }

  .loading-spinner {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .no-repos-found {
    color: white;
    font-weight: 500;
    font-size: 26px;
    text-align: center;
    margin: 0 auto;
    max-width: 260px;
    margin-top: 50px;
  }

  .results-bottom-items {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .back-top {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 30px;
    border: 3px solid #ff8d80;
    background-color: #F9C8B0;
    border-radius: 4px;
    padding: 5px 20px;
    max-width: 150px;
  }

  footer {
    margin: 0;
    height: 70px;
    background-color: #272727;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  }

  footer a {
    color: white;
  }

  .footer-link:hover,
  .social-list-link:hover {
    opacity: 0.7;
  }

  .footer-link:hover {
    text-decoration: underline;
  }

  .social-list {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0 0 7px;
    padding: 0;
  }

  .social-list-link {
    padding: 0.5em;
  }


  @media (max-width: 1051px) {
    .results-containter {
      flex-wrap: nowrap;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .repo-card-container {
      min-height: auto;
      display: flex;
      margin-bottom: 30px;
      max-width: 100%;
    }

    .repo-card-container a {
      max-width: 100%;
    }

    .results-pagination {
      padding: 0 0 30px;
    }
  }
`;
