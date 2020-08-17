import Head from "next/head";
import Link from "next/link";
import Headerbar from "../components/Header/headerbar";
import HeaderTitle from "../components/Header/header-title";
import IconButton, { LinkIconButton } from "../components/icon-button";
import TextField from "../components/text-field/text-field";

type NewState = {
  name: string;
  ingredients: string;
  instructions: string[];
}

export default function New() {
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
          <Link href="/" passHref>
            <LinkIconButton icon="clear" />
          </Link>
            <HeaderTitle title="Name"/>
            <IconButton icon="check" />
          </Headerbar>
          <TextField text="huhu" label="Name"/>
          <TextField text="huhu"/>
          <label>Ingredients</label>
          <textarea/>
          <label>Instructions</label>
          <textarea/>
        </main>
      </>
    );
  }