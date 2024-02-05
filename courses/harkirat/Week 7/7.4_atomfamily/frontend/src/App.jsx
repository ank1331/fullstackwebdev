import React, { useState, useEffect } from "react";
import axios from "axios";

async function fetchData() {
  const todobackendsedata = await axios.get("http://localhost:3000/todo");
  return todobackendsedata.data.finalval;
}

function YehmereTodo() {
  const [taskname, setTaskName] = useState("");
  const [descriptionname, setDescriptionName] = useState("");

  useEffect(() => {
    fetchData().then((data) => {
      setTaskName(data.task);
      setDescriptionName(data.description);
    });
  }, []);

  return (
    <>
      Hello
      <div>
        <b>Task: </b>
        {taskname}
      </div>
      <div>
        <b>Description: </b>
        {descriptionname}
      </div>
    </>
  );
}

export default YehmereTodo;
