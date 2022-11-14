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
  Icon,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { useRouter } from "next/router";
import { HiCheck } from "react-icons/hi";
import { MdCheckCircle } from "react-icons/md";
import { HiThumbUp, HiThumbDown } from "react-icons/hi";
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

const formResponse = { error: "", success: "" };

const Form = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [tasks, setTasks] = useState([]);
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    console.log("data:", { name, phoneNumber, address, email, tasks });
    handlerTest();

    ReactGA.event({
      category: "lead",
      action: "generate_lead",
    });
  }

  async function handlerTest() {
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phoneNumber,
          email,
          address,
          tasks,
        }),
      });
      const payload = await response.json();
      if (payload.success) {
        setSubmitted(true);
      }
    } catch (error) {
      console.log(error);
      setFormError(error.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Stack
      as="form"
      onSubmit={onSubmit}
      spacing={{ lg: 4, md: 6, base: 4 }}
      justify="center"
      alignSelf="center"
      maxW={{ lg: "md", md: "xl", base: "md" }}
      minW={{ lg: "md", md: "xl", base: "xs" }}
      minH={{ lg: "lg", md: "lg", base: "md" }}
      py={6}
      px={{ md: 10, base: 6 }}
      borderRadius="md"
      backgroundColor="white"
    >
      {!submitted ? (
        <React.Fragment>
          <Heading fontSize="3xl" fontWeight={600} pb={2}>
            Register
          </Heading>
          <Stack spacing={4}>
            <Stack spacing={2} direction="row">
              <FormControl isRequired>
                <FormLabel fontSize="sm">Name</FormLabel>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  px={2}
                  type="text"
                  placeholder="John Obi"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="sm">WhatsApp</FormLabel>
                <Input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  px={2}
                  type="tel"
                  placeholder="0123456789"
                />
              </FormControl>
            </Stack>

            <Stack spacing={2} direction="row">
              <FormControl isRequired>
                <FormLabel fontSize="sm">Email address</FormLabel>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  px={2}
                  placeholder="john@gmail.com"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontSize="sm">Home address</FormLabel>
                <Input
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  px={2}
                  placeholder="Lekki, Lagos"
                />
              </FormControl>
            </Stack>
          </Stack>
          <Text pt={2}>What services do you need?</Text>
          <Stack spacing={2}>
            <Stack direction="row">
              <Checkbox
                isChecked={tasks.includes("cleaning")}
                onChange={(e) => {
                  e.target.checked
                    ? setTasks(tasks.concat("cleaning"))
                    : setTasks(tasks.filter((task) => task !== "cleaning"));
                }}
                value="Cleaning"
                flex={1}
              >
                <Text fontSize={{ md: "md", base: "sm" }}>Cleaning</Text>
              </Checkbox>
              <Checkbox
                isChecked={tasks.includes("cooking")}
                onChange={(e) => {
                  e.target.checked
                    ? setTasks(tasks.concat("cooking"))
                    : setTasks(tasks.filter((task) => task !== "cooking"));
                }}
                value="Cooking"
                flex={1}
              >
                <Text fontSize={{ md: "md", base: "sm" }}>Cooking</Text>
              </Checkbox>
              <Checkbox
                isChecked={tasks.includes("plumbing")}
                onChange={(e) => {
                  e.target.checked
                    ? setTasks(tasks.concat("plumbing"))
                    : setTasks(tasks.filter((task) => task !== "plumbing"));
                }}
                value="Plumbing"
                flex={1}
              >
                <Text fontSize={{ md: "md", base: "sm" }}>Plumbing</Text>
              </Checkbox>
            </Stack>

            <Stack direction="row">
              <Checkbox
                isChecked={tasks.includes("carpentry")}
                onChange={(e) => {
                  e.target.checked
                    ? setTasks(tasks.concat("carpentry"))
                    : setTasks(tasks.filter((task) => task !== "carpentry"));
                }}
                value="Carpentry"
                flex={1}
              >
                <Text fontSize={{ md: "md", base: "sm" }}>Carpentry</Text>
              </Checkbox>
              <Checkbox
                isChecked={tasks.includes("electrician")}
                onChange={(e) => {
                  e.target.checked
                    ? setTasks(tasks.concat("electrician"))
                    : setTasks(tasks.filter((task) => task !== "electrician"));
                }}
                value="Electrician"
                flex={1}
              >
                <Text fontSize={{ md: "md", base: "sm" }}>Electrician</Text>
              </Checkbox>
              <Checkbox
                isChecked={tasks.includes("mechanic")}
                onChange={(e) => {
                  e.target.checked
                    ? setTasks(tasks.concat("mechanic"))
                    : setTasks(tasks.filter((task) => task !== "mechanic"));
                }}
                value="Mechanic"
                flex={1}
              >
                <Text fontSize={{ md: "md", base: "sm" }}>Mechanic</Text>
              </Checkbox>
            </Stack>

            <Stack direction="row">
              <Checkbox
                isChecked={tasks.includes("shopping")}
                onChange={(e) => {
                  e.target.checked
                    ? setTasks(tasks.concat("shopping"))
                    : setTasks(tasks.filter((task) => task !== "shopping"));
                }}
                value="Shopping"
                flex={1}
              >
                <Text fontSize={{ md: "md", base: "sm" }}>Shopping</Text>
              </Checkbox>
              <Checkbox
                isChecked={tasks.includes("laundry")}
                onChange={(e) => {
                  e.target.checked
                    ? setTasks(tasks.concat("laundry"))
                    : setTasks(tasks.filter((task) => task !== "laundry"));
                }}
                value="Laundry"
                flex={1}
              >
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
            isLoading={submitting}
            isDisabled={!tasks.length}
            type="submit"
            py={6}
            fontWeight={700}
            fontSize="lg"
            colorScheme="tasker_red"
          >
            Contact Us
          </Button>
          {!!formError && (
            <Text fontSize="sm" color="red.500">
              Sorry, something went wrong. Please try again.
            </Text>
          )}
        </React.Fragment>
      ) : (
        <Stack spacing={10} alignItems="center">
          <Icon as={HiThumbUp} color="green.600" fontSize="5rem"></Icon>

          <Text textAlign="center" fontSize="lg">
            Thank you so much. We will get back to you soon.
          </Text>
        </Stack>
      )}
    </Stack>
  );
};

