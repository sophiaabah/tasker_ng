import {
  Flex,
  Image,
  Spacer,
  List,
  ListItem,
  ListIcon,
  Input,
  HStack,
  Button,
  Container,
  Center,
  Box,
  Text,
  Stack,
  Heading,
  Checkbox,
  Link,
  FormLabel,
  IconButton,
  chakra,
  FormControl,
  Icon,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import Api from "lib/api";

const getImageUrl = (url) => {
  return process.env.NEXT_PUBLIC_TASKER_BASE_URL + url;
};

export default function App({ searchResults, customerId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const selectTasker = async (providerId) => {
    try {
      setIsLoading(true);
      setHasError(false);
      console.log(customerId, providerId);
      const response = await Api.put(
        `/customer/${customerId}/select-provider/${providerId}`
      );
    } catch (e) {
      setHasError(true);
      console.error(e);
    } finally {
      setIsLoading(false);
      setIsSelected(true);
    }
  };
  return (
    <>
      <Head>
        <meta name="description" content="Everyday life made easier" />
        <title>Tasker | Everyday life made easier </title>
      </Head>

      <Container my={14} maxW="container.md">
        {isSelected ? (
          <>
            <Heading fontSize={{ lg: "3xl", md: "3xl", base: "2xl" }}>
              Thank you!
            </Heading>
            <Text fontSize={{ lg: "1rem", md: "1rem", base: "0.85rem" }}>
              We will contact you once your request has been processed.{" "}
            </Text>
          </>
        ) : (
          <>
            <Heading fontSize="2xl">Select a tasker </Heading>
            {hasError && (
              <Text
                fontSize={{ lg: "1rem", md: "1rem", base: "0.85rem" }}
                mt={2}
                color="red.700"
              >
                Something went wrong. Please try again
              </Text>
            )}
            {searchResults.map((tasker, index) => {
              return (
                <Stack
                  borderRadius="lg"
                  px={{ lg: 8, base: 5 }}
                  py={{ lg: 5, base: 4 }}
                  border="1px solid #e5e7eb"
                  mt={6}
                  key={index}
                >
                  <Stack direction="row" justify="space-between" spacing={7}>
                    <Stack spacing={3.5} direction="row">
                      <Image
                        alt="profile pic"
                        rounded="full"
                        boxSize={{ lg: "52px", base: "42px" }}
                        src={getImageUrl(tasker?.photo)}
                        alignSelf="center"
                        objectFit="cover"
                      />
                      <Stack
                        maxW={{ lg: "90%", md: "90%", base: "95%" }}
                        alignSelf="center"
                        spacing={0}
                      >
                        <Stack spacing={2} direction="row">
                          <Text
                            fontWeight={{ lg: 700, md: 700, base: 600 }}
                            fontSize={{
                              lg: "1.2rem",
                              md: "1.2rem",
                              base: "1rem",
                            }}
                            w="fit-content"
                          >
                            {tasker?.name}
                            <chakra.span ml={1.5}>
                              <Icon
                                as={MdCheckCircle}
                                fontSize="sm"
                                color="green.500"
                              />
                            </chakra.span>
                          </Text>
                        </Stack>
                      </Stack>
                    </Stack>
                    <Stack
                      justify="flex-end"
                      width="min-content"
                      spacing={0}
                      alignSelf="center"
                    >
                      <Text color="gray" fontSize={{ lg: "sm", base: "xs" }}>
                        from{" "}
                        <chakra.span
                          color="black"
                          fontSize={{ lg: "lg", base: "md" }}
                          fontWeight={700}
                        >
                          {`₦${tasker?.price_range.split("-")[0]}`}
                        </chakra.span>
                      </Text>
                    </Stack>
                  </Stack>
                  <Stack
                    alignItems="baseline"
                    pt={2}
                    pb={3}
                    spacing={{ lg: 0, md: 0, base: 5 }}
                    direction="row"
                  >
                    <chakra.div
                      pl={2}
                      borderLeft="1.5px solid black"
                      width={{ lg: "90%", md: "90%", base: "200px" }}
                      fontSize={{ lg: "md", md: "md", base: "0.8rem" }}
                    >
                      <Text fontWeight={600}>Availability</Text>

                      <Text color="gray.600" textTransform="capitalize">
                        {tasker.availability_time.join(", ")}
                      </Text>
                    </chakra.div>

                    <chakra.div
                      pl={2}
                      borderLeft="1.5px solid black"
                      width={{ lg: "90%", md: "90%", base: "200px" }}
                      fontSize={{ lg: "md", md: "md", base: "0.8rem" }}
                    >
                      <Text fontWeight={600}>Tasks</Text>

                      <Text color="gray.600" textTransform="capitalize">
                        {tasker.tasks.join(", ")}
                      </Text>
                    </chakra.div>
                  </Stack>
                  <Button
                    fontWeight={500}
                    size="sm"
                    variant={{ lg: "solid", base: "outline" }}
                    colorScheme="primary"
                    alignSelf="flex-end"
                    isLoading={isLoading}
                    disabled={isLoading}
                    onClick={() => selectTasker(tasker.id)}
                  >
                    Select Tasker
                  </Button>
                </Stack>
              );
            })}
          </>
        )}
      </Container>
    </>
  );
}

export async function getServerSideProps({ params }) {
  // console.log("params", params);

  const { data } = await Api.get(`/customer/${params.id}/providers`);
  // console.log("page data", data);

  // data is an array of matching taskers.

  return {
    props: {
      searchResults: data,
      customerId: params.id,
    },
  };
}
