import React, { useState } from "react";

function Todo() {
  const [inputValue, setInputValue] = useState();
  //   console.log(inputValue);
  const [list, setList] = useState([]);
  //   console.log(list);

  const submitValue = () => {
    // setList([...list, inputValue]);
    // console.log(list);

    setList((list) => {
      const updatedList = [...list, inputValue];
      console.log(updatedList);
      setInputValue("");
      return updatedList;
    });
  };

  const removeValue = (i) => {
    const updatedlist = list.filter((elem, id) => {
      return i !== id;
    });
    setList(updatedlist);
  };

  return (
    <div>
      <h2>Todo</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        style={{ margin: "1em" }}
        onClick={submitValue}
        disabled={!inputValue}
      >
        Add
      </button>
      <div>
        {list &&
          list.map((item, i) => {
            return (
              <>
                {" "}
                <h3 key={i}>
                  {item}
                  <span style={{ marginLeft: "1em" }}>
                    <button
                      onClick={() => {
                        removeValue(i);
                      }}
                    >
                      Remove
                    </button>
                  </span>
                </h3>
              </>
            );
          })}
      </div>
      <div>
        {list.length > 0 && (
          <button onClick={() => setList([])}>Remove All</button>
        )}
      </div>
    </div>
  );
}

export default Todo;
