import { Box } from '@chakra-ui/react';
import { Search } from '../Search/Search';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

export const Navbar = () => {
  return (
    <>
      <Box className="navbar-wrapper" h={{ base: "120px", md: "0px" }}>
        <Box pos="fixed" w="100%" bgColor="white" mb="1rem" zIndex={10}>
          <DesktopNav />
          <MobileNav />
        </Box>
      </Box>
    </>
  );
};