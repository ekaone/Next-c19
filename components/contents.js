import React, { useState, useEffect } from "react";
import { Flex, Box, Text, Stack, Grid, Select } from "@chakra-ui/core";

// components
import Layout from "./layout";
import CardContent from "./card.content";
import status from "../shared/status";
import fetcher from "../utils/fetcher";
import fetcherSwr from "../utils/fetcherSwr";
import NewsContent from "./news.content";
import getCountry from "../utils/getCountry";
import countries from "../shared/countries";

const END_POINT =
  "https://covid19.mathdro.id/api/countries/indonesia/confirmed";

function Contents() {
  const [status, setStatus] = useState([]);
  const [timeUpdate, setTimeUpdate] = useState();
  const [country, setCountry] = useState();

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

  const handlerChangeCountry = e => {
    const END_POINT_COUNTRY = `https://covid19.mathdro.id/api/countries/${e.target.value}/`;
    fetcher(END_POINT_COUNTRY).then(values => {
      setCountry(values);
    });
  };

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
          </Grid>
          <Box maxWidth="300px" alignSelf="center" pt="20px">
            <Text
              color="gray.900"
              fontSize="25px"
              fontFamily="font.century"
              textAlign="center"
            >
              Select Country
            </Text>
            <Select onChange={handlerChangeCountry}>
              {countries.map(language => (
                <option key={language.name} value={language.name}>
                  {language.name}
                </option>
              ))}
            </Select>
          </Box>
          <Box>
            {country && (
              <Grid
                templateColumns={{
                  lg: "repeat(3, 1fr)",
                  md: "repeat(2, 1fr)",
                  sm: "repeat(1, 1fr)"
                }}
                gap={5}
                maxWidth="86em"
                ml="auto"
                mr="auto"
                mt="25px"
              >
                <CardContent
                  heading={country.confirmed.value}
                  body="Confirmed"
                  color="teal.400"
                />
                <CardContent
                  heading={country.recovered.value}
                  body="Recovered"
                  color="green.400"
                />
                <CardContent
                  heading={country.deaths.value}
                  body="Deaths"
                  color="red.400"
                />
              </Grid>
            )}
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
}

export default Contents;
