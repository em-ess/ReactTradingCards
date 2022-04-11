'use strict';

function Homepage() {
  return (
  <div>
    <p>Welcome to a boring site for cards...</p>
    <a href="/cards">Click me to see cards</a>
    <img src="/static/img/balloonicorn.jpg" />
  </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
