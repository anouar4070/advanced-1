import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilePic from "../images/profile pic.jpg"

const greeting = "Hello, I am Anouar !";
const bio1 = "A Front-End developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} alignItems="center" textAlign="center">
      <Avatar size="xl" src={profilePic} />
      <Heading>{greeting}</Heading>
      <VStack spacing={2}>  {/* Nested VStack for bio lines */}
      <p  style={{fontSize: "1.7rem"}}>{bio1}</p>
        <p  style={{fontSize: "1.5rem"}}>{bio2}</p>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
