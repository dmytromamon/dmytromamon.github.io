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

$('.open-gallery').click(function(e){
  e.preventDefault();
  
  $('.interiors__gallery').fadeIn();
})

$('.close-gallery').click(function(e){
  e.preventDefault();
  
  $('.interiors__gallery').fadeOut();
})

$('.choose-plan').click(function(e){
  e.preventDefault();
  
  var a = $(this).attr('href');
  $('#floorplans a').removeClass('active');
  $(this).addClass('active');
  $('.plan-info h5').fadeOut();
  $('h5.' + a).fadeIn();
  $('#floorplans img').fadeOut(500);
  setTimeout(function(){
    $('img.' + a).fadeIn();
  }, 500)
})

function handleNav(index, link) {
  
  $('.interiors__gallery').fadeOut();
  $('#floorplans a').removeClass('active');
  $('.plan-info h5').fadeOut();
  $('h5.site-plan').fadeIn();
  $('#floorplans img').fadeOut(500);
  
  setTimeout(function(){
    $('img.site-plan').fadeIn();
  }, 500)
  
  var i = index;
  var sectionId = link;
  if ($('li').not(':eq(' + i + ')').hasClass('active')) {
    $('li').removeClass('active');
    $('li').eq(i).addClass('active');
    var tl = new TimelineMax();
      
    tl.to($('.root__section'), .5, {
      ease: Power3.easeOut,
      opacity: 0,
      left: '-100vw'
    }, 0)
    .fromTo($('#' + sectionId), .5, {
      ease: Power3.easeOut,
      opacity: 0,
      left: '100vw'
    }, {
      ease: Power3.easeOut,
      opacity: 1,
      left: 0
    }, .5)
      
    setTimeout(function(){
      
      $('.root__section').css('display', 'none');
      $('#' + sectionId).css('display', 'flex');
    }, 500)
  } else if ($('li').eq(i).hasClass('active')) {
    $('li').removeClass('active');
    var tl = new TimelineMax();
      
    tl.to($('.root__section'), .5, {
      ease: Power3.easeOut,
      opacity: 0,
      left: '-100vw'
    }, 0)
      
    setTimeout(function(){
      $('.navigation').removeClass('collapsed');
      $('li').eq(i).removeClass('active');
      
      $('.root__section').css('display', 'none');
    }, 500)
  } else {
    $('.navigation').addClass('collapsed');
    $('li').removeClass('active');
    $('li').eq(i).addClass('active');
    var tl = new TimelineMax();
      
    $('#' + sectionId).css('display', 'flex');
      
    tl.fromTo($('#' + sectionId), .5, {
      ease: Power3.easeOut,
      opacity: 0,
      left: '100vw'
    }, {
      ease: Power3.easeOut,
      opacity: 1,
      left: 0
    }, .5)
  }
}

function List(props) {
  
  const navList = props.links.map((link) =>
    <li key={link.id}>
      <a onClick={() => handleNav(link.id, link.link)}>
        <img src={link.image}></img>
        <div className="navigation__bg"></div>
        <span>{link.name}</span>
      </a>
    </li>
  )
  return (
    <nav className="navigation">
      <ul>
        {navList}
      </ul>
    </nav>
  )
}

const links = [{id: 0, link: 'building', name: 'the building', image: 'img/Shaughnessy-Exterior_Highres-May5.jpg'},
             {id: 1, link: 'floorplans', name: 'floorplans', image: 'img/Shaughnessy-Cross+Section_v3_Highres-May5.jpg'},
             {id: 2, link: 'neighbourhood', name: 'neighbourhood', image: 'img/neighbourhood-map.png'},
             {id: 3, link: 'interiors', name: 'interiors', image: 'img/man.png'},
             {id: 4, link: 'about', name: 'about the team', image: 'img/layout.png'}]

ReactDOM.render(
  <List links={links} />,
  document.getElementById('nav')
)