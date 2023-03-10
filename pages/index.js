import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Octokit } from 'octokit';
import { globalStyles } from '../styles/globals';
import { Pagination } from '@mui/material';
import RepoComponent from '../components/RepoComponent/RepoComponent';
import SpinnerComponent from '../components/SpinnerComponent/SpinnerComponent';
import FooterComponent from '../components/FooterComponent/FooterComponent';

export default function Home() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [reposFound, setReposFound] = useState(null);
  const [totalRepos, setTotalRepos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const inputRef = useRef();

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN2,
  });

  useEffect(() => {
    inputRef.current.focus();
    console.log('🔎 Oh! So you are inspecting this page... I hope you do not find any strange behaviours, if so, let me know and I will take care of them. If not, you owe me a coffee ☕')
  }, [search, page]);

  const findRepos = async () => {
    setLoading(true);
    try {
      const response = await octokit.request(`GET /search/repositories`, {
        q: search,
        page: page,
      });
      setReposFound(response.data.items.length > 0 ? response.data.items : false);
      const totalRepos = parseInt(response.data.total_count);
      setTotalRepos(totalRepos > 1000 ? 1000 : totalRepos);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setReposFound(false);
      setLoading(false);
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    findRepos();
  };

  const handleChangePage = (e, value) => {
    setPage(value);
    findRepos();
  };

  return (
    <>
      <Head>
        <title>Github Searcher</title>
        <meta
          name="description"
          content="This is a github searcher to find the projects you want"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {loading ? <SpinnerComponent /> : <></>}
        <div className="search-container">
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              value={search}
              name="search"
              id="search"
              required
              maxLength={20}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search here any GitHub repository"
              ref={inputRef}
            />
            <button className="search-button" type="submit">
              Search
              <Image
                src="/images/magnifyingGlass.svg"
                width="17"
                height="17"
                alt="magnifying glass"
              />
            </button>
          </form>
        </div>
        <div className="results-containter">
          {reposFound && reposFound.length
            ? <>
            {reposFound.map((repo, i) => {
              return <RepoComponent repo={repo} key={repo.id} />
            })}
            <Pagination count={totalRepos ? parseInt(totalRepos / 30) : 1} variant="outlined" className="results-pagination" page={page}  onChange={handleChangePage}/>
            </>
            : 
            <span className="no-repos-found">
            {reposFound === false ? "No repositories found" : error ? "There was an error, please try again later" : ""}
            </span>}
        </div>
      </main>
      <FooterComponent />
      <style jsx>{globalStyles}</style>
    </>
  );
}
