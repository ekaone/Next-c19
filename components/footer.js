import React from "react";
import { Box, Grid, Text, Stack, Image, Flex } from "@chakra-ui/core";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiYoutube } from "react-icons/si";
import { IoLogoFacebook } from "react-icons/io";

function Footer() {
  return (
    <Box minHeight="220px" width="full" bg="gray.900" padding="10px">
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <Box
          w="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Stack>
            <Text
              fontSize="20px"
              color="gray.50"
              fontWeight="500"
              fontFamily="font.trebuchet"
              alignSelf="center"
            >
              About us
            </Text>
            <Image src="/assets/medical.svg" size="100px" alignSelf="center" />

            <Box maxWidth="250px">
              <Text
                fontSize="15px"
                color="gray.50"
                fontFamily="font.trebuchet"
                lineHeight="30px"
                fontFamily="font.courier"
              >
                Coronavirus disease (COVID-19) is an infectious disease caused
                by a newly discovered coronavirus. We are provide information
                current status around the world.
              </Text>
            </Box>
          </Stack>
        </Box>
        <Stack
          w="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontSize="20px"
            color="gray.50"
            fontWeight="500"
            fontFamily="font.trebuchet"
            alignSelf="center"
          >
            Connect with us
          </Text>
          <Box>
            <Stack isInline>
              <Box as={AiOutlineTwitter} size="30px" color="blue.500" />
              <Box as={SiYoutube} size="30px" color="red.500" />
              <Box as={IoLogoFacebook} size="30px" color="blue.700" />
            </Stack>
          </Box>
        </Stack>
      </Grid>
      <Flex justifyContent="center" alignItems="center" pt="20px">
        <Text
          fontSize="15px"
          color="gray.50"
          fontWeight="500"
          fontFamily="font.century"
        >
          Copyright &copy; 2020 C19 Inc. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
