import { useState, useRef } from "react";
import Head from "next/head";
import Api from "lib/api";
import Logo from "components/logo";
import { useRouter } from "next/router";
import {
  chakra,
  Container,
  Input,
  Button,
  Text,
  Stack,
  Heading,
  Divider,
  FormLabel,
  FormControl,
  Center,
  Icon,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { HiCheck } from "react-icons/hi";
import { FiCircle } from "react-icons/fi";

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

export default function RegisterPage() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
  });

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setHasError(false);
      const { name, phone, email, location } = formValues;

      const { data } = await Api.post(`/customer`, {
        name,
        address: location,
        task: selectedTasks.join(", "),
        phone,
      });
      console.log("customer", data.insertedId);

      router.push(`/customer/${data.insertedId}`);
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

      <Stack mt={{ lg: 14, base: 6 }} spacing={16} alignItems="center">
        <Container px={{ lg: 0, md: 10, base: 10 }} maxW="container.md">
          <Stack></Stack>
          <Heading fontWeight={600} fontSize="xl" mb={6}>
            Tell us about you
          </Heading>

          <Stack as="form" onSubmit={onSubmitForm} mt={2} spacing={4}>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: 4, md: 6 }}
            >
              <FormControl isRequired>
                <FormLabel fontSize="sm">Name</FormLabel>
                <Input
                  name="name"
                  type="text"
                  placeholder="John Obi"
                  value={formValues.name}
                  onChange={(e) =>
                    setFormValues({ ...formValues, name: e.target.value })
                  }
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="sm">Whatsapp</FormLabel>
                <Input
                  type="tel"
                  placeholder="08012345678"
                  value={formValues.phone}
                  onChange={(e) =>
                    setFormValues({ ...formValues, phone: e.target.value })
                  }
                />
              </FormControl>
            </Stack>

            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: 4, md: 6 }}
            >
              <FormControl isRequired>
                <FormLabel fontSize="sm">Home Address</FormLabel>
                <Input
                  name="address"
                  type="text"
                  placeholder="Oluniyi Bakare 1, off Awolowo Road, Lagos."
                  value={formValues.location}
                  onChange={(e) =>
                    setFormValues({ ...formValues, location: e.target.value })
                  }
                />
              </FormControl>
            </Stack>

            <chakra.section>
              <Heading mt={6} mb={4} fontWeight={600} fontSize="lg">
                What services do you need?
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
                      color={
                        selectedTasks.includes(task) ? "#BD5B5B" : "#828282"
                      }
                      leftIcon={
                        selectedTasks.includes(task) ? (
                          <HiCheck />
                        ) : (
                          <FiCircle />
                        )
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
                type="submit"
                fontWeight={400}
                isLoading={isLoading}
                colorScheme="primary"
                rightIcon={<IoIosArrowForward />}
              >
                Continue
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
