import Loadable from "react-loadable";
import Loading from "./Loading";

const AsyncItemListHeader = Loadable({
  loader: () => import("./index").then((m) => m.ItemListHeader),
  loading: Loading,
});

const AsyncItemListFilters = Loadable({
  loader: () => import("./index").then((m) => m.ItemListFilters),
  loading: Loading,
});

const AsyncItemListTable = Loadable({
  loader: () => import("./index").then((m) => m.ItemListTable),
  loading: Loading,
});

export { AsyncItemListHeader, AsyncItemListFilters, AsyncItemListTable };
