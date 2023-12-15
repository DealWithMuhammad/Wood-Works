import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrollingDown = prevScrollPos < currentScrollPos;

    setVisible(!(isScrollingDown && currentScrollPos > 100)); // Adjust the threshold as needed
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <Box className="navbar-wrapper" h={{ base: "120px", md: "0px" }}>
        <Box
          pos="fixed"
          bgColor={"white"}
          w="100%"
          top={visible ? "0" : "-100px"} // Adjust the value based on the height of your navbar
          transition="top 0.3s ease-in-out"
          zIndex={10}
        >
          <DesktopNav />
          <MobileNav />
        </Box>
      </Box>
    </>
  );
};
