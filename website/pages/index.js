import Head from "next/head";
import Navbar from "components/Navbar";
import Bg from "components/Bg";
import Persos from "components/Persos";

const Home = () => {
  return (
    <div className="fixed inset-0 flex">
      <Head>
        <title>HODLHQ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container m-auto h-full flex flex-col">
        <Bg />
        <Navbar />
        <Persos />
      </div>
    </div>
  );
};

export default Home;
