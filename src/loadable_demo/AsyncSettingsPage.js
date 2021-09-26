import Loadable from "react-loadable";
import Loading from "./loading";

const AsyncSettingsPage = Loadable({
  loader: () => import("./SettingsPage" /* webpackChunkName: "settings" */),
  loading: Loading,
});

export { AsyncSettingsPage };
