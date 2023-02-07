import { Heading, chakra } from "@chakra-ui/react";

export default function Logo() {
  return (
    <chakra.div px={5} py={1} borderTopEndRadius="md" borderBottomEndRadius="md" bgColor="grey" w="auto">
      <Heading alignSelf="center" pl={1} color="rgb(255 255 255 / 95%)" fontSize="2xl">
        T<chakra.span color="accent.300">ask</chakra.span>er
        <chakra.span color="accent.300">Now</chakra.span>
      </Heading>
    </chakra.div>
  );
}
