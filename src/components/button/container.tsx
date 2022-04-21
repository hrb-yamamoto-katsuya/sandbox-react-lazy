import * as React from "react";

import * as Presentational from "./presentational";

// ------------------------------------
// Props
// ------------------------------------

type FeatureProps = {};

// ------------------------------------
// Component
// ------------------------------------

const Button = <
  Element extends React.ElementType = typeof Presentational.DefaultElement
>(
  props: Presentational.Props<
    Element,
    Presentational.FeatureProps & FeatureProps
  >
): JSX.Element => {
  return <Presentational.Component {...props} />;
};

export default Button;
