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

export default function App() {
  return (
    <Stack spacing={8}>
      <Head>
        <title>Welcome to Tasker</title>
      </Head>
      <Flex px={{ md: 0, base: 6 }} direction="row" pt={{ md: 12, base: 5 }}>
        <Spacer />
        <ButtonGroup
          colorScheme="tasker_red"
          spacing={6}
          paddingRight={{ md: 8, base: "none" }}
        >
          <Button px={{ md: 7, base: 5 }}>
            <Text fontWeight={600} fontSize={{ md: "1.2rem", base: "0.95rem" }}>
              Sign up
            </Text>
          </Button>
        </ButtonGroup>
      </Flex>
      <Center>
        <Stack
          pt={{ md: 8, base: 1.5 }}
          pb={{ md: 20, base: 2 }}
          maxW={{ md: "container.md" }}
          direction="column"
          spacing={{ md: 8, base: 9 }}
        >
          <Heading
            px={{ md: 0, base: 4 }}
            textAlign="center"
            fontWeight={800}
            fontSize={{ lg: "5rem", base: "2.9rem" }}
            letterSpacing={{ lg: 1.2 }}
          >
            Start making the <span style={{ color: "#B95050" }}>most</span> of
            your time.
          </Heading>
          <Text
            px={{ md: 0, base: 4 }}
            textAlign="center"
            fontWeight={400}
            fontSize={{ md: "2xl", base: "xl" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit
            arcu, bibendum et libero integer ut. Non nisl turpis gravidiso
            nileqa sinudori.
          </Text>
          <Stack
            px={{ md: 0, base: "0.3rem" }}
            pt={{ md: 6, base: 3 }}
            direction="row"
            spacing={2}
            justifyContent={{ md: "center", base: "center" }}
          >
            <Wrap
              spacing={{ md: 3, base: 2.5 }}
              width={{ md: "120%" }}
              justify={{ md: "center", base: "center" }}
            >
              {arrOfTasks.map((task, index) => (
                <WrapItem key={index}>
                  <Button
                    variant="outline"
                    px={{ md: 7, base: 5 }}
                    py={{ md: 5, base: 2 }}
                    border="2px"
                    colorScheme="tasker_green"
                    fontWeight={500}
                    fontSize={{ md: "1.175rem", base: "0.98rem" }}
                    borderRadius={{ md: "xl", base: "0.8rem" }}
                  >
                    <Text color="black">{task}</Text>
                  </Button>
                </WrapItem>
              ))}
            </Wrap>
          </Stack>
        </Stack>
      </Center>

      <Stack
        px={{ md: 0, base: 6 }}
        backgroundColor={{ md: "#F8F8F8", base: "none" }}
        direction={{ lg: "row", md: "column", base: "column" }}
      >
        <Image
          borderRadius={{ md: "none", base: "lg" }}
          alt="a girl cleaning"
          src="/images/cleaning.jpg"
        ></Image>

        <Stack
          spacing={{ md: 8, base: 5 }}
          py={{ md: 24, base: 18 }}
          px={{ md: 20, base: 0 }}
          direction="column"
        >
          <Heading
            fontSize={{ md: "4xl", base: "3xl" }}
            fontWeight={{ md: 600, base: 500 }}
          >
            Everyday life made easier
          </Heading>
          <Text fontSize={{ md: "1.4rem", base: "xl" }} fontWeight={400}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit
            arcu, bibendum et libero integer ut. Non nisl turpis gravid
          </Text>
          <List
            pt={{ base: 2, md: 0 }}
            fontSize={{ md: "1.35rem", base: "xl" }}
            fontWeight={400}
            spacing={{ md: 2, base: 6 }}
          >
            <ListItem>
              <ListIcon as={HiCheck} />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon as={HiCheck} />
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
          </List>
        </Stack>
      </Stack>

      <Box px={{ md: 12, base: 6 }} py={{ lg: 4, md: 14, base: "none" }}>
        <Stack
          spacing={{ lg: "none", md: 10, base: 8 }}
          align="start"
          justify="space-between"
          px={{ md: 16, base: 6 }}
          py={{ md: 16, base: 10 }}
          borderRadius="xl"
          backgroundColor="tasker_sorbet.900"
          direction={{ lg: "row", md: "column", base: "column" }}
        >
          <Stack
            spacing={{ lg: "none", md: 8, base: 5 }}
            direction="column"
            width={{ lg: "40%", md: "100%", sm: "100%" }}
          >
            <Heading
              fontWeight={{ md: 600, base: 500 }}
              fontSize={{ md: "4xl", base: "3xl" }}
            >
              Start making the most of your time.
            </Heading>
            <Text fontSize={{ md: "1.35rem", base: "1.18rem" }}>
              Simply insert your name, address and phone number and we will
              provide you with a list of verified taskers to choose from.
            </Text>
          </Stack>
          <Stack fontSize="xl" spacing={4}>
            <Stack direction={{ md: "row", base: "column" }} spacing={6}>
              <FormControl>
                <FormLabel fontSize="lg" htmlFor="Full name">
                  Full name
                </FormLabel>
                <Input
                  backgroundColor="white"
                  height={12}
                  id="Full name"
                  type="text"
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="lg" htmlFor="Phone number">
                  Phone number
                </FormLabel>
                <Input
                  backgroundColor="white"
                  height={12}
                  id="Phone number"
                  type="number"
                />
              </FormControl>
            </Stack>

            <FormControl>
              <FormLabel fontSize="lg" htmlFor="Address">
                Address
              </FormLabel>
              <Input
                backgroundColor="white"
                height={12}
                id="Address"
                type="text"
              />
            </FormControl>

            <Text fontSize="lg" pt={3}>
              What services do you need?
            </Text>
            <Stack
              alignItems={{ md: "none", base: "space-between" }}
              spacing={3}
            >
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

            <Text pt={4} pb={4} fontSize={{ md: "lg", base: "md" }}>
              By clicking sign up, you agree to the{" "}
              <chakra.span fontWeight={600}>Terms and Conditions</chakra.span>{" "}
              and <chakra.span fontWeight={600}>privacy policy</chakra.span>.
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
      </Box>
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
