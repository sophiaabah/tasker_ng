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
import { MdCheckCircle } from "react-icons/md";
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
        bgImage=" linear-gradient(1.35deg, rgba(0, 0, 0, 0.7) 10.36%, rgba(0, 0, 0, 0.6) 52.28%, rgba(0, 0, 0, 0.4) 95.58%), url('/images/hero.jpg')"
        bgPosition={{ md: "center", base: "center" }}
        px={{ md: 20, base: 6 }}
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex direction="row" pt={{ md: 5, base: 5 }}>
          <Heading
            alignSelf="center"
            pl={1}
            color="rgb(255 255 255 / 95%)"
            fontSize="2xl"
          >
            T<chakra.span color="tasker_green.200">ask</chakra.span>er
            <chakra.span color="tasker_green.200">Now</chakra.span>
          </Heading>
          <Spacer />
          <Stack align="center" direction="row" spacing={10}>
            <Link color="#fff">Benefits</Link>

            <Button
              display={{ md: "block", base: "none" }}
              variant="solid"
              colorScheme="tasker_red"
            >
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
            width={{ md: "50%", base: "100%" }}
            py={{ md: 20, base: 10 }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading
              color="white"
              fontWeight={800}
              fontSize={{ lg: "6xl", base: "4xl" }}
            >
              Everyday life made easier.
            </Heading>
            <Text color="rgb(255 255 255 / 95%)" fontWeight={500} fontSize="xl">
              Connect with highly verified taskers around your location for all
              your household needs with one click.
            </Text>
          </Stack>

          <Stack
            spacing={4}
            justify="center"
            alignSelf="center"
            maxW={{ md: "md", base: "md" }}
            py={6}
            px={{ md: 10, base: 6 }}
            borderRadius="md"
            backgroundColor="white"
          >
            <Heading fontSize="3xl" fontWeight={600} pb={2}>
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
          spacing={{ md: 6, base: 5 }}
          alignSelf="center"
        >
          <Heading fontSize={{ md: "2.75rem", base: "2.5rem" }}>
            Start making the most of your time.
          </Heading>
          <Text fontSize={{ md: "1.3rem", base: "lg" }}>
            When life gets busy, you don’t have to tackle it alone. Get back
            time for what you love without breaking the bank.
          </Text>
          <List spacing={3}>
            <ListItem fontSize={{ md: "xl", base: "lg" }}>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Choose your Tasker by location, reviews, skills, and price.
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
        <Image
          display={{ md: "block", base: "none" }}
          borderRadius={{ md: "md", base: "md" }}
          alt="a girl cleaning"
          src="/images/fixing.jpg"
        ></Image>
      </Stack>

      <Stack
        align="center"
        justify={{ md: "space-around", base: "none" }}
        px={{ md: 16, base: 8 }}
        direction={{ lg: "row", md: "column", base: "column" }}
      >
        <Image
          width={{ md: "40%", base: "none" }}
          height={{ md: "sm", base: "none" }}
          borderRadius={{ md: "md", base: "lg" }}
          alt="a girl cleaning"
          src="/images/washing.jpg"
        ></Image>

        <Stack
          alignSelf="center"
          spacing={{ md: 6, base: 5 }}
          py={{ md: 24, base: 18 }}
          px={{ md: 20, base: 0 }}
          width={{ md: "3xl", base: "none" }}
          direction="column"
        >
          <Heading fontSize="2.75rem">
            Build A Trusted Team For all household tasks.
          </Heading>
          <Text fontSize={{ md: "1.3rem", base: "lg" }}>
            Build a team of local, background-checked Taskers to help with
            whatever you need, they’ve got it covered.
          </Text>
          <List spacing={3}>
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
      </Stack>

      <Stack alignSelf="center">
        <Stack align="center" spacing={2} direction="row">
          <IconButton variant="ghost" icon={<BsTwitter />}></IconButton>
          <IconButton variant="ghost" icon={<BsInstagram />}></IconButton>
          <IconButton variant="ghost" icon={<BsFacebook />}></IconButton>
        </Stack>
        <Text color="rgb(0 0 0 / 55%)" textAlign="center" fontSize="sm" pb={2}>
          All rights reserved.
        </Text>
      </Stack>
    </Stack>
  );
}
