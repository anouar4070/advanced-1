import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      as="article"
      backgroundColor="white"
      borderRadius="md"
      boxShadow="md" 
      width="100%"
      p={0}
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <Box p={5}>
      <VStack spacing={2}>
        <Heading size="md" color="black">
          {title}
        </Heading>
        <Text as="p" color="black">
          {description}
        </Text>
      </VStack>
      <HStack justifyContent="flex-end">
        <Text as="a" href="#" color="black">
          Learn More{" "}
          <FontAwesomeIcon icon={faArrowRight} />
        </Text>
      </HStack>
      </Box>
    </Box>
  );
};

export default Card;
