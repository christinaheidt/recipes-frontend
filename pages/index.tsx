import Head from "next/head";
import styled from "styled-components";
import Searchbar from '../components/Searchbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Searchbar/>
      </main>
    </>
  );
}
