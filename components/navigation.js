import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
class Navigation extends React.Component {
  render() {
    return (
      <Box className="navigation" minW="100%" bg="gray.900">
        <ul>
          <li>
            <Link href="#drawing">
              <Image
                src="/../public/assets/drawing.png"
                height={40}
                width={40}
                className="navigationIcon"
              />
            </Link>
          </li>
          <li>
            <Link href="#digitalart">
              <Image
                src="/../public/assets/digital.png"
                height={40}
                width={40}
                className="navigationIcon"
              />
            </Link>
          </li>

          <li>
            <Link href="#photography">
              <Image
                src="/../public/assets/photography.png"
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
