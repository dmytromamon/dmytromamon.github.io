import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Router,
  Route,
  IndexRoute
} from 'react-router'
import {
  createHashHistory
} from 'history';

var i;
var menuStatus = 0;
const menuLinks = ['home', 'about', 'contact']

function handleClick(e) {
  e.preventDefault();
  if (menuStatus == 0) {
    var menuList = menuLinks.map(function(name, index){
      return <li key={'mykey' + index}>
        <a href="#">{name}</a>
      </li>;
    })

    function createLinks() {
      for (i = 0; i < menuLinks.length; i++) {
        return <ul>{menuList}</ul>
      }
    }

    const menu = (
      <div className="menu">
        {createLinks()}
      </div>
    )

    ReactDOM.render(
      menu,
      document.getElementById('menu')
    )
  
    var tl = new TimelineMax();
    tl.from($('.menu'), 1, {
      ease: Power3.easeOut,
      opacity: 0,
      top: 20
    }, 0)
  
    menuStatus = 1;
  } else {
    const menu = (
      <div className="menu"></div>
    )
  
    var tl = new TimelineMax();
    tl.to($('.menu'), 1, {
      ease: Power3.easeOut,
      opacity: 0,
      top: -20
    }, 0)
    
    setTimeout(function(){
      ReactDOM.unmountComponentAtNode(
        document.getElementById('menu')
      )
    }, 1000)
    
    menuStatus = 0;
  }
}

const element = (
  <div>
    <h1>Hello, this is the simple header</h1>
    <button onClick={handleClick}>Open menu</button>
  </div>
)

ReactDOM.render(
  element,
  document.getElementById('root')
)