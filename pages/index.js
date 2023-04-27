import Head from "next/head";
import Link from "next/link";
import { routes } from "../components/Sidebar";
export default function Home() {
  return (
    <>
      <Head>
        <title>Voting DAPP</title>
        <meta name="description" content="Voting DAPP on Polygon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-10">
        Dummy Voting dApp Page <br />
        {routes.map((route, i) => (
          <Link key={i} href={route.path} className="block text-primary">{route.name}</Link>
        ))}
        <Link href="/404" className="text-primary block">404 page</Link>
        <Link href="/login" className="text-primary block">Login page</Link>
      </main>
    </>
  );
}