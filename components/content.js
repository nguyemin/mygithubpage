import React from "react";
import { Text, Box } from "@chakra-ui/react";
import Image from "next/image";

class Content extends React.Component {
  render() {
    return (
      <Box className="contentContainer" id={this.props.anchor}>
        <Text className="contentTitle">{this.props.title}</Text>
        <Box className="galleryContainer">
          {this.props.data.map(pic => (
            <Box
              className="imageContainer"
              key={pic.id}
              lineHeight="0"
              _hover={{ boxShadow: "dark-lg" }}
            >
              <Image
                className="images"
                src={pic.url}
                height={500}
                width={500}
                alt={pic.id}
                layout="intrinsic"
              />
            </Box>
          ))}
        </Box>
      </Box>
    );
  }
}

export default Content;
