import { Container, Text, VStack, Box, Button, Heading, Link } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="white" color="gray.800">
        <Box as="header" display="flex" justifyContent="space-between" alignItems="center" p={4} borderBottom="1px" borderColor="gray.200">
          <Heading as="h1" size="lg" color="brand.700">PoolFixPro</Heading>
          <Box as="nav">
            <Link href="#" p={2} color="brand.700" fontWeight="bold">Home</Link>
            <Link href="#" p={2} color="brand.700" fontWeight="bold">Services</Link>
            <Link href="#" p={2} color="brand.700" fontWeight="bold">About</Link>
            <Link href="#" p={2} color="brand.700" fontWeight="bold">Contact</Link>
          </Box>
        </Box>
        <VStack spacing={8} py={10} textAlign="center">
          <Heading as="h2" size="xl" fontWeight="bold" color="brand.800">Professional Pool Repair Services</Heading>
          <Text fontSize="lg" color="gray.600">We ensure your pool is always ready to dive in!</Text>
          <Button colorScheme="blue" size="lg">Get a Quote</Button>
        </VStack>
        <Box as="footer" p={4} borderTop="1px" borderColor="gray.200" textAlign="center">
          <VStack spacing={2}>
            <Text fontSize="sm" color="gray.600">© 2023 PoolFixPro. All rights reserved.</Text>
            <Box display="flex" justifyContent="center" alignItems="center">
              <FaPhone />
              <Text ml={2} fontSize="sm" color="gray.600">+123 456 7890</Text>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <FaEnvelope />
              <Text ml={2} fontSize="sm" color="gray.600">contact@poolfixpro.com</Text>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <FaMapMarkerAlt />
              <Text ml={2} fontSize="sm" color="gray.600">1234 Pool Street, Poolville</Text>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;