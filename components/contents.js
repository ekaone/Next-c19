import React, { useState, useEffect } from "react";
import { Flex, Box, Text, Stack, Grid } from "@chakra-ui/core";
// components
import Layout from "./layout";
import CardContent from "./card.content";
import status from "../shared/status";
import fetcher from "../utils/fetcher";

// const END_POINT = "https://covid19.mathdro.id/api/countries/indonesia";
const END_POINT =
  "https://covid19.mathdro.id/api/countries/indonesia/confirmed";

function Contents() {
  const [data, setData] = useState([]);
  const [timeUpdate, setTimeUpdate] = useState();

  useEffect(() => {
    fetcher(END_POINT).then(values => {
      setData(values[0]);
      setTimeUpdate(new Date(values[0].lastUpdate).toDateString());
      console.log(values);
    });
  }, [fetcher]);

  return (
    <Flex>
      <Box minHeight="620px" width="full" bg="color.content" padding="10px">
        <Stack>
          <Text
            fontSize="40px"
            color="gray.900"
            fontWeight="700"
            fontFamily="font.century"
            textAlign="center"
            marginTop="25px"
          >
            Cases in Indonesia
          </Text>
          <Box lineHeight="25px">
            <Text color="gray.900" fontSize="25px" fontFamily="font.century">
              Last updated{" "}
            </Text>
            <Text fontSize="20px" fontFamily="font.courier">
              {timeUpdate}
            </Text>
          </Box>
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
            mt="25px"
          >
            <CardContent
              heading={data.active}
              body="Active"
              color="yellow.400"
            />
            <CardContent
              heading={data.confirmed}
              body="Confirmed"
              color="teal.400"
            />
            <CardContent
              heading={data.recovered}
              body="Recovered"
              color="green.400"
            />
            <CardContent heading={data.deaths} body="Deaths" color="red.400" />
          </Grid>
        </Stack>
      </Box>
    </Flex>
  );
}

export default Contents;
