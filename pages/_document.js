import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Github Searcher</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="description"
          name="description"
          itemProp="description"
          content="This is a github searcher to find the projects you want"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
