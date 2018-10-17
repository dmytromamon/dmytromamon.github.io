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

var headStatus = 'head'

function handleBackButton() {
  headStatus = 'head'
  
  var tl = new TimelineMax();
  
  tl.to($('.header'), .3, {
    ease: Power3.easeOut,
    height: '100vh',
    background: 'url(img/home-image-blue-overlay.jpg)'
  }, 0)
  .to($('.head__logo'), .3, {
    ease: Power3.easeOut,
    opacity: 0,
    top: -100
  }, 0)
  .to($('.header button'), .3, {
    ease: Power3.easeOut,
    opacity: 0
  }, 0)
  .to($('.head__logo'), .3, {
    ease: Power3.easeOut,
    opacity: 1,
    top: 0
  }, .3)
  .from($('.head__action'), .3, {
    ease: Power3.easeOut,
    opacity: 0,
    top: -100
  }, .3)

  setTimeout(function(){
    ReactDOM.render(
      headContent(headStatus),
      document.getElementById('head')
    )
  }, 300)
}

$(document).on('click', '.head', function(){
  headStatus = 'header'
  
  var tl = new TimelineMax();
  
  tl.to($('.head'), .3, {
    ease: Power3.easeOut,
    height: 89,
    background: '#08091e'
  }, 0)
  .set($('.head'), {
    ease: Power3.easeOut,
    background: ''
  }, .301)
  .to($('.head__logo'), .3, {
    ease: Power3.easeOut,
    opacity: 0,
    top: -100
  }, 0)
  .to($('.head__logo'), .3, {
    ease: Power3.easeOut,
    opacity: 1,
    top: 0
  }, .301)
  .from($('.header button'), .5, {
    ease: Power3.easeOut,
    opacity: 0
  }, .301)
  .from($('.head__action'), .3, {
    ease: Power3.easeOut,
    opacity: 0,
    top: -100
  }, .3)

  setTimeout(function(){
    ReactDOM.render(
      headContent(headStatus),
      document.getElementById('head')
    )
  }, 300)
})

function headContent(headStatus) {
  if (headStatus == 'head') {
    return (
      <div className="head">
        <img className="head__logo" src="img/shaughnessy-logo.svg"></img>
        <div className="head__action">Touch anywhere on the screen to begin</div>
        <img className="head__footer-logo" src="img/alabaster-homes.svg"></img>
      </div>
    );
  } else {
    return (
      <div className="header">
        <img className="head__logo" src="img/shaughnessy-logo.svg"></img>
        <button onClick={handleBackButton}>
          <img src="img/back-button.svg"></img>
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  headContent(headStatus),
  document.getElementById('head')
)