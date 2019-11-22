import * as React from "react";
import { useContext } from "react";
import { Text as RNText } from "react-native";

import { TextProps } from "./text.type";
import { getStyle } from "./text.style";
import { ThemeContext } from "../../theme";

const Text: React.FunctionComponent<TextProps> = props => {
  const {
    w,
    h,
    bg,
    flex,
    minH,
    minW,
    color,
    fontSize,
    children,
    textAlign,
    fontWeight,
    lineHeight,
    letterSpacing,
    textTransform,
    textDecorColor,
    textDecorStyle,
    style,
    ...rest
  } = props;
  const theme = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);

  return (
    <RNText style={computedStyle.text} {...rest}>
      {children}
    </RNText>
  );
};

Text.defaultProps = {
  color: "gray900",
  textAlign: "auto",
  textTransform: "none",
  fontSize: "text400"
};

export { Text };
