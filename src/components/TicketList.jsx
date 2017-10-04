import React from "react";
import Ticket from "./Ticket";

var masterTicketList = [
  {
    names: "Lincoln & Lincoln",
    location: "Seattle",
    issue: "Firebase won't save"
  },
  {
    names: "Sam & Sam",
    location: "Auburn",
    issue: "React won't work"
  },
  {
    names: "Krystal & Krystal",
    location: "Kent",
    issue: "Program won't start"
  }
];

function TicketList(props){
  return(
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) =>
      <Ticket names={ticket.names}
              location={ticket.location}
              issue={ticket.issue}
              key={index}/>
      )}
    </div>
  );
}

export default TicketList;
