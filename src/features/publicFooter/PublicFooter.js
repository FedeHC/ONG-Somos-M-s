import React from "react";
import Logo from "../assets/images/logo-ngo.png";
import { Box, Container, Stack,
         Button, Text, Image, Link,
         useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import { PUBLIC_LINKS, SOCIAL_LINKS } from "../publicLinks/PublicLinks";
import { Link as ReachLink } from "react-router-dom";


const SocialButton = ({ href, label, logo }) => {
  return (
    <Link // as={ReachLink}
          href={href}
          isExternal>
      <Button bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
              // as={"a"}
              rounded={'full'}
              w={12}
              h={12}
              cursor={'pointer'}
              display={'inline-flex'}
              alignItems={'center'}
              justifyContent={'center'}
              transition={'background 0.3s ease'}
              _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
              }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {logo}
      </Button>
    </Link>
  );
};

const PublicFooter = () => {
  return (
    <Box bg={"#00214d"}
         color={"white"}
         pt={10}
         pb={10}>
      <Container as={Stack}
                 maxW={'6xl'}
                 py={4}
                 spacing={4}
                 justify={'center'}
                 align={'center'}>

        {/* LOGO */}
        <Image src={Logo}
               w="100px"
               alt="Logo Somos Más" />

        {/* PUBLIC LINKS */}
        <Stack direction={'row'} spacing={6}>
          {PUBLIC_LINKS.map((publicLink, index) =>
            <ReachLink key={index}
                       to={publicLink.href}>{publicLink.label}</ReachLink>
           )}
        </Stack>
      </Container>

      <Box mt={10}>
        <Container as={Stack}
                   borderTopWidth={1}
                   borderStyle={'solid'}
                   borderColor={'gray'}
                   maxW={'6xl'}
                   py={4}
                   direction={{ base: 'column', md: 'row' }}
                   spacing={4}
                   justify={{ base: 'center', md: 'space-between' }}
                   align={{ base: 'center', md: 'center' }}>

          {/* COPYRIGHT */}
          <Text>© 2021 Somos Más.</Text>

          <Stack direction={'row'}
                 spacing={6}>

            {/* SOCIAL LINKS */}
            {SOCIAL_LINKS.map((socialLink, index) =>
              <span key={index}
                    style={{backgroundColor:"#19375f", borderRadius:"20px"}}>
                <SocialButton label={socialLink.label}
                              href={socialLink.href}
                              logo={socialLink.component} />
              </span>
            )}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default PublicFooter;
