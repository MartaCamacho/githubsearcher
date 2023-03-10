import css from 'styled-jsx/css';

export const globalStyles = css.global`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

* {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}

a {
    text-decoration: none;
}

body {
    background-color: #272727;
}

.search-container {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 50px;
    padding: 0 12px;
    position: sticky;
    top: 0px;
    background-color: #272727;
    padding: 17px;
    z-index: 5;
}

.search-container input {
    border: 0px;
    border-radius: 6px;
    height: 50px;
    width: 100%;
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
    background-color: #F9C8B0;
    transition: all .4s;
    cursor: pointer;
}

.search-button:hover {
    background-color: #FF8D80;
    transition: all .4s;
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
}

.repo-card-container a {
    height: 100%;
}

.results-containter {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    padding: 0 12px;
    max-width: 1200px;
    margin: 0 auto;
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
    width: 100%;
    max-width: calc(100vw - 57px);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 30px;
}

.loading-spinner {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .1);
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
    }

    .repo-card-container a {
        max-width: 100%;
    }
}
`