import React from "react";
function Answer({ AddToAnswer, Count, SetCount }) {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch("https://63236caa5c1b43572795ad22.mockapi.io/Based")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      {users.length !== 0 ? (
        <div className="item item-1">
          {users[Count].map((answer) => {
            return (
              <div onClick={AddToAnswer} className="variant">
                <span className="span">{answer.key}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
}
export default Answer;
