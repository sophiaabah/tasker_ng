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
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  FormControl,
  Icon,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { useRouter } from "next/router";
import { HiCheck } from "react-icons/hi";
import { FiCircle } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import Logo from "../../components/logo";
import {
  updateProvider,
  createProvider,
  uploadProfilePicture,
} from "../../lib/api";

const tasksArray = [
  "Cleaning",
  "Shopping",
  "Laundry",
  "Cooking",
  "Plumbing",
  "Electrician",
  "Mechanic",
  "Carpentry",
];

const defaultValuePrice = [5000, 12000];

const Form = () => {
  const [tasks, setTasks] = useState([]);
  const [availability_time, setAvailabilityTime] = useState([]);
  const [priceRange, setPriceRange] = useState(defaultValuePrice);

  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();
    let price_range = priceRange.join(" - ");
    const providerStatus = await updateProvider(
      {
        tasks,
        availability_time,
        price_range,
      },
      router.query.id
    );
    router.push(`/register/step-3?id=${router.query.id}`);

    console.log(providerStatus);
  }

  return (
    <Stack onSubmit={onSubmit} as="form" width="container.sm" spacing={8}>
      <Stack spacing={5}>
        <Heading fontWeight={600} fontSize="20px">
          What services do you offer?
        </Heading>
        <div>
          {tasksArray.map((taskFromArray, index) => {
            return (
              <Button
                key={index}
                marginRight={3.5}
                marginY={1}
                bgColor="#F4F4F4"
                color={tasks.includes(taskFromArray) ? "#BD5B5B" : "#828282"}
                border={
                  tasks.includes(taskFromArray) ? "2px solid #BD5B5B" : "none"
                }
                fontSize={tasks.includes(taskFromArray) ? "16px" : "10px"}
                leftIcon={
                  tasks.includes(taskFromArray) ? <HiCheck /> : <FiCircle />
                }
                _hover={{ bgColor: "#F0F0F0" }}
                _active={{ bgColor: "#F0F0F0" }}
                onClick={() => {
                  tasks.includes(taskFromArray)
                    ? setTasks(tasks.filter((task) => task !== taskFromArray))
                    : setTasks(tasks.concat(taskFromArray));
                }}
              >
                <Text fontWeight={400} fontSize="md">
                  {taskFromArray}
                </Text>
              </Button>
            );
          })}
        </div>
      </Stack>

      <Stack spacing={5}>
        <Heading fontWeight={600} fontSize="20px">
          Availability
        </Heading>
        <div>
          <Checkbox
            marginRight={3.5}
            marginY={1}
            isChecked={availability_time.includes("Monday")}
            onChange={(e) => {
              e.target.checked
                ? setAvailabilityTime(availability_time.concat("Monday"))
                : setAvailabilityTime(
                    availability_time.filter((day) => day !== "Monday")
                  );
            }}
            value="Monday"
          >
            <Text fontSize={{ md: "16.5px", base: "sm" }}>Monday</Text>
          </Checkbox>
          <Checkbox
            marginRight={3.5}
            marginY={1}
            isChecked={availability_time.includes("Tuesday")}
            onChange={(e) => {
              e.target.checked
                ? setAvailabilityTime(availability_time.concat("Tuesday"))
                : setAvailabilityTime(
                    availability_time.filter((day) => day !== "Tuesday")
                  );
            }}
            value="Tuesday"
          >
            <Text fontSize={{ md: "16.5px", base: "sm" }}>Tuesday</Text>
          </Checkbox>
          <Checkbox
            marginRight={3.5}
            marginY={1}
            isChecked={availability_time.includes("Wednesday")}
            onChange={(e) => {
              e.target.checked
                ? setAvailabilityTime(availability_time.concat("Wednesday"))
                : setAvailabilityTime(
                    availability_time.filter((day) => day !== "Wednesday")
                  );
            }}
            value="Wednesday"
          >
            <Text fontSize={{ md: "16.5px", base: "sm" }}>Wednesday</Text>
          </Checkbox>
          <Checkbox
            marginRight={3.5}
            marginY={1}
            isChecked={availability_time.includes("Thursday")}
            onChange={(e) => {
              e.target.checked
                ? setAvailabilityTime(availability_time.concat("Thursday"))
                : setAvailabilityTime(
                    availability_time.filter((day) => day !== "Thursday")
                  );
            }}
            value="Thursday"
          >
            <Text fontSize={{ md: "16.5px", base: "sm" }}>Thursday</Text>
          </Checkbox>
          <Checkbox
            marginRight={3.5}
            marginY={1}
            isChecked={availability_time.includes("Friday")}
            onChange={(e) => {
              e.target.checked
                ? setAvailabilityTime(availability_time.concat("Friday"))
                : setAvailabilityTime(
                    availability_time.filter((day) => day !== "Friday")
                  );
            }}
            value="Friday"
          >
            <Text fontSize={{ md: "16.5px", base: "sm" }}>Friday</Text>
          </Checkbox>
          <Checkbox
            marginRight={3.5}
            marginY={1}
            isChecked={availability_time.includes("Saturday")}
            onChange={(e) => {
              e.target.checked
                ? setAvailabilityTime(availability_time.concat("Saturday"))
                : setAvailabilityTime(
                    availability_time.filter((day) => day !== "Saturday")
                  );
            }}
            value="Saturday"
          >
            <Text fontSize={{ md: "16.5px", base: "sm" }}>Saturday</Text>
          </Checkbox>
          <Checkbox
            marginRight={3.5}
            marginY={1}
            isChecked={availability_time.includes("Sunday")}
            onChange={(e) => {
              e.target.checked
                ? setAvailabilityTime(availability_time.concat("Sunday"))
                : setAvailabilityTime(
                    availability_time.filter((day) => day !== "Sunday")
                  );
            }}
            value="Sunday"
          >
            <Text fontSize={{ md: "16.5px", base: "sm" }}>Sunday</Text>
          </Checkbox>
          <Checkbox
            marginRight={3.5}
            marginY={1}
            isChecked={availability_time.includes("No public holidays")}
            onChange={(e) => {
              e.target.checked
                ? setAvailabilityTime(
                    availability_time.concat("No public holidays")
                  )
                : setAvailabilityTime(
                    availability_time.filter(
                      (day) => day !== "No public holidays"
                    )
                  );
            }}
            value="No public holidays"
          >
            <Text fontSize={{ md: "16.5px", base: "sm" }}>
              No public holidays
            </Text>
          </Checkbox>
        </div>
      </Stack>
      <Stack spacing={8}>
        <Heading fontWeight={600} fontSize="20px">
          Give a price range for your services
        </Heading>
        <RangeSlider
          width="lg"
          aria-label={["min", "max"]}
          defaultValue={defaultValuePrice}
          min={1000}
          max={30000}
          step={1000}
          onChangeEnd={(val) => setPriceRange(val)}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack bgColor="#76B1E7" />
          </RangeSliderTrack>
          <RangeSliderThumb
            bgColor="blue.400"
            // boxShadow="1px 1px 1px #828282"
            index={0}
          />
          <RangeSliderThumb
            bgColor="blue.400"
            // boxShadow="1px 1px 1px #828282"
            index={1}
          />
        </RangeSlider>
        <Text color="#828282">{`Your profile will show ₦ ${priceRange[0]} - ₦ ${priceRange[1]}`}</Text>
      </Stack>

      <Button
        rightIcon={<IoIosArrowForward />}
        alignSelf="flex-end"
        borderRadius="10px"
        px={5}
        py={4}
        bgColor="#BD5B5B"
        color="white"
        fontWeight={400}
        type="submit"
      >
        Continue
      </Button>
    </Stack>
  );
};

export default function RegisterPage() {
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
      <Stack spacing={16} alignItems="center">
        <Stack alignItems="center" spacing={5}>
          <Heading fontSize="30px">{"Let's get started."}</Heading>
          <Stack alignItems="center" spacing={6} direction="row">
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
              bgColor="#F1D1D1"
              borderRadius="4px"
              width="55px"
              height="45px"
              alignItems="center"
              justify="center"
            >
              <Text color="#822121" fontWeight={600} fontSize="1.25rem">
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
              bgColor="#EAD9D9"
              borderRadius="4px"
              width="48px"
              height="40px"
              alignItems="center"
              justify="center"
            >
              <Text color="#B0ABAB" fontWeight={600} fontSize="1rem">
                3
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Form />
      </Stack>
    </>
  );
}
