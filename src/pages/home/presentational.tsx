import * as React from "react";
import { Button, ButtonLazy } from "../../components/button";

// ------------------------------------
// props
// ------------------------------------

type Props = {};

// ------------------------------------
// component
// ------------------------------------

const Presentational = (props: Props) => {
  return (
    <div>
      <p>home</p>
      <Button color="primary" variant="contained">
        button
      </Button>

      <React.Suspense fallback={<div>loading component...</div>}>
        <ButtonLazy color="primary" variant="contained">
          buttonLazy
        </ButtonLazy>
      </React.Suspense>
    </div>
  );
};

export const Component = React.memo(Presentational);
