import {
  Box,
  Flex,
  Image,
  Center,
  Spacer,
  Link,
  List,
  ListItem,
  ListIcon,
  Input,
  HStack,
  Button,
  Text,
  Stack,
  Heading,
  VStack,
  Grid,
  GridItem,
  Checkbox,
  Divider,
  ButtonGroup,
  FormLabel,
  IconButton,
  Container,
  Wrap,
  WrapItem,
  chakra,
  FormControl,
  Icon,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import Logo from "../../components/logo";
import { fetchProvider } from "../../lib/api";
import { useRouter } from "next/router";

export default function RegisterPage() {
  const [providerInfo, setProviderInfo] = useState({});

  const router = useRouter();

  useEffect(() => {
    if (!router.query.id) return;
    async function loadProviderInfo() {
      const provider = await fetchProvider(router.query.id);
      setProviderInfo(provider);
    }
    console.log(providerInfo.photo);

    loadProviderInfo();
  }, [router.query.id]);
  return (
    <>
      <Head>
        <meta name="description" content="Everyday life made easier" />
        <title>Tasker | Everyday life made easier </title>
      </Head>

      <Stack mb={14}>
        <Flex direction="row" pt={{ md: 5, base: 5 }}>
          <Logo />
          <Spacer />
        </Flex>
      </Stack>

      <Container mx="auto" maxW="container.lg">
        <Stack mb={24} alignItems="center" spacing={8}>
          <Heading fontSize="30px">Your profile has been created!</Heading>
          <Stack alignItems="center" spacing={5} direction="row">
            <Stack
              bgColor="#EAD9D9"
              borderRadius="4px"
              width="48px"
              height="40px"
              alignItems="center"
              justify="center"
            >
              <Text color="#B0ABAB" fontWeight={600} fontSize="1rem">
                1
              </Text>
            </Stack>
            <Divider
              alignSelf="center"
              width="32px"
              height="1px"
              bgColor="#CAC7C7"
            />
            <Stack
              bgColor="#EAD9D9"
              borderRadius="4px"
              width="48px"
              height="40px"
              alignItems="center"
              justify="center"
            >
              <Text color="#B0ABAB" fontWeight={600} fontSize="1rem">
                2
              </Text>
            </Stack>
            <Divider
              alignSelf="center"
              width="32px"
              height="1px"
              bgColor="#CAC7C7"
            />
            <Stack
              bgColor="#F1D1D1"
              borderRadius="4px"
              width="55px"
              height="45px"
              alignItems="center"
              justify="center"
            >
              <Text color="#822121" fontWeight={600} fontSize="1.25rem">
                3
              </Text>
            </Stack>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={16} justify="center">
          <chakra.div
            borderRadius="xl"
            overflow="hidden"
            flexBasis="28%"
            shadow="md"
          >
            <Image
              display={{ md: "block", base: "none" }}
              boxSize="full"
              alt="a guy cleaning"
              src="/images/profile-pic.jpg"
              objectFit="cover"
            ></Image>
          </chakra.div>

          <Stack maxW="max-content">
            <chakra.div
              borderRadius="4px"
              alignItems="center"
              width="74px"
              py={1}
              bgColor="rgba(176, 170, 4, 0.24)"
            >
              <Text
                textAlign="center"
                fontSize="13.5px"
                color="#686402"
                fontWeight={500}
              >
                Tasker
              </Text>
            </chakra.div>
            <Heading fontWeight={500} fontSize="38px" lineHeight="">
              {providerInfo?.name}
            </Heading>
            <Stack spacing={5} direction="row">
              <Stack alignItems="center" direction="row">
                <Icon as={BsTelephone} />
                <Text fontSize="sm" color="#655E5E">
                  {providerInfo?.phone}
                </Text>
              </Stack>

              <Stack alignItems="center" direction="row">
                <Icon as={FiMail} />
                <Text fontSize="sm" color="#655E5E">
                  {providerInfo?.email}
                </Text>
              </Stack>
            </Stack>
            <Stack justify="space-between" py={5} spacing={8} direction="row">
              <Stack
                maxH="52px"
                spacing={1}
                pl={3}
                borderLeft="2.895px solid #000000"
              >
                <Text fontWeight={500}>Tasks</Text>
                <Text color="#655E5E">{providerInfo?.tasks?.join(", ")}</Text>
              </Stack>
              <Stack
                maxH="52px"
                spacing={1}
                pl={3}
                borderLeft="2.95px solid #000000"
              >
                <Text fontWeight={500}>Price</Text>
                <Text color="#655E5E">{providerInfo?.price_range}</Text>
              </Stack>
            </Stack>
            <Stack direction="row">
              <Stack
                maxH="52px"
                spacing={1}
                pl={3}
                borderLeft="2.95px solid #000000"
              >
                <Text fontWeight={500}>Availability</Text>
                <Text color="#655E5E">
                  {providerInfo?.availability_time?.join(", ")}
                </Text>
              </Stack>
            </Stack>
            <Stack pt={4} direction="row" alignItems="center" color="#004EAA">
              <Icon fontWeight={300} as={FaEdit} />
              <Text fontWeight={400}>Edit profile info</Text>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
