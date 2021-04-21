import React from "react";
import { Box, Wrap, WrapItem } from "@chakra-ui/react";

class About extends React.Component {
  render() {
    console.log(this.props.background[0].url);
    return (
      <Box minW="100vw" minH="100vh" className="background">
        <Wrap>
          <WrapItem />
          <WrapItem></WrapItem>
        </Wrap>
      </Box>
    );
  }
}
export default About;
