import Head from "next/head";
import { Box, Container, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useState } from "react";
import Image from "next/image";
import { request } from "../lib/datocms";

const HOMEPAGE_QUERY = `query HomePage {
  allUploads {
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
  console.log(data.allUploads);

  return (
    <div>
      <Head>
        <title>Minhception</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box overflow="hidden" bg="gray.700" minH="100vh">
        <Container maxW="100vw">
          <Text
            color="gray.50"
            fontWeight="semibold"
            mb="1rem"
            textAlign="center"
            fontSize={["4xl", "4xl", "5xl", "5xl"]}
          >
            test
          </Text>
          <Wrap px="1rem" spacing={4} justify="center">
            {data.allUploads.map(pic => (
              <WrapItem
                key={pic.id}
                boxShadow="base"
                rounded="20px"
                overflow="hidden"
                bg="white"
                lineHeight="0"
                _hover={{ boxShadow: "dark-lg" }}
              >
                <Image src={pic.url} height={600} width={400} alt={pic.url} />
              </WrapItem>
            ))}
          </Wrap>
        </Container>
      </Box>
    </div>
  );
}
