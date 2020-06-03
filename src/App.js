import React, { useState } from "react";
import { FormClose, Notification } from "grommet-icons";
import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext } from "grommet";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <AppBar>
              Hello Grommet!
              <Heading level="3" margin="none">
                My App
              </Heading>
              <Button icon={<Notification />} onClick={() => setShowSideBar(!showSideBar)} />
            </AppBar>
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Box flex align="center" justify="center">
                app body
              </Box>
              {!showSideBar || size !== "small" ? (
                <Collapsible direction="horizontal" open={showSideBar}>
                  <Box flex width="medium" background="light-2" elecation="small" align="center" justify="center">
                    sidebar
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box background="light-2" tag="header" justify="end" align="center" direction="row">
                    <Button icon={<FormClose />} onClick={() => setShowSideBar(false)} />
                  </Box>
                  <Box fill background="light-2" align="center" justify="center">
                    sidebar
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default App;
