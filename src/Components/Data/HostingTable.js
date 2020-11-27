import React from "react";
import { TableTitle, Table, Row, Data } from "./Style";

const HostingTable = (props) => {
  const data = props.data.results;
  const site = props.siteAddress;
  return (
    <div>
      <TableTitle>Данные хостинга: {site}</TableTitle>
      <ul>
        {data.map((tableObj, id) => (
          <li key={id}>
            <Table>
              {Object.keys(tableObj).map((key) => (
                <Row key={key}>
                  <Data>{key}</Data>
                  <Data>{tableObj[key]}</Data>
                </Row>
              ))}
            </Table>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HostingTable;
