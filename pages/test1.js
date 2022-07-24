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
  ButtonGroup,
  FormLabel,
  IconButton,
  Container,
  Wrap,
  WrapItem,
  chakra,
  FormControl,
} from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HiCheck } from "react-icons/hi";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const arrOfTasks = [
  "Cooking",
  "Cleaning",
  "Plumbing",
  "Carpentry",
  "Electrician",
  "Mechanic",
  "Dish washing",
  "Shopping",
  "Laundry",
];

export default function App() {
  return (
    <Stack spacing={5}>
      <Head>
        <title>Welcome to Tasker</title>
      </Head>

      <Stack
        bgImage=" linear-gradient(1.35deg, rgba(0, 0, 0, 0.85) 5.25%, rgba(0, 0, 0, 0.7) 49.28%), url('/images/nice.jpg')"
        bgPosition={{ md: "center", base: "center" }}
        px={{ md: 20, base: 6 }}
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex direction="row" pt={{ md: 5, base: 5 }}>
          <Stack
            direction="row"
            ml="auto !important"
            alignItems="center"
            spacing={6}
          >
            <Link color="#fff">Benefits</Link>

            <Button variant="solid" colorScheme="tasker_red">
              Get Started
            </Button>
          </Stack>
        </Flex>

        <Stack
          direction={{ md: "row", base: "column" }}
          justify={{ md: "space-between", base: "center" }}
          py={{ md: 14, base: 7 }}
        >
          <Stack
            alignSelf="center"
            spacing={{ md: 6, base: 6 }}
            width={{ md: "45%", base: "100%" }}
            py={{ md: 20, base: 10 }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading
              color="white"
              fontWeight={800}
              fontSize={{ lg: "6xl", base: "4xl" }}
            >
              Start making the most of your time!
            </Heading>
            <Text color="rgb(255 255 255 / 95%)" fontWeight={500} fontSize="xl">
              Get a list of highly verified taskers for all your household needs
              with one click.
            </Text>
          </Stack>

          <Stack
            spacing={4}
            justify="center"
            alignSelf="center"
            maxW="md"
            py={6}
            px={{ md: 10, base: 6 }}
            borderRadius="md"
            backgroundColor="white"
          >
            <Heading fontSize="3xl" fontWeight={700} pb={2}>
              Ask Now!
            </Heading>

            <Stack spacing={4}>
              <Stack spacing={2} direction="row">
                <FormControl>
                  <FormLabel fontSize="sm">Name</FormLabel>
                  <Input px={2} type="text" placeholder="John Obi" />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize="sm">Phone</FormLabel>
                  <Input px={2} type="tel" placeholder="0123456789" />
                </FormControl>
              </Stack>

              <Stack spacing={2} direction="row">
                <FormControl>
                  <FormLabel fontSize="sm">Address</FormLabel>
                  <Input type="text" px={2} placeholder="Lekki, Lagos" />
                </FormControl>
              </Stack>
            </Stack>

            <Text pt={2}>What services do you need?</Text>
            <Stack spacing={2}>
              <Stack direction="row">
                <Checkbox value="Cleaning" flex={1}>
                  <Text fontSize={{ md: "md", base: "sm" }}>Cleaning</Text>
                </Checkbox>
                <Checkbox value="Cooking" flex={1}>
                  <Text fontSize={{ md: "md", base: "sm" }}>Cooking</Text>
                </Checkbox>
                <Checkbox value="Plumbing" flex={1}>
                  <Text fontSize={{ md: "md", base: "sm" }}>Plumbing</Text>
                </Checkbox>
              </Stack>

              <Stack direction="row">
                <Checkbox value="Carpentry" flex={1}>
                  <Text fontSize={{ md: "md", base: "sm" }}>Carpentry</Text>
                </Checkbox>
                <Checkbox value="Electrician" flex={1}>
                  <Text fontSize={{ md: "md", base: "sm" }}>Electrician</Text>
                </Checkbox>
                <Checkbox value="Mechanic" flex={1}>
                  <Text fontSize={{ md: "md", base: "sm" }}>Mechanic</Text>
                </Checkbox>
              </Stack>

              <Stack direction="row">
                <Checkbox value="Shopping" flex={1}>
                  <Text fontSize={{ md: "md", base: "sm" }}>Shopping</Text>
                </Checkbox>
                <Checkbox value="Laundry" flex={1}>
                  <Text fontSize={{ md: "md", base: "sm" }}>Laundry</Text>
                </Checkbox>
                <Checkbox value="Other" flex={1}>
                  <Text fontSize={{ md: "md", base: "sm" }}>Other</Text>
                </Checkbox>
              </Stack>
            </Stack>

            <Text pb={2} pt={1} fontSize="sm" color="rgb(0 0 0 / 55%)">
              By continuing, you agree to the{" "}
              <chakra.span color="rgb(0 0 0 / 65%)" fontWeight={600}>
                Terms and Conditions
              </chakra.span>{" "}
              and{" "}
              <chakra.span color="rgb(0 0 0 / 65%)" fontWeight={600}>
                privacy policy
              </chakra.span>
              .
            </Text>

            <Button
              py={6}
              fontWeight={700}
              fontSize="lg"
              colorScheme="tasker_red"
            >
              Contact Us
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        p={{ md: 16, base: 8 }}
        spacing={{ md: "none", base: 8 }}
        justify={{ md: "space-around", base: "none" }}
        direction={{ lg: "row", base: "column-reverse" }}
      >
        <Stack
          justify="center"
          width={{ md: "xl", base: "100%" }}
          spacing={4}
          alignSelf="center"
        >
          <Heading fontSize="2.75rem">
            Start making the most of your time.
          </Heading>
          <Text fontSize={{ md: "2xl", base: "xl" }}>
            Compare pricing, rating and availability to make a better selection,
            easy-peasy.
          </Text>
        </Stack>
        <Image
          display={{ md: "block", base: "none" }}
          borderRadius={{ md: "md", base: "md" }}
          alt="a girl cleaning"
          src="/images/fixing.jpg"
        ></Image>
      </Stack>

      <Stack
        justify={{ md: "space-around", base: "none" }}
        px={{ md: 8, base: 8 }}
        direction={{ lg: "row", md: "column", base: "column" }}
      >
        <Image
          width={{ md: "40%", base: "none" }}
          borderRadius={{ md: "md", base: "lg" }}
          boxSize={{ md: "lg", base: "none" }}
          alt="a girl cleaning"
          src="/images/singing.jpg"
        ></Image>

        <Stack
          alignSelf="center"
          spacing={{ md: 4, base: 5 }}
          py={{ md: 24, base: 18 }}
          px={{ md: 20, base: 0 }}
          width={{ md: "3xl", base: "none" }}
          direction="column"
        >
          <Heading fontSize="2.75rem">Everyday life made easier.</Heading>
          <Text fontSize={{ md: "2xl", base: "xl" }} fontWeight={400}>
            Chat with your tasker to discuss the details of the task you want to
            get done.
          </Text>
        </Stack>
      </Stack>

      <Stack
        spacing={{ md: "none", base: 8 }}
        px={{ md: "none", base: 8 }}
        pb={4}
        justify={{ md: "space-around", base: "none" }}
        direction={{ lg: "row", base: "column-reverse" }}
      >
        <Stack
          justify="center"
          width={{ md: "xl", base: "none" }}
          spacing={4}
          alignSelf={{ md: "center", base: "none" }}
        >
          <Heading fontSize="2.75rem">Lorem ipsum.</Heading>
          <Text fontSize={{ md: "2xl", base: "xl" }}>
            Enjoy the ease of cash-free payments.
          </Text>
        </Stack>
        <Image
          width={{ md: "40%", base: "none" }}
          borderRadius={{ md: "md", base: "lg" }}
          alt="a girl cleaning"
          src="/images/fixerin.jpg"
        ></Image>
      </Stack>

      <Flex align="center" direction="row" pr={8}>
        <Spacer />
        <Text fontSize="md" pr={6}>
          All rights reserved.
        </Text>
        <Stack spacing={2} direction="row">
          <IconButton variant="ghost" icon={<BsTwitter />}></IconButton>
          <IconButton variant="ghost" icon={<BsInstagram />}></IconButton>
          <IconButton variant="ghost" icon={<BsFacebook />}></IconButton>
        </Stack>
      </Flex>
    </Stack>
  );
}
