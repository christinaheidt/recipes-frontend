import Head from "next/head";
import Link from "next/link";
import Headerbar from "../components/Header/headerbar";
import IconButton, { LinkIconButton } from "../components/icon-button";
import Searchbar from "../components/searchbar";

import styled from "styled-components";

const Title = styled.h1`
  font-size: inherit;
  font-weight: bold;
  text-align: center;
  font-family: "Pacifico", cursive;
  font-size: ${(props) => props.theme.fontsizes.titleM};
  margin: 0;
`;

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
        <Headerbar>
          <IconButton icon="menu" />
          <Title>Recipes</Title>
          <Link href="/new" passHref>
            <LinkIconButton icon="add" />
          </Link>
        </Headerbar>
        <Searchbar />
      </main>
    </>
  );
}
