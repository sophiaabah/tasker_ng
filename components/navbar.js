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
    </Stack>
  );
}
