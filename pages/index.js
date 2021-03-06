import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="flex min-h-screen max-w-7xl mx-auto">
        <Sidebar/>
      </main>
    </div>
  );
}
