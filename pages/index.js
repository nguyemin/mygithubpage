import Head from "next/head";
import { Box, Container, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { getCuratedPhotos } from "../lib/api";
import React, { useState } from "react";
import Image from "next/image";

export default function Home({ data }) {
  const [photos, setPhotos] = useState(data);
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
            {photos.map(pic => (
              <WrapItem
                key={pic.id}
                boxShadow="base"
                rounded="20px"
                overflow="hidden"
                bg="white"
                lineHeight="0"
                _hover={{ boxShadow: "dark-lg" }}
              >
                <Image
                  src={pic.src.portrait}
                  height={400}
                  width={400}
                  alt={pic.url}
                />
              </WrapItem>
            ))}
          </Wrap>
        </Container>
      </Box>

      <footer>
        <a target="_blank" rel="noopener noreferrer">
          Powered by{" "}
        </a>
      </footer>
    </div>
  );
}
export async function getServerSideProps() {
  const data = await getCuratedPhotos();
  return {
    props: {
      data
    }
  };
}
