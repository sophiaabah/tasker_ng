import {
  Box,
  Flex,
  Image,
  Center,
  Spacer,
  Input,
  HStack,
  Button,
  Text,
  Stack,
  Heading,
  VStack,
  Grid,
  GridItem,
  ButtonGroup,
  IconButton,
  Container,
  chakra,
} from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ST } from "next/dist/shared/lib/utils";

export default function App() {
  return (
    <>
      <Stack direction={row}>
        <ButtonGroup>
          <Button
            display={{ base: "none" /*, md: "none", lg: "block" */ }}
            variant="ghost"
          >
            Become a tasker
          </Button>
          <Button>Sign up</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction={column}>
        <Text>
          Make the <span style={{ color: "#B95050" }}>most</span> of your time
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit arcu,
          bibendum et libero integer ut. Non nisl turpis gravidiso nileqa
          sinudori.
        </Text>
        <Stack direction={row} spacing={2}>
          <div>Cleaning</div>
        </Stack>
      </Stack>
      <Stack direction={row}>
        <Image alt="a girl cleaning"></Image>
        <Stack direction={column}>
          <Text>Everyday life made easier</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit
            arcu, bibendum et libero integer ut. Non nisl turpis gravid
          </Text>
        </Stack>
      </Stack>
      <Stack direction={row}>
        <Stack direction={column}>
          <Text>Thinking of offering your services?</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit
            arcu, bibendum et libero integer ut. Non nisl turpis gravid
          </Text>
          <Button>Become a Tasker</Button>
        </Stack>
        <Image alt="an illustration with money"></Image>
      </Stack>
      <Stack direction={row}>
        <Stack direction={column}>
          <Text>Join our mailing list</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit
            arcu, bibendum et libero integer ut. Non nisl turpis gravid
          </Text>
        </Stack>
        <Stack direction={column}>
          <Stack direction={row}>
            <Input></Input>
            <Input></Input>
          </Stack>
          <Input></Input>
          <Text>What services do you need?</Text>
          <Stack></Stack>
          <Text>
            By clicking sign up, you agree to the Terms and Conditions and
            privacy policy.
          </Text>
          <Button>Sign up</Button>
        </Stack>
      </Stack>
    </>
  );
}
