import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
class Navigation extends React.Component {
  render() {
    return (
      <Box className="navigation" w="100%">
        <ul>
          <li>
            <Link href="#home">
              <Image
                src="/assets/home.png"
                height={40}
                width={40}
                className="navigationIcon"
              />
            </Link>
          </li>
          <li>
            <Link href="#drawing">
              <Image
                src="/assets/drawing.png"
                height={40}
                width={40}
                className="navigationIcon"
              />
            </Link>
          </li>
          <li>
            <Link href="#digitalart">
              <Image
                src="/assets/digital.png"
                height={40}
                width={40}
                className="navigationIcon"
              />
            </Link>
          </li>

          <li>
            <Link href="#photography">
              <Image
                src="/assets/photography.png"
                height={40}
                width={40}
                className="navigationIcon"
              />
            </Link>
          </li>
        </ul>
      </Box>
    );
  }
}
export default Navigation;
