import * as React from "react";
import styled from "styled-components";

import * as PolymorphicProps from "../../shared/polymorphic-props";

import { Color, Variant } from "./facade";

// ------------------------------------
// Props
// ------------------------------------

export type FeatureProps = {
  color: Color;
  variant: Variant;
};

export const DefaultElement = "button";

export type Props<
  Element extends React.ElementType = typeof DefaultElement,
  Props = Record<string, unknown>
> = PolymorphicProps.PolymorphicPropsWithRef<Props, Element>;

// ------------------------------------
// Component
// ------------------------------------

const Presentational = <
  Element extends React.ElementType = typeof DefaultElement
>(
  props: Props<Element, FeatureProps>
) => {
  const { children, color, variant, ...restProps } = props;

  switch (props.variant) {
    case "outlined":
      return (
        <Outlined {...restProps} color={color} variant={variant}>
          {children}
        </Outlined>
      );
    case "contained":
      return (
        <Contained {...restProps} color={color} variant={variant}>
          {children}
        </Contained>
      );
    case "text":
      return (
        <Text {...restProps} color={color} variant={variant}>
          {children}
        </Text>
      );
  }
};

export const Component: PolymorphicProps.PolymorphicMemoExoticComponent<
  FeatureProps,
  typeof DefaultElement
> = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

type BaseProps = {
  color: FeatureProps["color"];
  variant: FeatureProps["variant"];
};
const Base = styled.button<BaseProps>`
  padding: 12px 8px;
  border-radius: 6px;
  font-weight: bold;
  display: inline-block;
  :disabled {
    cursor: not-allowed;
    color: #b0bec5 !important;
    background-color: #263238 !important;
    border: 0 !important;
  }
`;

const Contained = styled(Base)`
  background-color: ${(props) => {
    switch (props.color) {
      case "primary":
        return "#CFD8DC";
      case "accent":
        return "#64FFDA";
    }
  }};
  &:hover {
    background-color: ${(props) => {
      switch (props.color) {
        case "primary":
          return "#B0BEC5";
        case "accent":
          return "#1DE9B6";
      }
    }};
  }
`;
const Outlined = styled(Base)`
  border: 3px solid
    ${(props) => {
      switch (props.color) {
        case "primary":
          return "#B0BEC5";
        case "accent":
          return "#00BFA5";
      }
    }};
  &:hover {
    background-color: ${(props) => {
      switch (props.color) {
        case "primary":
          return "#CFD8DC";
        case "accent":
          return "#64FFDA";
      }
    }};
  }
`;
const Text = styled(Base)`
  &:hover {
    background-color: ${(props) => {
      switch (props.color) {
        case "primary":
          return "#CFD8DC";
        case "accent":
          return "#64FFDA";
      }
    }};
  }
`;
