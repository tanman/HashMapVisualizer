import React from "react";

// functional component, may take only one (usually optional) parameter, and is usually called a prop
// almost everything should be a functional components

// a general rule of thumb is to keep components short, as in <100 lines
// all jsx expressions must be wrapped in a single element, no multiple divs for a single component
const name = "tanman";
const SayHello = props => {
  if (props.show) {
    return <div>Hello again {name}!</div>;
  } else {
    return <div />;
  }
};

// example js you can use in curly braces for jsx:
// variables
// arithmetic expressions
// string concatenation
// ternary operator
// short-circuit && logic
// call a function that returns a value

export default SayHello;
