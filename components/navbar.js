import { Button, Stack, Container } from "@chakra-ui/react";
import Logo from "components/logo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <Stack
      px={{ lg: 8, base: 4 }}
      py={{ base: 4, sm: 0 }}
      pb={{ sm: 12 }}
      direction="row"
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

      <Stack spacing={4} alignItems="center" direction="row" justifySelf="flex-end">
        <Link href="/taskers/register/step-1" passHref>
          <Button
            as="a"
            fontWeight={500}
            bgColor="primary.50"
            color="primary.600"
            fontSize={{ lg: "sm", base: "xs" }}
            _hover={{
              bgColor: "primary.100",
              color: "primary.600",
            }}
            _active={{
              bgColor: "primary.100",
              color: "primary.600",
            }}
          >
            Become a Tasker
          </Button>
        </Link>

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
