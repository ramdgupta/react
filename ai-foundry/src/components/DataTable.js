import { MDBDataTable } from "mdbreact";
/* import { useState } from "react";
import "./DataTable.css";
import { useEffect } from "react";
export default function DataTable(props) {
  console.log(props.columns);
  console.log(props.rows)
  return (
    <MDBDataTable
      bordered
      small
      data={{rows:props.rows,columns:props.columns}}
      paging={false}
      searchLabel={props.label}
      hover
    />
  );
} */

import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import "./DataTable.css";

import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faCirclePlay,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
export default function DataTable(props) {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const gridRef = useRef(); // Optional - for accessing Grid's API

  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));
  const [columnDefs, setColumnDefs] = useState([]);

  // Example of consuming Grid Event
  const cellClickedListener = useCallback((event) => {
    console.log("cellClicked", event);
  }, []);

  // Example using Grid's API
  const buttonListener = useCallback((e) => {
    gridRef.current.api.deselectAll();
  }, []);
  //<FontAwesomeIcon icon={faPenToSquare} />
  useEffect(() => {
    const columnArr = [...props.columns];
    if (props.onEdit || props.onDeploy || props.onDelete) {
      columnArr.push({
        field: "Action",
        width: 150,
        cellRenderer: ({ onEdit, onDeploy, onDelete, data }) => {
          return (
            <div className="grid-option text-left">
              {onEdit && (
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  title="Edit"
                  style={{cursor:"pointer"}}
                  className="mx-1 mt-1 mr-2 blue-grid-icon edit-icon"
                  onClick={() => onEdit(data)}
                />
              )}
              {onDeploy && (
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  style={{cursor:"pointer"}}
                  title="Deploy"
                  className="mx-1 mt-1 mr-2 blue-grid-icon edit-icon"
                  onClick={() => onDeploy(data)}
                />
              )}
              {onDelete && (
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{cursor:"pointer"}}
                  title="Delete"
                  className="mx-0 mt-1 mr-2 blue-grid-icon edit-icon"
                  onClick={() => onDelete(data)}
                />
              )}
            </div>
          );
        },
        cellRendererParams: {
          onEdit: (data) => props.onEdit(data),
          onDeploy: (data) => props.onDeploy(data),
          onDelete: (data) => props.onDelete(data),
        },
      });
    }
    setColumnDefs(columnArr);
  }, []);

  const onGridSizeChanged = useCallback(
    (params) => {
      // get the current grids width
      var gridWidth = document.querySelector(".ag-body-viewport").clientWidth;
      // keep track of which columns to hide/show
      var columnsToShow = [];
      var columnsToHide = [];
      // iterate over all columns (visible or not) and work out
      // now many columns can fit (based on their minWidth)
      var totalColsWidth = 0;
      var allColumns = params.api.getColumns();
      if (allColumns && allColumns.length > 0) {
        for (var i = 0; i < allColumns.length; i++) {
          var column = allColumns[i];
          totalColsWidth += column.getMinWidth();
          if (totalColsWidth > gridWidth) {
            columnsToHide.push(column.getColId());
          } else {
            columnsToShow.push(column.getColId());
          }
        }
      }
      // show/hide columns based on current grid width
      params.api.setColumnsVisible(columnsToShow, true);
      params.api.setColumnsVisible(columnsToHide, false);
      // wait until columns stopped moving and fill out
      // any available space to ensure there are no gaps
      window.setTimeout(() => {
        params.api.sizeColumnsToFit();
      }, 10);
    },
    [window]
  );

  return (
    <div style={containerStyle}>
      <div id="grid-wrapper" style={{ width: "100%", height: "100%" }}>
        <div style={gridStyle} className="ag-theme-quartz">
          <AgGridReact
            ref={gridRef} // Ref for accessing Grid's API
            rowData={props.rows} // Row Data for Rows
            columnDefs={columnDefs} // Column Defs for Columns
            defaultColDef={defaultColDef} // Default Column Properties
            animateRows={true} // Optional - set to 'true' to have rows animate when sorted
            // rowSelection={{mode: 'singleRow'}} // Options - allows click selection of rows
            onCellClicked={props.onCellClicked} // Optional - registering for Grid Event
            onSelectionChanged={(event) => console.log("Row Selected!")}
            onCellValueChanged={(event) =>
              console.log(`New Cell Value: ${event.value}`)
            }
            onGridSizeChanged={onGridSizeChanged}
            pagination={true}
            paginationPageSizeSelector={[5, 10, 20, 50, 100]}
            paginationPageSize={5}
            domLayout={"autoHeight"}
            onRowClicked={props.onRowClicked}
          />
        </div>
      </div>
    </div>
  );
}
