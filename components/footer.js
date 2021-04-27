import React from "react";
import { Box, Text } from "@chakra-ui/react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  show() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <Box className="footer">
        <Text className="footerItem">Impresum</Text>
      </Box>
    );
  }
}
export default Footer;
