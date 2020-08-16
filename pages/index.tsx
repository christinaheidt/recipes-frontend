import Head from "next/head";
import Headerbar from "../components/Header/headerbar";
import Searchbar from "../components/searchbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipes</title>
        <link rel="icon" href="/favicon.ico" />
        {/* TODO: Font import */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <Headerbar />
        <Searchbar />
      </main>
    </>
  );
}
