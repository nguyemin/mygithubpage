import { request } from "../lib/datocms";
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Content from "../components/content";
import About from "../components/about";

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
    <Box overflow="hidden" bg="gray.900" minH="100vh" minW="100vw">
      <Head>
        <title> Minhception</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <About profile={data.profile} />
      <Container minW="100vw">
        <Content data={data.drawings} />
        <Content data={data.digitalArt} />
        <Content data={data.photos} />
      </Container>
    </Box>
  );
}
