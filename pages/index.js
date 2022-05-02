import Head from "next/head"
import Image from "next/image"
import Featured from "../components/Featured"
import styles from "../styles/Home.module.css"
import PizzaList from "../components/PizzaList"

export default function Home({ pizzaList, admin }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza in the town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  )
}
