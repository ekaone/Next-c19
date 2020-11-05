import React from "react";
import { Flex } from "@chakra-ui/core";

function Layout(props) {
  const { children } = props;

  return <Flex>{children}</Flex>;
}

export default Layout;
