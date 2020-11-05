import React from "react";
import { Flex, Box, Text, Stack, Grid } from "@chakra-ui/core";
// components
import Layout from "./layout";
import CardContent from "./card.content";
import status from "../shared/status";

function Contents() {
  return (
    <Flex>
      <Box minHeight="620px" width="full" bg="color.content">
        <Stack>
          <Text
            fontSize="40px"
            color="gray.900"
            textTransform="uppercase"
            fontWeight="600"
            fontFamily="font.trebuchet"
          >
            Contents
          </Text>
          <Grid
            templateColumns={{
              lg: "repeat(4, 1fr)",
              md: "repeat(3, 1fr)",
              sm: "repeat(2, 1fr)"
            }}
            gap={5}
            maxWidth="86em"
            ml="auto"
            mr="auto"
          >
            {status.map(s => (
              <CardContent heading={s.number} body={s.status} color={s.color} />
            ))}
          </Grid>
        </Stack>
      </Box>
    </Flex>
  );
}

export default Contents;