export default function App() {
  return (
    <Stack spacing={5}>
      <Head>
        <meta name="description" content="Everyday life made easier" />
        <title>Tasker | Everyday life made easier </title>
      </Head>

      <Stack
        bgImage=" linear-gradient(1.35deg, rgba(0, 0, 0, 0.7) 10.36%, rgba(0, 0, 0, 0.6) 52.28%, rgba(0, 0, 0, 0.25) 95.58%), url('/images/hero2.jpg')"
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
        </Flex>

        <Stack
          direction={{ lg: "row", md: "column", base: "column" }}
          justify={{ md: "space-between", base: "center" }}
          py={{ md: 14, base: 7 }}
        >
          <Stack
            alignSelf="center"
            spacing={{ md: 6, base: 6 }}
            width={{ lg: "50%", md: "100%", base: "100%" }}
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

          <Form />
        </Stack>
      </Stack>

      <Stack
        alignItems={{ lg: "center", md: "start", base: "none" }}
        p={{ md: 16, base: 8 }}
        spacing={{ lg: "none", md: 8, base: 8 }}
        justify={{ md: "space-around", base: "none" }}
        direction={{ lg: "row", base: "column-reverse" }}
      >
        <Stack
          justify="center"
          width={{ lg: "xl", md: "2xl", base: "100%" }}
          spacing={{ md: 6, base: 5 }}
          alignSelf={{ lg: "center", md: "start", base: "start" }}
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
        <Image
          display={{ md: "block", base: "none" }}
          borderRadius={{ md: "md", base: "md" }}
          alt="a girl cleaning"
          src="/images/fixing.jpg"
          width={{ lg: "40%", md: "100%", base: "none" }}
        ></Image>
      </Stack>

      <Stack
        spacing={{ lg: 0, md: 8, base: 0 }}
        alignItems={{ lg: "center", md: "start", base: "none" }}
        justify={{ md: "space-around", base: "none" }}
        px={{ md: 16, base: 8 }}
        direction={{ lg: "row", md: "column", base: "column" }}
      >
        <Image
          width={{ lg: "40%", md: "100%", base: "none" }}
          height={{ lg: "sm", md: "md", base: "none" }}
          borderRadius={{ md: "md", base: "lg" }}
          alt="washing dishes"
          src="/images/washing.jpg"
        ></Image>

        <Stack
          alignSelf={{ lg: "center", md: "start", base: "start" }}
          spacing={{ md: 6, base: 5 }}
          py={{ lg: 24, md: "none", base: 18 }}
          px={{ lg: 20, md: 0, base: 0 }}
          width={{ lg: "3xl", md: "2xl", base: "none" }}
          direction="column"
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
