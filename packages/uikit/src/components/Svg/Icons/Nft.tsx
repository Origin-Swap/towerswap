import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <image width="24" height="24" href="/images/nft.png" />
  </Svg>
);

export default Icon;
