import React from "react";
import { TableTitle, Table, Row, Data } from "./Style";

const TechTable = (props) => {
  const data = props.data.results;
  const site = props.siteAddress;
  return (
    <div>
      <TableTitle>Технологии: {site}</TableTitle>
      <ul>
        {data.map((tableObj, id) => (
          <li key={id}>
            <Table>
              {Object.keys(tableObj).map((key) => (
                <Row key={key}>
                  <Data>{key}</Data>
                  <Data>
                    {Array.isArray(tableObj[key])
                      ? tableObj[key].join(", ")
                      : tableObj[key]}
                  </Data>
                </Row>
              ))}
            </Table>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechTable;
