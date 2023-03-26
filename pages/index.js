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
  Text,
  Stack,
  Heading,
  Checkbox,
  FormLabel,
  Container,
  IconButton,
  chakra,
  FormControl,
  Icon,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { useRouter } from "next/router";
import { MdCheckCircle } from "react-icons/md";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

export default function App() {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="description" content="Everyday life made easier" />
        <title>Tasker | Everyday life made easier </title>
      </Head>
      <Container my={{ lg: 14, md: 10, base: 3 }} maxW="fit-content">
        <Stack
          spacing={{ lg: 28, md: 16, base: 16 }}
          maxW="100%"
          px={{ md: 22, base: 6 }}
          direction="column"
          py={10}
        >
          <Stack
            direction={{
              lg: "row",
              md: "column",
              base: "column",
            }}
            spacing={{ lg: "none", md: 8, base: 14 }}
            justify={{ md: "space-between", base: "center" }}
            w="100%"
          >
            <Stack
              alignSelf="center"
              width={{ lg: "xl", md: "xl", base: "100%" }}
              justifySelf="flex-start"
              textAlign={{ base: "center", md: "left" }}
            >
              <Heading
                overflow="hidden"
                fontWeight={800}
                fontSize={{ lg: "7xl", base: "4xl" }}
              >
                <chakra.span
                  animation="750ms cubic-bezier(0.65, 0, 0.35, 1) slideIn 0s both 1"
                  lineHeight="100%"
                  display="inline-block"
                  // whiteSpace="nowrap"
                >
                  Everyday life{" "}
                </chakra.span>
                <chakra.span
                  animation="750ms cubic-bezier(0.65, 0, 0.35, 1) slideIn 150ms both 1"
                  lineHeight="100%"
                  display="inline-block"
                  // whiteSpace="nowrap"
                >
                  made <chakra.span color="green.400">easier.</chakra.span>
                </chakra.span>
              </Heading>
              <Text pb={4} fontWeight={400} fontSize="xl">
                Connect with highly verified taskers around your location for
                all your household needs with one click.
              </Text>
              <Stack
                justify={{ lg: "flex-start", md: "flex-start", base: "center" }}
                direction="row"
                spacing={3}
              >
                <Button
                  colorScheme="primary"
                  py={0}
                  fontWeight={500}
                  fontSize="sm"
                  onClick={() => router.push("/customer/new")}
                >
                  Find a Tasker
                </Button>
              </Stack>
            </Stack>
            <Stack
              alignSelf={{ base: "center" }}
              boxSize={{ lg: "sm", md: "sm", base: "xs" }}
              direction="row"
              spacing={3}
            >
              <Image
                borderTopRadius="50%"
                objectFit="cover"
                alt=""
                src="/images/hero2.jpg"
              />
            </Stack>
          </Stack>
          <Stack
            spacing={{ lg: "none", md: 8, base: 8 }}
            justify={{ md: "space-between", base: "none" }}
            direction={{ lg: "row", base: "column-reverse" }}
          >
            <Image
              display={{ md: "block", base: "block" }}
              borderRadius={{ md: "md", base: "md" }}
              alt=""
              objectFit="cover"
              src="/images/fixing.jpg"
              width={{ lg: "40%", md: "100%", base: "none" }}
            ></Image>
            <Stack
              justify="center"
              width={{ lg: "xl", md: "inherit", base: "100%" }}
              spacing={{ md: 6, base: 5 }}
              alignSelf={{ lg: "center", md: "center", base: "start" }}
            >
              <Heading fontSize={{ md: "2.75rem", base: "2.5rem" }}>
                Start making the most of your time.
              </Heading>
              <Text
                fontSize={{ md: "1.3rem", base: "lg" }}
                color="rgb(0 0 0 / 65%)"
              >
                When life gets busy, you don’t have to tackle it alone. Get back
                time for what you love without breaking the bank.
              </Text>
              <List color="rgb(0 0 0 / 65%)" spacing={3}>
                <ListItem fontSize={{ md: "xl", base: "lg" }}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Choose your tasker by location, reviews, skills, and price.
                </ListItem>

                <ListItem fontSize={{ md: "xl", base: "lg" }}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Chat with your tasker and schedule when it works for you.
                </ListItem>

                <ListItem fontSize={{ md: "xl", base: "lg" }}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Pay, tip, and review all through one platform.{" "}
                </ListItem>
              </List>
            </Stack>
          </Stack>

          <Stack
            spacing={{ lg: 0, md: 12, base: 0 }}
            w="100%"
            justify={{ md: "space-between", base: "none" }}
            alignSelf={{ lg: "center", md: "center", base: "start" }}
            direction={{ lg: "row" }}
          >
            <Stack
              spacing={{ md: 6, base: 5 }}
              width={{ lg: "xl", md: "inherit", base: "none" }}
              direction="column"
              // mx={{ md: 10 }}
            >
              <Heading fontSize="2.75rem">
                Build A Trusted Team For all household tasks.
              </Heading>
              <Text
                color="rgb(0 0 0 / 65%)"
                fontSize={{ md: "1.3rem", base: "lg" }}
              >
                Build a team of local, background-checked taskers to help with
                whatever you need, they’ve got it covered.
              </Text>
              <List color="rgb(0 0 0 / 65%)" spacing={3}>
                <ListItem fontSize={{ md: "xl", base: "lg" }}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Get a wide range of taskers to make a better selection.
                </ListItem>
                <ListItem fontSize={{ md: "xl", base: "lg" }}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Compare them by reviews, ratings, and prices.
                </ListItem>
                <ListItem fontSize={{ md: "xl", base: "lg" }}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Choose and connect with the best person for the job.
                </ListItem>
              </List>
            </Stack>
            <Image
              alignSelf="center"
              objectFit="cover"
              width={{ lg: "38%", md: "100%", base: "none" }}
              height={{ lg: "xs", md: "md", base: "none" }}
              borderRadius={{ md: "md", base: "lg" }}
              display={{ lg: "block", md: "none", base: "none" }}
              alt="washing dishes"
              src="/images/washing.jpg"
            ></Image>
          </Stack>
        </Stack>

        <Stack>
          <Stack w="100%" justifyContent="center" spacing={2} direction="row">
            <IconButton variant="ghost" icon={<BsTwitter />}></IconButton>
            <IconButton variant="ghost" icon={<BsInstagram />}></IconButton>
            <IconButton variant="ghost" icon={<BsFacebook />}></IconButton>
          </Stack>
          <Text
            color="rgb(0 0 0 / 55%)"
            textAlign="center"
            fontSize="sm"
            pb={2}
          >
            All rights reserved.
          </Text>
        </Stack>
      </Container>
    </>
  );
}
