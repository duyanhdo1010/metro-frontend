/* eslint-disable no-unused-vars */
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the Data Grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the Data Grid
import { useMemo } from 'react';

function Table({ data, columns }) {
  const defaultColDef = useMemo(
    () => ({
      // filter: true,
      floatingFilter: true,
      sort: true,
      flex: 1
    }),
    []
  );

  return (
    <div
      className="ag-theme-quartz" // applying the Data Grid theme
      style={{ flex: 1 }}>
      <AgGridReact
        rowData={data}
        columnDefs={columns}
        style={{ width: '100%', height: '100%' }}
        defaultColDef={defaultColDef}
        pagination={true}
      />
    </div>
  );
}

export default Table;
