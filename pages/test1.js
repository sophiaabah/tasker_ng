import {
  Box,
  Flex,
  Image,
  Center,
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

const arrOfBenefits = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit arcu, bibendum et libero integer ut.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit arcu, bibendum et libero integer ut.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit arcu, bibendum et libero integer ut.",
];

export default function App() {
  return (
    <Stack spacing={5}>
      <Head>
        <title>Welcome to Tasker</title>
      </Head>
      <Flex px={{ md: 10, base: 6 }} direction="row" pt={{ md: 5, base: 5 }}>
        <Spacer />
        <ButtonGroup
          colorScheme="tasker_red"
          spacing={6}
          paddingRight={{ md: 0, base: "none" }}
        >
          <Button px={{ md: 7, base: 5 }}>
            <Text fontWeight={600} fontSize={{ md: "1.2rem", base: "0.95rem" }}>
              Sign up
            </Text>
          </Button>
        </ButtonGroup>
      </Flex>

      <Stack
        direction={{ lg: "row", base: "column" }}
        height={{ md: "71vh", base: "85vh" }}
        bgImage=" linear-gradient(1.35deg, rgba(0, 0, 0, 0.85) 5.25%, rgba(0, 0, 0, 0.6) 49.28%, rgba(0, 0, 0, 0.17) 95.58%), url('/images/nice.jpg')"
        bgPosition={{ md: "bottom", base: "center" }}
        bgRepeat="no-repeat"
        bgSize="cover"
        justify={{ md: "none", base: "center" }}
      >
        <Stack
          alignSelf={{ md: "center", base: "none" }}
          spacing={4}
          width={{ md: "60%", base: "100%" }}
          px={{ md: 20, base: 12 }}
          py={{ md: 20, base: 0 }}
        >
          <Heading
            fontWeight={800}
            fontSize={{ lg: "5xl", base: "2.9rem" }}
            color="white"
          >
            Ask now.
          </Heading>
          <Text
            fontWeight={600}
            fontSize={{ lg: "1.7rem", base: "1.2rem" }}
            color="white"
          >
            {" "}
            Get a list of highly verified taskers for all your household needs
            with one click.
          </Text>
        </Stack>
        <Stack
          display={{ md: "block", base: "none" }}
          spacing={5}
          justify="center"
          alignSelf="center"
          px={10}
          height="xl"
          width="md"
          borderRadius="md"
          backgroundColor="white"
        >
          <Stack spacing={4}>
            <Input height="3rem" placeholder="Full name"></Input>
            <Input height="3rem" placeholder="Phone number"></Input>
            <Input height="3rem" placeholder="Adddress"></Input>
          </Stack>

          <Text fontSize="1.175rem">What services do you need?</Text>
          <Stack spacing={3}>
            <Stack direction="row">
              <Checkbox value="Cleaning" borderColor="lightgrey" flex={1}>
                <Text fontSize="lg">Cleaning</Text>
              </Checkbox>
              <Checkbox value="Cooking" borderColor="lightgrey" flex={1}>
                <Text fontSize="lg">Cleaning</Text>
              </Checkbox>
            </Stack>

            <Stack direction="row">
              <Checkbox value="Shopping" borderColor="lightgrey" flex={1}>
                <Text fontSize="lg">Cleaning</Text>
              </Checkbox>
              <Checkbox value="Cleaning" borderColor="lightgrey" flex={1}>
                <Text fontSize="lg">Cleaning</Text>
              </Checkbox>
            </Stack>

            <Stack direction="row">
              <Checkbox
                width={8}
                borderColor="lightgrey"
                value="Cooking"
                flex={1}
              >
                <Text fontSize="lg">Cleaning</Text>
              </Checkbox>
              <Checkbox value="Shopping" borderColor="lightgrey" flex={1}>
                <Text fontSize="lg">Cleaning</Text>
              </Checkbox>
            </Stack>
          </Stack>

          <Text pb={2} pt={1} fontSize={{ md: "md", base: "md" }}>
            By clicking sign up, you agree to the{" "}
            <chakra.span fontWeight={600}>Terms and Conditions</chakra.span> and{" "}
            <chakra.span fontWeight={600}>privacy policy</chakra.span>.
          </Text>

          <Button
            py={6}
            fontWeight={700}
            fontSize="xl"
            colorScheme="tasker_red"
          >
            Sign up
          </Button>
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
          <Text fontSize="2xl">
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
        backgroundColor={{ md: "#F8F8F8", base: "none" }}
        spacing={8}
        px={{ md: 0, base: 8 }}
        direction={{ lg: "row", md: "column", base: "column" }}
      >
        <Image
          boxSize={{ md: "lg", base: "none" }}
          borderRadius={{ md: "none", base: "lg" }}
          alt="a girl cleaning"
          src="/images/singing.jpg"
        ></Image>

        <Stack
          alignSelf="center"
          backgroundColor={{ md: "#F8F8F8", base: "none" }}
          spacing={{ md: 4, base: 5 }}
          py={{ md: 24, base: 18 }}
          px={{ md: 20, base: 0 }}
          width={{ md: "3xl", base: "none" }}
          direction="column"
        >
          <Heading fontSize="2.75rem">Everyday life made easier</Heading>
          <Text fontSize={{ md: "2xl", base: "xl" }} fontWeight={400}>
            Chat with your tasker to discuss the details of the task you want to
            get done.
          </Text>
        </Stack>
      </Stack>

      <Stack
        px={{ md: "none", base: 8 }}
        pt={16}
        pb={6}
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
          <Text fontSize="2xl">Enjoy the ease of cash-free payments.</Text>
        </Stack>
        <Image
          width={{ md: "40%", base: "none%" }}
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
