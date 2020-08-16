import Head from "next/head";
import Searchbar from "../components/searchbar";
import Headerbar from "../components/headerbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Headerbar />
        <Searchbar />
      </main>
    </>
  );
}
