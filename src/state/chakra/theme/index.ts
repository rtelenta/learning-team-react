import { extendTheme, theme } from "@chakra-ui/react";
import styles from "./styles";
import config from "./config";

const overrides = {
  styles,
  config,
  fonts: {
    body: `'Oswald',-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: "'Oswald', sans-serif",
  },
};

export default extendTheme(overrides, theme);
