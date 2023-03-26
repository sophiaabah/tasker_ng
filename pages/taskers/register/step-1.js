import { useState, useRef } from "react";
import Head from "next/head";
import Api from "lib/api";
import { useRouter } from "next/router";
import {
  chakra,
  Container,
  Image,
  Input,
  Button,
  Text,
  Stack,
  Heading,
  Divider,
  FormLabel,
  FormControl,
  Icon,
  Center,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";

export default function RegisterPage() {
  const router = useRouter();

  const filePickerRef = useRef();
  const [file, setFile] = useState();
  const [filePreviewUrl, setPreviewUrl] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    national_id: "",
    location: "",
  });

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setFile(file);
    setPreviewUrl(previewUrl);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setHasError(false);

      // upload profile picture
      const formData = new FormData();
      formData.append("photo", file);
      const photoUploadResponse = await Api.post("/photo/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const photoUrl = photoUploadResponse.data.url;

      // create provider
      const createProviderResponse = await Api.post("/provider", {
        ...formValues,
        photo: photoUrl,
      });

      const providerId = createProviderResponse.data.insertedId;
      router.push(`/taskers/register/step-2?providerId=${providerId}`);
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

      <Stack mt={8} spacing={16} alignItems="center">
        <Stack mb={2} alignItems="center" spacing={6}>
          <Heading fontSize="30px">Let&apos;s get started</Heading>

          <Stack
            alignItems="center"
            spacing={6}
            direction="row"
            divider={<Divider w="32px" h="1px" bgColor="gray.400" />}
          >
            <Center
              w={14}
              py={2}
              bgColor="red.100"
              rounded="md"
              color="red.800"
            >
              <Text fontWeight={600} fontSize="lg">
                1
              </Text>
            </Center>

            <Center
              w={14}
              py={2}
              bgColor="red.100"
              rounded="md"
              color="red.800"
              opacity={0.5}
            >
              <Text fontWeight={600} fontSize="lg">
                2
              </Text>
            </Center>

            <Center
              w={14}
              py={2}
              bgColor="red.100"
              rounded="md"
              color="red.800"
              opacity={0.5}
            >
              <Text fontWeight={600} fontSize="lg">
                3
              </Text>
            </Center>
          </Stack>
        </Stack>

        <Container px={{ lg: 0, md: 10, base: 10 }} maxW="container.md">
          <Heading fontWeight={600} fontSize="xl">
            Fill in your information
          </Heading>

          <Stack as="form" onSubmit={onSubmitForm} mt={6} spacing={4}>
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
                <FormLabel fontSize="sm">Address</FormLabel>
                <Input
                  name="address"
                  type="text"
                  placeholder="Oluniyi Bakara 1, off Awolowo Road, Lagos."
                  value={formValues.location}
                  onChange={(e) =>
                    setFormValues({ ...formValues, location: e.target.value })
                  }
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="sm">National Identity Number</FormLabel>
                <Input
                  type="number"
                  placeholder="4245-0696-3564"
                  value={formValues.national_id}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      national_id: e.target.value,
                    })
                  }
                />
              </FormControl>
            </Stack>

            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: 4, md: 6 }}
            >
              <FormControl isRequired>
                <FormLabel fontSize="sm">Profile photo</FormLabel>

                <Stack
                  role="button"
                  direction="row"
                  alignItems="center"
                  spacing={4}
                  onClick={() => filePickerRef.current.click()}
                >
                  {file ? (
                    <chakra.div w={12}>
                      <Image
                        rounded="full"
                        boxSize={10}
                        objectFit="cover"
                        alt={file.name}
                        src={filePreviewUrl}
                        onLoad={() => {
                          URL.revokeObjectURL(file.preview);
                        }}
                      />
                    </chakra.div>
                  ) : (
                    <Icon fontSize="3xl" as={BsPersonCircle} marginRight />
                  )}

                  <Stack
                    px={4}
                    h={10}
                    flexGrow="1"
                    borderRadius="md"
                    border="1px solid"
                    borderColor="inherit"
                    justifyContent="center"
                  >
                    <Text noOfLines={1} color="chakra-placeholder-color">
                      {file ? file.name : "Click here to choose a file"}
                    </Text>
                  </Stack>

                  <Input
                    ref={filePickerRef}
                    display="none"
                    type="file"
                    accept="image/*"
                    multiple={false}
                    onChange={onFileChange}
                  />
                </Stack>
              </FormControl>

              <chakra.div w="full" />
            </Stack>

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
                w={{ base: "full", md: "auto" }}
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
