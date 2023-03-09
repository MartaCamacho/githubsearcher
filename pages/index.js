import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { Octokit, App } from 'octokit';

export default function Home() {
  const [search, setSearch] = useState('martacamacho');
  const [page, setPage] = useState(1);

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });
  useEffect(() => {
    const findRepos = async () => {
      try {
        const response = await octokit.request(`GET /search?page=${page}`, {
          q: search,
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    //findRepos();
  }, []);

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
      <main className="">
        
      </main>
    </>
  );
}
