import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { Box, Flex } from "@chakra-ui/core";
// components
import fetcher from "../utils/fetcher";

const END_POINT =
  "https://covid19.mathdro.id/api/countries/indonesia/confirmed";

function NewsContent() {
  const [news, setNews] = useState({});
  const { data, error } = useSWR(END_POINT, fetcher);

  //if (error) return <div>failed to load</div>
  //if (!data) return <div>loading...</div>

  useEffect(() => {
    setNews(data[0]);
  }, []);

  return (
    <Flex justifyContent="center" alignItems="center">
      <Box>{JSON.stringify(news, null, 2)}</Box>
    </Flex>
  );
}

export default NewsContent;
