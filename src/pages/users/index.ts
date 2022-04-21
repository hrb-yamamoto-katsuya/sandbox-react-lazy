import { lazy } from "react";

// import Page from "./page";

// export const Component = Page;
export const Component = lazy(() => import("./page"));
