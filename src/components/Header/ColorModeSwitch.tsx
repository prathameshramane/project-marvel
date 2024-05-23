import { Flex, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorModeSwitch: React.FC = () => {
  const { colorMode, setColorMode } = useColorMode();

  const handleColorModeChanged = (isDarkMode: boolean) => {
    setColorMode(isDarkMode ? "dark" : "light");
  };

  return (
    <Flex gap={4} alignItems="center">
      <Text>Dark Mode</Text>
      <Switch
        id="email-alerts"
        size="lg"
        onChange={(e) => handleColorModeChanged(e.target.checked)}
        isChecked={colorMode === "dark"}
      />
    </Flex>
  );
};

export default ColorModeSwitch;
