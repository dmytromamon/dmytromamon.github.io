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

const skills = ['Creativity', 'Design', 'Development'];
var i = 0;
    
function tick() {
  const element = (
    <div>
      <h1>I propose a combination of multiple expertise: <span className="skillName">{skills[i]}</span></h1>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
  var tl = new TimelineMax();
  tl.fromTo($('.skillName'), .5, {
    ease: Power3.easeOut,
    opacity: 0,
    top: 20
  }, {
    ease: Power3.easeOut,
    opacity: 1,
    top: 0
  }, 0)
  tl.to($('.skillName'), .5, {
    ease: Power3.easeOut,
    opacity: 0,
    top: -20
  }, 1)
  if (i < (skills.length - 1)) {
    i = i + 1
  } else {
    i = 0
  }
}

setInterval(tick, 2000);