import React from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import Image from "next/image";

class Tiles extends React.Component {
  render() {
    console.log(this.props.data);
    return (
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
              height={300}
              width={300}
              alt={pic.id}
              layout="intrinsic"
            />
          </WrapItem>
        ))}
      </Wrap>
    );
  }
}

export default Tiles;
