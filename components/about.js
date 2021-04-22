import React from "react";
import { Box, Wrap, WrapItem, Text } from "@chakra-ui/react";
import Image from "next/image";

class About extends React.Component {
  render() {
    return (
      <Box minW="99vw" minH="100vh" className="entry" justify="center">
        <Box minW="99vw" minH="100vh" className="background" />
        <Wrap
          px="3rem"
          spacing={20}
          justify="center"
          minH="100vh"
          className="about"
        >
          <WrapItem>
            <Image
              className="profile"
              src={this.props.profile[0].url}
              height={300}
              width={300}
              alt={this.props.profile[0].id}
              layout="intrinsic"
            />
          </WrapItem>
          <WrapItem className="aboutSection">
            <Text className="title">Shapes</Text>
            <Text className="aboutText">Einblicke</Text>
            <Text className="aboutText">in meinen</Text>
            <Text className="aboutText">Alter Ego</Text>
          </WrapItem>
        </Wrap>
      </Box>
    );
  }
}
export default About;
