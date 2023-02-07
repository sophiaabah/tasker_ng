import { Heading, chakra } from "@chakra-ui/react";

export default function Logo() {
  return (
    <chakra.div
      px={5}
      py={1}
      borderTopEndRadius="md"
      borderBottomEndRadius="md"
      bgColor="grey"
    >
      <Heading
        alignSelf="center"
        pl={1}
        color="rgb(255 255 255 / 95%)"
        fontSize="2xl"
      >
        T<chakra.span color="tasker_green.300">ask</chakra.span>er
        <chakra.span color="tasker_green.300">Now</chakra.span>
      </Heading>
    </chakra.div>
  );
}
