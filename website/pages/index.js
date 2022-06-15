import Head from "next/head";
import Navbar from "components/Navbar";
import Bg from "components/Bg";
import Persos from "components/Persos";

const Home = () => {
  return (
    <div className="all fixed inset-0 flex">
      <Head>
        <title>HODLHQ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Bg />
      <div className="container m-auto h-full flex flex-col">
        <Navbar />
        <Persos />
      </div>
    </div>
  );
};

export default Home;
