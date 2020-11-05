import React from "react";
import { Flex, Box, Image, Text, Stack } from "@chakra-ui/core";
// components
import Layout from "./layout";

function Hero() {
  return (
    <Layout>
      <Box minHeight="220px" width="full" bg="gray.900">
        <Flex justifyContent="space-between" alignItems="center" mx="300px">
          <Image src="/assets/street_empty.svg" size="200px" />
          <Box lineHeight="35px">
            <Text
              fontSize="40px"
              color="gray.50"
              textTransform="uppercase"
              fontWeight="600"
              fontFamily="font.trebuchet"
              letterSpacing="5px"
            >
              stay healthy
            </Text>
            <Text
              fontSize="30px"
              color="yellow.500"
              textTransform="uppercase"
              fontWeight="400"
              fontFamily="font.trebuchet"
              textAlign="right"
            >
              stay at Home
            </Text>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
}

export default Hero;
