import React from "react";
import { NextPage } from "next";
import { Button, useMantineTheme } from "@mantine/core";

const Home: NextPage = () => {
  const theme = useMantineTheme();

  console.log("theme => ", theme);

  return (
    <div>
      <Button>Mantine Button</Button>
    </div>
  );
};

export default Home;
