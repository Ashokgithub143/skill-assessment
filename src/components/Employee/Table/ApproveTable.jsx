/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import "./ApproveTable.css";
import { data } from "../../../constants/ApproveEmployeeData";
import {svgCode,svgCodeBarOnly,} from "../../../constants/ApproveEmployeeData";
import ViewResult from "../ViewResult/ViewResult";
import Reject from '@mui/icons-material/HighlightOff';
import Approve from '@mui/icons-material/CheckCircleOutline';

const EmployeeAssessmentTable = () => {
  const [selectedPopup, setSelectedPopup] = useState(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isDisplayPopup, setIsDisplayPopup] = useState(false);
  const [selectedViewResultPopup, setViewResultSelectedPopup] = useState(null);
  const [isViewResultOverlayVisible, setIsViewResultOverlayVisible] =useState(false);
  const [sortedData, setSortedData] = useState(data);
  const [approvedRows, setApprovedRows] = useState([]);
  const [rejectedRows, setRejectedRows] = useState([]);
  const [rowsToRemove, setRowsToRemove] = useState([]);
  const [rowHeight, setRowHeight] = useState(null);
  const [deletedRows, setDeletedRows] = useState([]);




  const iconSize = 26;

  const approveIconStyle = {
    color: '#42D38B',
    fontSize: iconSize, 
  };

  const rejectIconStyle = {
    color: '#FCA5A5',
    fontSize: iconSize, 
  };
  
  const iconSpacing = {
    marginRight: '16px', 
  };

  const handleApproveClick = (index) => {
    const updatedApprovedRows = [...approvedRows, index];
    setApprovedRows(updatedApprovedRows);
  
    const updatedData = sortedData.map((row, rowIndex) => {
      if (rowIndex === index) {
        setRowHeight(0);
        setTimeout(() => {
          setDeletedRows((prevDeletedRows) => [...prevDeletedRows, index]);
          setRowHeight(null);
        }, 2000);
        return { ...row, status: "APPROVED" };
      }
      return row;
    });
  
    setSortedData(updatedData);
  };
  
  const handleRejectClick = (index) => {
    const updatedRejectedRows = [...rejectedRows, index];
    setRejectedRows(updatedRejectedRows);
  
    const updatedData = sortedData.map((row, rowIndex) => {
      if (rowIndex === index) {
        setRowHeight(0);
        setTimeout(() => {
          setDeletedRows((prevDeletedRows) => [...prevDeletedRows, index]);
          setRowHeight(null);
        }, 2000);
        return { ...row, status: "REJECTED" };
      }
      return row;
    });
  
    setSortedData(updatedData);
  };
  
  

  const handleViewResultButtonClick = (index, buttonRef) => {
    setIsDisplayPopup(true);
    setViewResultSelectedPopup(index);
    setIsViewResultOverlayVisible(true);
  };


  const handleButtonClick = (index, buttonRef) => {
    setSelectedPopup(index);
    const buttonRect = buttonRef.getBoundingClientRect();
    const buttonX = buttonRect.left;
    const buttonY = buttonRect.bottom;
    const popups = document.querySelectorAll(".popup");
    popups.forEach((popup, popupIndex) => {
      if (popupIndex === index) {
        popup.style.left = buttonX + "px";
        popup.style.top = buttonY + "px";
        popup.style.display = "block";
      } else {
        popup.style.display = "none";
      }
    });
    setIsOverlayVisible(true);
  };


  const viewResultClosePopup = () => {
    setViewResultSelectedPopup(null);
    setIsViewResultOverlayVisible(false);
  };


  const closePopup = () => {
    setSelectedPopup(null);
    setIsOverlayVisible(false);
    setViewResultSelectedPopup(null);
    setIsOverlayVisible(false);
  };


  const [sortConfigDepartment, setSortConfigDepartment] = useState({
    key: null,
    direction: "ascending",
  });


  const [sortConfigLevel, setSortConfigLevel] = useState({
    key: null,
    direction: "ascending",
  });


  const [sortConfigStatus, setSortConfigStatus] = useState({
    key: null,
    direction: "ascending",
  });

  const sortData = (data, key, direction) => {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });
    return sortedData;
  };

  const handleSortClick = (key, sortConfig, setSortConfig) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sortedDataCopy = sortData(data, key, direction);
    setSortedData(sortedDataCopy);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);
  const rowsPerPageOptions = [10, 15, 20];
  const tableHeight =
  rowHeight !== null
    ? `${rowHeight * (currentRows.length - rowsToRemove.length)}px`
    : 'auto';


  return (
    <div>
    <table className="table-sm-p1 border" style={{ height: tableHeight }}>
        <thead>
          <tr>

            <th id="table-td">
              <span className="table-Head-Data">Employee Name & ID</span>
              <div
                className="svg-container"
                dangerouslySetInnerHTML={{ __html: svgCode }}
              ></div>
            </th>

            <th
              id="table-td"
              onClick={() =>
                handleSortClick(
                  "Department",
                  sortConfigDepartment,
                  setSortConfigDepartment
                )
              }
              style={{ cursor: "pointer" }}
            >
              <span className="table-Header-Data">Department</span>
              <div
                className="svg-container"
                dangerouslySetInnerHTML={{ __html: svgCode }}
              ></div>
            </th>

            <th
              id="table-td"
              onClick={() =>
                handleSortClick("Level", sortConfigLevel, setSortConfigLevel)
              }
              style={{ cursor: "pointer" }}
            >
              <span className="table-Header-Data">Level</span>
              <div
                className="svg-container"
                dangerouslySetInnerHTML={{ __html: svgCode }}
              ></div>
            </th>

            <th id="table-td">
              <span className="table-Head-Data">Assessment ID</span>
              <div
                className="svg-container"
                dangerouslySetInnerHTML={{ __html: svgCodeBarOnly }}
              ></div>
            </th>

            <th id="table-td" colSpan={2} style={{ paddingRight: "100 " }}>
              <span style={{ position: "relative", top: "10px" }}>
                No. of topics
              </span>
              <div
                className="svg-container"
                dangerouslySetInnerHTML={{ __html: svgCodeBarOnly }}
              ></div>
            </th>
            
            <th id="table-td">
              <span className="table-Head-Data">Requested on</span>
              <div
                className="svg-container"
                dangerouslySetInnerHTML={{ __html: svgCodeBarOnly }}
              ></div>
            </th>

            <th id="table-td">
              <span className="table-Head-Data">Details</span>
              <div
                className="svg-container"
                dangerouslySetInnerHTML={{ __html: svgCode }}
              ></div>
            </th>

            <th id="table-td" colSpan={2} style={{ paddingRight: "100 " }}>
              <span style={{ position: "relative", top: "10px" }}>
                Decision
              </span>
              <div
                className="svg-container"
                dangerouslySetInnerHTML={{ __html: svgCodeBarOnly }}
              ></div>
            </th>
            
            <th id="table-td">
              <span className="table-Head-Data">More</span>
              <div
                className="svg-container"
               
              ></div>
              </th>


            {/* <th
              id="table-td"
              onClick={() =>
                handleSortClick("Status", sortConfigStatus, setSortConfigStatus)
              }
              style={{ cursor: "pointer" }}
            >
              <span className="table-Header-Data">Status</span>
              <div
                className="svg-container"
                dangerouslySetInnerHTML={{ __html: svgCode }}
              ></div>
            </th> */}

          </tr>
        </thead>



        
        <tbody>
        {sortedData.map((row, index) => (
  <tr
    key={index}
    className={`${
      approvedRows.includes(index)
        ? 'approved-row'
        : rejectedRows.includes(index)
        ? 'rejected-row'
        : ''
    } ${deletedRows.includes(index) ? 'deleted-row' : ''}`}
    style={{ height: rowHeight ? `${rowHeight}px` : 'auto' }}
  >
              <td scope="row">
                <div className="employee-name-container">
                  {" "}
                  <img className="employee-image" src={row.Emp_img}></img>
                  <span className="employee-name">{row.Emp_Name}</span>
                  <br></br>
                  <span className="employee-id">{row.Emp_id}</span>
                </div>
              </td>

              <td>{row.Department}</td>

              <td>{row.Level}</td>

              <td>{row.Assessment_ID}</td>

              <td colSpan={2}>{row.No_of_topics}</td>

              <td>{row.Requested_on}</td>

              
              <td>
                <button
                  className="view-result"
                  id={`viewbutton${index}`}
                  onClick={(event) =>
                    handleViewResultButtonClick(index, event.currentTarget)
                  }
                >
                  {row.Results}
                </button>
                {isViewResultOverlayVisible &&
                  selectedViewResultPopup === index && (
                    <div className="viewpopupx">
                      <button
                        className="view-Popup-Close-Button"
                        onClick={viewResultClosePopup}
                      ></button>
                      <div className="viewresult-Container">
                        <ViewResult></ViewResult>
                      </div>
                    </div>
                  )}
              </td>

              <td>
                {approvedRows.includes(index) ? (
                  <div className="approved-cell">APPROVED</div>
                ) : rejectedRows.includes(index) ? (
                  <div className="rejected-cell">REJECTED</div>
                ) : (
                  <div>
                    <Approve style={{ ...approveIconStyle, ...iconSpacing }} onClick={() => handleApproveClick(index)} />
                    <Reject style={rejectIconStyle} onClick={() => handleRejectClick(index)} />
                  </div>
                )}
              </td>


              <td>
                <button
                  className="action-Button"
                  id={`button${index}`}
                  onClick={(event) =>
                    handleButtonClick(index, event.currentTarget)
                  }>
                  <div
                    className="svg-container1"
                  >EDIT</div>
                </button>
              </td>

              {approvedRows.includes(index) && (
                <td className="overlay-text">Approved</td>
              )}
              {rejectedRows.includes(index) && (
                <td className="overlay-text1">Rejected</td>
              )}


            </tr>
          ))}
        </tbody>
      </table>
      {isOverlayVisible && <div className="overlayx" onClick={closePopup} />}
      {isViewResultOverlayVisible && (
        <div className="overlayxy" onClick={viewResultClosePopup} />
      )}



      <div className="pagination">
        <span>Rows per page:</span>
        <select
          value={rowsPerPage}
          onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
        >
          {rowsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="pagination-page">
          <Pagination
            count={Math.ceil(data.length / rowsPerPage)}
            page={currentPage}
            onChange={(event, page) => setCurrentPage(page)}
            shape="rounded"
            boundaryCount={2}
            defaultPage={1}
            size="small"
          />
        </div>
      </div>



    </div>
  );
};
export default EmployeeAssessmentTable;
