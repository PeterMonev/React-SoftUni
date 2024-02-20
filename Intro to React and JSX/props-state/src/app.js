const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// const headingElement = React.createElement('h1', {}, 'Hello from React');
// const secondHeadingElement = React.createElement('h2', {}, 'Some slogan here')
// const headerElement = React.createElement('header', {}, headingElement,secondHeadingElement);


//User JSX syntax:

const headerElement = (
    <div>
      <header className="headerConteiner">
        <h1 className="heading">Hello from React</h1>
        <h2>Sloga here</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ex, fugiat ea minima obcaecati id distinctio a alias consequuntur sapiente.</p>
       </header>

       <button>Clike me!</button>
    </div>
);

root.render(headerElement);