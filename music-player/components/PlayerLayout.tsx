import { Box } from "@chakra-ui/layout";
import Sidebar from "./Sidebar";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" left="0" top="0" width="250px">
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box left="0" bottom="0" position="absolute">
        Player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
