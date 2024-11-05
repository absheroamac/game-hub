import { Grid, GridItem } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg={"coral"}>
        Nav
      </GridItem>

      <Show>
        <GridItem area={"aside"} bg={"yellow"}>
          Aside
        </GridItem>
      </Show>

      <GridItem area={"main"} bg={"red"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
