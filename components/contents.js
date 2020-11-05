import React, { useState, useEffect } from "react";
import { Flex, Box, Text, Stack, Grid, useTheme } from "@chakra-ui/core";
import useSWR from "swr";

// components
import Layout from "./layout";
import CardContent from "./card.content";
import status from "../shared/status";
import fetcher from "../utils/fetcher";
import NewsContent from "./news.content";
import getCountry from "../utils/getCountry";

const END_POINT =
  "https://covid19.mathdro.id/api/countries/indonesia/confirmed";

function Country() {
  const { data, error } = useSWR(
    `https://covid19.mathdro.id/api/countries/usa/`,
    fetcher
  );
  if (error) return "failed to load";
  if (!data) return "loading...";
  // render data
  return { data };
}

function Contents() {
  const [status, setStatus] = useState([]);
  const [timeUpdate, setTimeUpdate] = useState();
  const [country, setCountry] = useState({});

  useEffect(() => {
    const abortController = new AbortController();

    fetcher(END_POINT).then(values => {
      setStatus(values[0]);
      setTimeUpdate(new Date(values[0].lastUpdate).toDateString());
    });

    return () => {
      abortController.abort();
    };
  }, [fetcher]);

  let c = Country();
  useEffect(() => {
    const abortController = new AbortController();
    setCountry(c);

    return () => {
      abortController.abort();
    };
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
              heading={status.active}
              body="Active"
              color="yellow.400"
            />
            <CardContent
              heading={status.confirmed}
              body="Confirmed"
              color="teal.400"
            />
            <CardContent
              heading={status.recovered}
              body="Recovered"
              color="green.400"
            />
            <CardContent
              heading={status.deaths}
              body="Deaths"
              color="red.400"
            />
            <CardContent heading="Country" body="USA" color="yellow.400" />
            <CardContent
              heading={country.data.confirmed.value}
              body="Confirmed"
              color="teal.400"
            />
            <CardContent
              heading={country.data.recovered.value}
              body="Recovered"
              color="green.400"
            />
            <CardContent
              heading={country.data.deaths.value}
              body="Deaths"
              color="red.400"
            />
          </Grid>
          {/* <NewsContent /> */}
          {/* <Box>{JSON.stringify(country, null, 2)}</Box> */}
        </Stack>
      </Box>
    </Flex>
  );
}

export default Contents;
