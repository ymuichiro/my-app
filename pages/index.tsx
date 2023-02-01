import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { GetStaticProps } from "next/types";

interface Props {
  locale: string;
  titles: string;
  images: string[];
}

export default function Home(props: Props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <p>locale: {props.locale}</p>
          <p>locale: {props.titles}</p>
          <div>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </div>
        </div>

        <div className={styles.center}>
          {props.images.map((image, index) => (
            <Image
              className={styles.logo}
              src={image}
              alt="Next.js Logo"
              width={180}
              height={100}
              priority
              key={index}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const response = await fetch(
    "https://cms.symbol-community.com/api/news-releases?populate=*",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const json = await response.json();
  const titles = json.data.map((item: any) => item.attributes.title);
  const images = json.data.map(
    (item: any) =>
      `https://cms.symbol-community.com${item.attributes.headerImage.data.attributes.url}`
  );
  return {
    props: {
      locale: locale || "en",
      titles: titles.join(", "),
      images: images,
    },
  };
};
