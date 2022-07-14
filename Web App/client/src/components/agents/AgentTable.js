import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Search from "./searchAgent";

function unique(arr) {
  const uniqueIds = new Set();

  const unique = arr.filter((element) => {
    const isDuplicate = uniqueIds.has(element.Agent_ID);

    uniqueIds.add(element.Agent_ID);
    if (!isDuplicate) {
      return true;
    }
    return false;
  });

  return unique;
}

function AgentTable({ agents }) {
  let navigate = useNavigate();
  const [filteredAgents, setFilteredAgents] = useState(unique(agents));
  const rowClickHAndler = (id) => {
    navigate(`agentDetails/${id}`);
  };

  useEffect(() => {
    setFilteredAgents(unique(agents));
  }, [agents]);

  const searchHandler = (text) => {
    let searched = unique(agents).filter((agent) => {
      return (
        (agents ? agent.Agent_Name.toLowerCase() : null) +
        (agents ? agent.Agent_ID.toString() : null) +
        (agents ? agent.Phone_NO.toString() : null)
      )
        .trim()
        .includes(text.toLowerCase().trim());
    });
    // console.log(searched);
    if (text !== "") {
      setFilteredAgents(searched);
    } else {
      setFilteredAgents(unique(agents));
    }
  };

  return (
    <>
      <Container>
        <Search search={searchHandler} />
        <Container>
          <Table responsive hover>
            <thead>
              <tr>
                <th>Agent_ID</th>
                <th>Agent Name</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {filteredAgents.map((agent) => {
                return (
                  <tr
                    onClick={() => {
                      rowClickHAndler(agent.Agent_ID);
                    }}
                    key={agent.Agent_ID}
                  >
                    <td>{agent.Agent_ID}</td>
                    <td>{agent.Agent_Name}</td>
                    <td>{agent.Phone_NO}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </Container>
    </>
  );
}

export default AgentTable;
