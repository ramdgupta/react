import React from "react";
import styled from "styled-components";
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #f4f4f4;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  vertical-align: top;
`;

const MainVersionCell = styled(Td)`
  background-color: #f0f8ff;
  font-weight: bold;
`;

const Nestedtable = ({ data }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <Th>Main Version</Th>
            <Th>Subversion</Th>
            <Th>Description</Th>
            <Th>What's New</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((main, mainIndex) => (
            <React.Fragment key={mainIndex}>
              {main.subVersions.map((sub, subIndex) => (
                <tr key={subIndex}>
                  {/* Render the main version cell only for the first subversion row */}
                  {subIndex === 0 ? (
                    <MainVersionCell rowSpan={main.subVersions.length}>
                      {main.mainVersion}
                    </MainVersionCell>
                  ) : null}
                  <Td>{sub.version}</Td>
                  <Td>{sub.description}</Td>
                  <Td>{sub.newfeature}</Td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Nestedtable;
