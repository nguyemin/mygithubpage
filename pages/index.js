import { request } from "../lib/datocms";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Content from "../components/content";
import About from "../components/about";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const HOMEPAGE_QUERY = `query HomePage {
  profile: allUploads(filter: {tags: {eq: "profile"}}) {
    id
    url
  }
  drawings: allUploads(filter: {tags: {eq: "drawing"}}, first: "50") {
    id
    url
  }
  digitalArt: allUploads(filter: {tags: {eq: "digitalart"}}, first: "50") {
    id
    url
  }
  photos: allUploads(filter: {tags: {eq: "photography"}}, first: "50") {
    id
    url
  }
}
`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY
  });
  return {
    props: { data }
  };
}
export default function Home({ data }) {
  return (
    // #171923
    <Box
      bg="gray.900"
      minH="100vh"
      min="100%"
      overflowX="hidden"
      id="home"
      className="body"
    >
      <Head>
        <title> Minhception</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navigation />
      <About profile={data.profile} />
      <Box>
        <Content data={data.drawings} title="drawings" anchor="drawing" />
        <Content
          data={data.digitalArt}
          title="digital art"
          anchor="digitalart"
        />
        <Content data={data.photos} title="photography" anchor="photography" />
      </Box>
      <Footer />
    </Box>
  );
}
