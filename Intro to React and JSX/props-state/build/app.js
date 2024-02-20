var rootElement = document.getElementById("root");
var root = ReactDOM.createRoot(rootElement);

// const headingElement = React.createElement('h1', {}, 'Hello from React');
// const secondHeadingElement = React.createElement('h2', {}, 'Some slogan here')
// const headerElement = React.createElement('header', {}, headingElement,secondHeadingElement);


//User JSX syntax:

var headerElement = React.createElement(
  "div",
  null,
  React.createElement(
    "header",
    { className: "headerConteiner" },
    React.createElement(
      "h1",
      { className: "heading" },
      "Hello from React"
    ),
    React.createElement(
      "h2",
      null,
      "Sloga here"
    ),
    React.createElement(
      "p",
      null,
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ex, fugiat ea minima obcaecati id distinctio a alias consequuntur sapiente."
    )
  ),
  React.createElement(
    "button",
    null,
    "Clike me!"
  )
);

root.render(headerElement);