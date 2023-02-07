import { useEffect, useState } from "react";
import Api from "lib/api";
import Head from "next/head";
import Logo from "components/logo";
import { Center, Image, Text, Stack, Heading, Divider, Container, chakra, Icon } from "@chakra-ui/react";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { HiOutlineIdentification } from "react-icons/hi";
import { useRouter } from "next/router";

import { fetchProvider } from "../../lib/api";

const getImageUrl = (url) => {
  return process.env.NEXT_PUBLIC_TASKER_BASE_URL + url;
};

export default function Page({ profile }) {
  return (
    <>
      <Head>
        <meta name="description" content="Everyday life made easier" />
        <title>Tasker | Everyday life made easier </title>
      </Head>

      <Stack mb={14} pt={5} alignItems="start">
        <Logo />
      </Stack>

      <Stack spacing={16} alignItems="center">
        <Stack mb={2} alignItems="center" spacing={6} px={6}>
          <Heading textAlign="center" fontSize="30px">
            Your profile has been created!
          </Heading>

          <Stack alignItems="center" spacing={6} direction="row" divider={<Divider w="32px" h="1px" bgColor="gray.400" />}>
            <Center w={14} py={2} bgColor="red.100" rounded="md" color="red.800" opacity={0.5}>
              <Text fontWeight={600} fontSize="lg">
                1
              </Text>
            </Center>

            <Center w={14} py={2} bgColor="red.100" rounded="md" color="red.800" opacity={0.5}>
              <Text fontWeight={600} fontSize="lg">
                2
              </Text>
            </Center>

            <Center w={14} py={2} bgColor="red.100" rounded="md" color="red.800">
              <Text fontWeight={600} fontSize="lg">
                3
              </Text>
            </Center>
          </Stack>
        </Stack>

        <Container maxW="container.lg">
          <Stack direction="row" spacing={16} justify="center">
            <Image
              flex={2}
              w="full"
              shadow="md"
              maxH="350px"
              rounded="xl"
              overflow="hidden"
              alt={profile.name}
              src={getImageUrl(profile.photo)}
              objectFit="cover"
              objectPosition="top"
              display={{ md: "block", base: "none" }}
            />

            <chakra.div flex={3}>
              <Text
                py={1}
                px={3}
                mb={2}
                rounded="md"
                fontSize="sm"
                color="#686402"
                w="max-content"
                fontWeight={500}
                textAlign="center"
                bgColor="rgba(176, 170, 4, 0.24)"
              >
                Tasker
              </Text>

              <Heading mb={4} fontWeight={500} fontSize="4xl">
                {profile.name}
              </Heading>

              <Stack direction="row" spacing={5}>
                <Stack alignItems="center" direction="row">
                  <Icon as={BsTelephone} />
                  <Text fontSize="sm" color="#655E5E">
                    {profile.phone}
                  </Text>
                </Stack>

                <Stack alignItems="center" direction="row">
                  <Icon fontSize="xl" as={HiOutlineIdentification} />
                  <Text fontSize="sm" color="#655E5E">
                    {profile.national_id}
                  </Text>
                </Stack>
              </Stack>

              <Stack justifyContent="space-between" py={5} spacing={8} direction="row">
                <Stack flex={1} spacing={1} pl={3} borderLeft="2px solid #000">
                  <Text fontWeight={500}>Tasks</Text>
                  <Text textTransform="capitalize" color="gray.600">
                    {profile.tasks?.join(", ")}
                  </Text>
                </Stack>

                <Stack flex={1} spacing={1} pl={3} borderLeft="2px solid #000">
                  <Text fontWeight={500}>Price</Text>
                  <Text color="gray.600">
                    {profile.price_range
                      .split("-")
                      .map((r) => Intl.NumberFormat().format(r))
                      .join(" - ")}
                  </Text>
                </Stack>
              </Stack>

              <Stack direction="row">
                <Stack spacing={1} pl={3} borderLeft="3px solid #000">
                  <Text fontWeight={500}>Availability</Text>
                  <Text textTransform="capitalize" color="gray.600">
                    {profile?.availability_time?.join(", ")}
                  </Text>
                </Stack>
              </Stack>
            </chakra.div>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { data } = await Api.get(`/provider/${query.providerId}`);
  return {
    props: {
      profile: data,
    },
  };
}
