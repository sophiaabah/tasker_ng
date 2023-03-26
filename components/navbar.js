import { Button, Stack } from "@chakra-ui/react";
import Logo from "components/logo";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  return (
    <Stack
      position="sticky"
      // ml={3}
      top={0}
      px={{ lg: 8, base: 4 }}
      direction="row"
      height="72px"
      alignItems="center"
      bgColor="white"
      width="100%"
      justify="space-between"
      zIndex={1}
    >
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <Stack
        spacing={4}
        alignItems="center"
        direction="row"
        justifySelf="flex-end"
      >
        <Button
          bgColor="primary.50"
          color="primary.600"
          _hover={{
            bgColor: "primary.100",
            color: "primary.600",
          }}
          _active={{
            bgColor: "primary.100",
            color: "primary.600",
          }}
          fontWeight={500}
          fontSize={{ lg: "sm", base: "xs" }}
          onClick={() => router.push("/taskers/register/step-1")}
        >
          Become a Tasker
        </Button>
        <Button
          colorScheme="primary"
          py={0}
          fontWeight={500}
          display={{ lg: "block", md: "block", base: "none" }}
          fontSize={{ lg: "sm", md: "sm", base: "xs" }}
          onClick={() => router.push("/customer/new")}
        >
          Find a Tasker
        </Button>
      </Stack>
    </Stack>
  );
}
