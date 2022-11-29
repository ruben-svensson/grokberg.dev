import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub);
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.row}>
      <div className={styles.container}>
        <Image
          src="https://avatars.githubusercontent.com/u/29916243?v=4"
          width="300"
          height="300"
          alt=""
        />
        <div className={styles.row}>
          <div>
            <h1>Grokberg</h1>
            <h5>Ruben Svensson</h5>
          </div>
          <Link
            className={styles.link}
            href="https://github.com/ruben-svensson"
          >
            <FontAwesomeIcon size="4x" icon={faGithub} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
