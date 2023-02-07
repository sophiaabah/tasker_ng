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
  FormControl,
  Icon,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState, useRef } from "react";
import ReactGA from "react-ga4";
import { useRouter } from "next/router";
import { HiCheck } from "react-icons/hi";
import { MdCheckCircle } from "react-icons/md";
import { IoIosArrowForward, IoPersonCircleSharp } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { HiThumbUp, HiThumbDown } from "react-icons/hi";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import Logo from "../../components/logo";
import {
  updateProvider,
  createProvider,
  uploadProfilePicture,
} from "../../lib/api";

const Form = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    national_id: "",
    location: "",
  });
  const [imgLoaded, setImgLoaded] = useState(false);
  const [photo, setPhoto] = useState();
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const imageInput = useRef();
  const router = useRouter();

  // function onSubmit(e) {
  //   e.preventDefault();
  //   // console.log("data:", { name, phone, location, email, tasks });
  //   handlerTest();

  //   // ReactGA.event({
  //   //   category: "lead",
  //   //   action: "generate_lead",
  //   // });
  // }

  function onFileChange(e) {
    const file = e.target.files[0];
    setPhoto(file);

    if (!window.FileReader) return;
    const fileReaderInstance = new FileReader();
    fileReaderInstance.readAsDataURL(file);

    fileReaderInstance.onloadend = (e) => {
      setImagePreviewUrl(e.target.result);
      setImgLoaded(true);
    };
  }

  async function onSubmit(e) {
    e.preventDefault();

    const imageUrl = await uploadProfilePicture(photo);
    console.log(imageUrl);
    const provider = await createProvider({
      ...formValues,
      imageUrl,
    });

    console.log(provider.insertedId);
    router.push(`/register/step-2?id=${provider.insertedId}`);
  }

  return (
    <Stack onSubmit={onSubmit} as="form" width="50%" spacing={10}>
      <Heading fontWeight={600} fontSize="21px">
        Fill in your information
      </Heading>
      <Stack spacing={7}>
        <Stack spacing={5} direction="row">
          <FormControl isRequired>
            <FormLabel fontSize="sm">Name</FormLabel>
            <Input
              bgColor="#F6F6F6"
              onChange={(e) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
              px={2}
              name="name"
              type="text"
              placeholder="John Obi"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="sm">Email address</FormLabel>
            <Input
              bgColor="#F6F6F6"
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
              px={2}
              type="email"
              placeholder="john@gmail.com"
            />
          </FormControl>
        </Stack>
        <Stack spacing={5} direction="row">
          <FormControl isRequired>
            <FormLabel fontSize="sm">Whatsapp</FormLabel>
            <Input
              bgColor="#F6F6F6"
              onChange={(e) =>
                setFormValues({ ...formValues, phone: e.target.value })
              }
              px={2}
              type="tel"
              placeholder="0123456789"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="sm">National Identity Number</FormLabel>
            <Input
              bgColor="#F6F6F6"
              onChange={(e) =>
                setFormValues({ ...formValues, national_id: e.target.value })
              }
              px={2}
              type="number"
              placeholder="4245-0696-3564"
            />
          </FormControl>
        </Stack>
        <Stack spacing={5} direction="row">
          <FormControl isRequired>
            <FormLabel fontSize="sm">Address</FormLabel>
            <Input
              bgColor="#F6F6F6"
              onChange={(e) =>
                setFormValues({ ...formValues, location: e.target.value })
              }
              px={2}
              name="Address"
              type="text"
              placeholder="Oluniyi Bakara 1, off Awolowo Road, Lagos."
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="sm">Upload a Photo</FormLabel>
            <Stack
              alignItems="center"
              justifyItems="start"
              role="button"
              onClick={() => imageInput.current.click()}
              direction="row"
              spacing={4}
              width="100%"
            >
              {imgLoaded ? (
                <div>
                  <Image
                    borderRadius="md"
                    boxSize={10}
                    objectFit="cover"
                    alt=""
                    src={imagePreviewUrl}
                  />
                </div>
              ) : (
                <Icon fontSize="26px" as={BsPersonCircle} marginRight />
              )}
              <Stack
                border="1px solid"
                borderRadius="md"
                borderColor="inherit"
                width="100%"
                bgColor="#F6F6F6"
                px={4}
                py="7.5px"
              >
                <Text color="chakra-placeholder-color">
                  {photo ? photo.name : "Click here to choose a file"}
                </Text>
              </Stack>
              <Input
                display="none"
                type="file"
                ref={imageInput}
                accept="image/*"
                onChange={(e) => onFileChange(e)}
              />
            </Stack>
          </FormControl>
        </Stack>
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
        <Stack mb={2} alignItems="center" spacing={8}>
          <Heading fontSize="30px">{"Let's get started."}</Heading>
          <Stack alignItems="center" spacing={6} direction="row">
            <Stack
              bgColor="#F1D1D1"
              borderRadius="4px"
              width="55px"
              height="45px"
              alignItems="center"
              justify="center"
            >
              <Text color="#822121" fontWeight={600} fontSize="1.25rem">
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
              bgColor="#EAD9D9"
              borderRadius="4px"
              width="48px"
              height="40px"
              alignItems="center"
              justify="center"
            >
              <Text color="#B0ABAB" fontWeight={600} fontSize="1rem">
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
