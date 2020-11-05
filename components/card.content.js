import React from "react";
import { Box, Text, Stack } from "@chakra-ui/core";

function CardContent(props) {
  const { heading, body, color } = props;

  return (
    <Box
      borderWidth="1px"
      borderRadius="10px"
      boxShadow="10px"
      bg="gray.900"
      padding="10px"
      borderColor="yellow.500"
    >
      <Stack>
        <Text textAlign="center" fontSize="50px" color={color}>
          {heading}
        </Text>
        <Text textAlign="center" fontSize="30px" color="gray.50">
          {body}
        </Text>
      </Stack>
    </Box>
  );
}

export default CardContent;
