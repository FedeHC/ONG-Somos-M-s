import React from "react";
import { Box, chakra, Container, Stack,
         Link, Text, Image,
         useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import { PUBLIC_LINKS, SOCIAL_LINKS } from "../publicLinks/PublicLinks";


const SocialButton = ({ children, label, href, }) => {
  return (
    <chakra.button bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  rounded={'full'}
                  w={8}
                  h={8}
                  cursor={'pointer'}
                  as={'a'}
                  href={href}
                  display={'inline-flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  transition={'background 0.3s ease'}
                  _hover={{
                    bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
                  }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
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
        <Image src={process.env.REACT_APP_ENDPOINT_NGO_LOGO}
                 w="100px"
                 alt="Logo Somos Más" />

        {/* PUBLIC LINKS */}
        <Stack direction={'row'} spacing={6}>
          {PUBLIC_LINKS.map( (publicLink) =>
            <Link href={publicLink.href}>{publicLink.label}</Link>
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
            {SOCIAL_LINKS.map( (socialLink) =>
              <span style={{backgroundColor:"#19375f", borderRadius:"20px"}}>
                <SocialButton label={socialLink.label}
                              href={socialLink.href}>
                  {socialLink.component}
                </SocialButton>
              </span>
            )}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default PublicFooter;
