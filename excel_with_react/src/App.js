import React from "react";
import {HotTable, HotColumn} from "@handsontable/react"
import { registerAllModules } from "handsontable/registry";
import { registerLanguageDictionary, esMX } from "handsontable/i18n";
import "handsontable/dist/handsontable.full.css"
import './App.css';


registerAllModules()
registerLanguageDictionary(esMX)

function App() {
  const [users, setUsers] = React.useState([])

  const hotTableComponent = React.useRef(null)

  React.useEffect(() => {
      function getData(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
      }
      getData();
  }, [])

  const downloadFile = () => {
    const pluginDownload = hotTableComponent.current.hotInstance.getPlugin("exportFile")

    pluginDownload.downloadFile("csv", {
      filename: "user",
      fileExtension: "csv",
      mimeType: "text/csv",
      columHeader: true,
    })
  }

  return (
    <div >
      <header >
        <h1>Excel in React</h1>
      </header>

      <button className="btn" onClick={() => downloadFile()}>Download File</button>
      {users && (
        <HotTable ref={hotTableComponent} language={esMX.languageCode} data={users} colSorting={true}
        licenseKey="non-commercial-and-evaluation" colHeaders={true} rowHeaders={true} mergeCell={true}
        contextMenu={["row_above", "row_below"]} readOnly={false}>
          <HotColumn data="id" readOnly={true} />
          <HotColumn data="name" title="Full Name" />
          <HotColumn data="username" title="Username" />
          <HotColumn data="email" />
          <HotColumn data="address.street" />
          <HotColumn data="address.city" />
        </HotTable>
      )}
    </div>
  );
}

export default App;
