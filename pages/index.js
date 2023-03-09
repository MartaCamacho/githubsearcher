import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Octokit, App } from 'octokit';
import { TextField } from '@mui/material';

export default function Home() {
  const [search, setSearch] = useState('tetris');
  const [page, setPage] = useState(1);
  const [reposFound, setReposFound] = useState(null);

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN2,
  });
  useEffect(() => {
    const findRepos = async () => {
      try {
        const response = await octokit.request(`GET /search/repositories`, {
          q: search,
          page: page
        });
        console.log(response.data);
        setReposFound(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    //findRepos();
  }, [search]);

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
        <div className="search-container">
          <input type="text" value={search} name="search" id="search" required maxLength={20}/>
          <Image src="/images/magnifyingGlass.svg" width="13" height="13" alt="magnifying glass" />
        </div>
      </main>
    </>
  );
}
