import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Text } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const prevScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (Math.abs(currentScrollY - prevScrollY.current) < 10) {
      return;
    }

    if (currentScrollY > prevScrollY.current) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }

    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      zIndex={2}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={isHeaderVisible ? 0 : "-100%"}
      opacity={isHeaderVisible ? 1 : 0}
      transition="translateY 0.5s ease-in-out, opacity 0.5s ease-in-out"
      backgroundColor={!isHeaderVisible ? "transparent" : "#18181b"}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack
              spacing={8}
              color={!isHeaderVisible ? "transparent" : "##FFFFFF"}
            >
              {socials.map((social) => (
                <a href={social.url} key={social.url}>
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack
              spacing={8}
              color={!isHeaderVisible ? "transparent" : "##FFFFFF"}
            >
              {/* Add links to Projects and Contact me section */}
              <a href="/#" onClick={handleClick("landing")}>
                <HStack>
                  <FontAwesomeIcon icon={faHome} size="lg" />
                  <Text fontSize={14} fontWeight="bold">
                    Home
                  </Text>
                </HStack>
              </a>
              <a href="#project-section" onClick={handleClick("projects")}>
                <HStack>
                  <FontAwesomeIcon icon={faBriefcase} size="lg" />
                  <Text fontSize={14} fontWeight="bold">
                    Projects
                  </Text>
                </HStack>
              </a>
              <a href="#contactme-section" onClick={handleClick("contactme")}>
                <HStack>
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  <Text fontSize={14} fontWeight="bold">
                    Contact Me
                  </Text>
                </HStack>
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
