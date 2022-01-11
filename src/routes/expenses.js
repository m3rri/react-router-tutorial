import React from "react";

class Expenses extends React.Component {
  render(){
    console.log("---render---");
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Expenses</h2>
      </main>
    )
  }

  componentDidMount(){
    console.log("---componentDidMount---");
  }
}

export default Expenses;

// export default function Expenses() {
//     return (
//       <main style={{ padding: "1rem 0" }}>
//         <h2>Expenses</h2>
//       </main>
//     );
//   }