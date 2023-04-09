import Head from "next/head";
import Api from "lib/api";
import { useState } from "react";
import {
  Container,
  Center,
  Button,
  Text,
  Stack,
  Heading,
  Checkbox,
  Divider,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  chakra,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { HiCheck } from "react-icons/hi";
import { FiCircle } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

const tasksOptions = [
  "Cleaning",
  "Shopping",
  "Laundry",
  "Cooking",
  "Plumbing",
  "Electrician",
  "Mechanic",
  "Carpentry",
];
const availablityOptions = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
  "Public holidays",
];

export default function RegisterPage() {
  const router = useRouter();

  const [selectedTasks, setSelectedTasks] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [priceRange, setPriceRange] = useState([5000, 25000]);

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onSubmit = async () => {
    const { providerId } = router.query;
    if (!providerId) return;

    try {
      setIsLoading(true);
      setHasError(false);

      await Api.put(`/provider/${providerId}`, {
        tasks: selectedTasks,
        availability_time: availability,
        price_range: priceRange.join("-"),
      });

      router.push(`/taskers/register/step-3?providerId=${providerId}`);
    } catch (e) {
      setHasError(true);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <meta name="description" content="Everyday life made easier" />
        <title>Tasker | Everyday life made easier </title>
      </Head>

      <Stack mt={8} spacing={8} alignItems="center">
        <Stack mb={2} alignItems="center" spacing={6}>
          <Heading fontSize={{ lg: "30px", base: "20px" }}>
            Let&apos;s get started
          </Heading>

          <Stack
            alignItems="center"
            spacing={6}
            direction="row"
            divider={<Divider w="32px" h="1px" bgColor="gray.400" />}
          >
            <Center
              w={{ lg: 14, base: 8 }}
              py={{ lg: 2, base: 1 }}
              bgColor="red.100"
              rounded="md"
              color="red.800"
              opacity={0.5}
            >
              <Text fontWeight={600} fontSize={{ lg: "lg", base: "md" }}>
                1
              </Text>
            </Center>

            <Center
              w={{ lg: 14, base: 8 }}
              py={{ lg: 2, base: 1 }}
              bgColor="red.100"
              rounded="md"
              color="red.800"
            >
              <Text fontWeight={600} fontSize={{ lg: "lg", base: "md" }}>
                2
              </Text>
            </Center>

            <Center
              w={{ lg: 14, base: 8 }}
              py={{ lg: 2, base: 1 }}
              bgColor="red.100"
              rounded="md"
              color="red.800"
              opacity={0.5}
            >
              <Text fontWeight={600} fontSize={{ lg: "lg", base: "md" }}>
                3
              </Text>
            </Center>
          </Stack>
        </Stack>

        <Container px={{ lg: 0, md: 10, base: 10 }} maxW="container.md">
          <chakra.section mb={10}>
            <Heading mb={4} fontWeight={600} fontSize="xl">
              What services do you offer?
            </Heading>

            <chakra.div>
              {tasksOptions.map((task) => {
                return (
                  <Button
                    my={1}
                    mr={3.5}
                    key={task}
                    fontWeight="400"
                    border="2px solid"
                    textTransform="capitalize"
                    bgColor="hsl(0deg 0% 96%)"
                    _hover={{ bgColor: "hsl(0deg 0% 94%)" }}
                    _active={{ bgColor: "hsl(0deg 0% 92%)" }}
                    color={selectedTasks.includes(task) ? "#BD5B5B" : "#828282"}
                    leftIcon={
                      selectedTasks.includes(task) ? <HiCheck /> : <FiCircle />
                    }
                    borderColor={
                      selectedTasks.includes(task) ? "#BD5B5B" : "transparent"
                    }
                    onClick={() => {
                      selectedTasks.includes(task)
                        ? setSelectedTasks(
                            selectedTasks.filter((t) => t !== task)
                          )
                        : setSelectedTasks(selectedTasks.concat(task));
                    }}
                  >
                    {task}
                  </Button>
                );
              })}
            </chakra.div>
          </chakra.section>

          <chakra.section mb={10}>
            <Heading mb={4} fontWeight={600} fontSize="xl">
              Which days are you available?
            </Heading>

            <chakra.div>
              {availablityOptions.map((day) => (
                <Checkbox
                  my={1}
                  mr={4}
                  key={day}
                  value={day}
                  fontSize="sm"
                  textTransform="capitalize"
                  colorScheme="primary"
                  isChecked={availability.includes(day)}
                  onChange={(e) => {
                    e.target.checked
                      ? setAvailability(availability.concat(day))
                      : setAvailability(availability.filter((d) => d !== day));
                  }}
                >
                  {day}
                </Checkbox>
              ))}
            </chakra.div>
          </chakra.section>

          <chakra.section mb={10}>
            <Heading mb={4} fontWeight={600} fontSize="xl">
              Give a price range for your services
            </Heading>

            <chakra.div mx={1}>
              <RangeSlider
                aria-label="min-max"
                min={1000}
                max={30000}
                step={1000}
                value={priceRange}
                onChange={(val) => setPriceRange(val)}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack bgColor="#76B1E7" />
                </RangeSliderTrack>

                <RangeSliderThumb index={0} bgColor="blue.400" />
                <RangeSliderThumb index={1} bgColor="blue.400" />
              </RangeSlider>

              <Text color="gray.500" fontSize="sm" mt={2}>
                From ₦{Intl.NumberFormat().format(priceRange[0])} to ₦
                {Intl.NumberFormat().format(priceRange[1])}
              </Text>
            </chakra.div>
          </chakra.section>

          <Stack
            direction={{ base: "column-reverse", md: "row" }}
            justifyContent="flex-end"
            alignItems="center"
            spacing={{ base: 2, md: 6 }}
            py={{ base: 4, md: 0 }}
          >
            {hasError && (
              <Text color="red.700">
                Something went wrong. Please try again
              </Text>
            )}

            <Button
              px={6}
              fontWeight={400}
              isLoading={isLoading}
              colorScheme="primary"
              onClick={() => onSubmit()}
              w={{ base: "full", md: "auto" }}
              rightIcon={<IoIosArrowForward />}
            >
              Continue
            </Button>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
