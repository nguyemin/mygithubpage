import React from "react";
import { Box, Wrap, WrapItem, Text, Center } from "@chakra-ui/react";
import Image from "next/image";

class About extends React.Component {
  render() {
    return (
      <Box minW="100%" minH="100vh">
        <Box minW="100%" minH="100vh" className="background" />
        <Box
          className="about"
          minH="100vh"
          justify="center"
          alignItems="center"
        >
          <Box>
            <Image
              className="profile"
              src={this.props.profile[0].url}
              alt={this.props.profile[0].id}
              width={400}
              height={400}
              layout="intrinsic"
            />
          </Box>
          <Box className="aboutSection" justify="center" alignItems="center">
            <Text className="title">Footprint</Text>
            <Text className="aboutText">Einblicke</Text>
            <Text className="aboutText">in meinen</Text>
            <Text className="aboutText">Alter Ego</Text>
          </Box>
        </Box>
      </Box>
    );
  }
}
export default About;
