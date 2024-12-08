// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Logoipsum248SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Logoipsum248SvgIcon(props: Logoipsum248SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 78 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M55.5 0h22l-19 32h-22l19-32z"}
        className={"ccustom"}
        fill={"#FF7A00"}
      ></path>

      <path
        d={"M35.5 0h16l-19 32h-16l19-32z"}
        className={"ccompli1"}
        fill={"#FF9736"}
      ></path>

      <path
        d={"M19.5 0h12l-19 32H.5l19-32z"}
        className={"ccompli2"}
        fill={"#FFBC7D"}
      ></path>
    </svg>
  );
}

export default Logoipsum248SvgIcon;
/* prettier-ignore-end */
