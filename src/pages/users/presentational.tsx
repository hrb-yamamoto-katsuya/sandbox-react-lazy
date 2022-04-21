import * as React from "react";

// ------------------------------------
// props
// ------------------------------------

type Props = {};

// ------------------------------------
// component
// ------------------------------------

const Presentational = (props: Props) => {
  return <div>users</div>;
};

export const Component = React.memo(Presentational);
