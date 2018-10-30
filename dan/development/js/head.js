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
  
  tl.to($('.header'), .5, {
    ease: Power3.easeOut,
    height: '100vh'
  }, 0)
  .to($('.head__logo'), .5, {
    ease: Power3.easeOut,
    opacity: 0,
    top: -100
  }, 0)
  .to($('.header button'), .5, {
    ease: Power3.easeOut,
    opacity: 0
  }, 0)

  setTimeout(function(){
    ReactDOM.render(
      headContent(headStatus),
      document.getElementById('head')
    )
    
    var tl = new TimelineMax();
    
    tl.to($('.head__bg'), .5, {
      ease: Power3.easeOut,
      opacity: 1
    }, 0)
    .fromTo($('.head__bg'), .5, {
      ease: Power3.easeOut,
      opacity: 0
    }, {
      ease: Power3.easeOut,
      opacity: 1
    }, 0)
    .from($('.head__logo'), .5, {
      ease: Power3.easeOut,
      opacity: 0,
      top: -100
    }, 0)
    .from($('.head__action'), .5, {
      ease: Power3.easeOut,
      opacity: 0,
      top: -100
    }, 0)
    .from($('.head__footer-logo'), .5, {
      ease: Power3.easeOut,
      opacity: 0,
      top: -100
    }, 0)
    
      $('.navigation').removeClass('collapsed');
      $('li').removeClass('active');
      
      $('.root__section').css({
        display: 'none',
        opacity: 0,
        left: '100vw'
      });
    
  }, 500)
}

$(document).on('click', '.head', function(){
  headStatus = 'header'
  
  var tl = new TimelineMax();
  
  tl.to($('.head'), .5, {
    ease: Power3.easeOut,
    height: 89
  }, 0)
  .to($('.head__bg'), .5, {
    ease: Power3.easeOut,
    opacity: 0
  }, 0)
  .to($('.head__logo'), .5, {
    ease: Power3.easeOut,
    opacity: 0,
    top: -100
  }, 0)
  .to($('.head__logo'), .5, {
    ease: Power3.easeOut,
    opacity: 0,
    top: -100
  }, 0)
  .staggerFrom($('.navigation li'), .5, {
    ease: Power3.easeOut,
    opacity: 0,
    top: -20
  }, 0.025)
  .to($('.head__footer-logo'), .25, {
    ease: Power3.easeOut,
    opacity: 0,
    top: -100
  }, 0)
  .to($('.head__action'), .25, {
    ease: Power3.easeOut,
    opacity: 0,
    top: -100
  }, 0)
  
  setTimeout(function(){
    ReactDOM.render(
      headContent(headStatus),
      document.getElementById('head')
    )
    
    var tl = new TimelineMax();
    
    tl.from($('.head__logo'), .5, {
      ease: Power3.easeOut,
      opacity: 0,
      top: -100
    }, 0)
    .from($('.header button'), .5, {
      ease: Power3.easeOut,
      opacity: 0
    }, 0)
    .from($('.head__action'), .5, {
      ease: Power3.easeOut,
      opacity: 0,
      top: -100
    }, 0)
  }, 500)
})

function headContent(headStatus) {
  if (headStatus == 'head') {
    return (
      <div className="head">
        <div className="head__bg"></div>
        <img className="head__logo" src="img/shaughnessy-logo.png"></img>
        <div className="head__action">Touch anywhere on the screen to begin</div>
        <img className="head__footer-logo" src="img/alabaster-homes.png"></img>
      </div>
    );
  } else {
    return (
      <div className="header">
        <img className="head__logo" src="img/shaughnessy-logo.png"></img>
        <button onClick={handleBackButton}>
          <img src="img/back-button.png"></img>
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  headContent(headStatus),
  document.getElementById('head')
)