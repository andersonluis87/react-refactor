import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import TableOriginal from "./components/TableOriginal/TableOriginal";
import issues from "./data/issues.json";

function App() {
  return (
    <Tabs>
      <TabList>
        <Tab>Original</Tab>
        <Tab>New Data Structure</Tab>
        <Tab>Use Derived State</Tab>
        <Tab>No document.getElementById()</Tab>
        <Tab>Final</Tab>
      </TabList>

      <TabPanel>
        <TableOriginal issues={issues} />
      </TabPanel>
    </Tabs>
  );
}
export default App;
