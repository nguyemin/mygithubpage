import React from "react";
import { Wrap, WrapItem, Container, Text } from "@chakra-ui/react";
import Image from "next/image";

class Content extends React.Component {
  render() {
    return (
      <Container minW="100vw" mt="10em">
        <Wrap px="1rem" spacing={4} justify="center">
          {this.props.data.map(pic => (
            <WrapItem
              key={pic.id}
              boxShadow="base"
              overflow="hidden"
              bg="white"
              lineHeight="0"
              _hover={{ boxShadow: "dark-lg" }}
            >
              <Image
                className="images"
                src={pic.url}
                height={400}
                width={400}
                alt={pic.id}
                layout="intrinsic"
              />
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    );
  }
}

export default Content;
