import { AsyncSettingsPage } from "./loadable_demo/AsyncSettingsPage";
import {
  AsyncItemListHeader,
  AsyncItemListFilters,
  AsyncItemListTable,
} from "./loadable_demo/item-list/async";
const App = () => {
  return (
    <div>
      <AsyncSettingsPage />
      <AsyncItemListHeader />
      <AsyncItemListFilters />
      <AsyncItemListTable />
    </div>
  );
};

export default App;
