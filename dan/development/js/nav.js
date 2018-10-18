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

function handleNav(index) {
  if ($('li').eq(index).hasClass('active')) {
    if (index == 3) {
      var tl = new TimelineMax();
      
      tl.to($('#interiors'), .5, {
        ease: Power3.easeOut,
        opacity: 0,
        left: '-100vw'
      }, 0)
      
      setTimeout(function(){
        $('.navigation').removeClass('collapsed');
        $('li').eq(index).removeClass('active');
        
        $('#interiors').css('display', 'none');
      }, 500)
    }
  } else {
    $('.navigation').addClass('collapsed');
    $('li').removeClass('active');
    $('li').eq(index).addClass('active');
    if (index == 3) {
      var tl = new TimelineMax();
      
      $('#interiors').css('display', 'flex');
      
      tl.fromTo($('#interiors'), .5, {
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
}

function List(props) {
  
  const navList = props.links.map((link) =>
    <li key={link.id}>
      <a onClick={() => handleNav(link.id)}>
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

const links = [{id: 0, name: 'the building', image: 'img/Shaughnessy-Exterior_Highres-May5.jpg'},
             {id: 1, name: 'floorplans', image: 'img/Shaughnessy-Cross+Section_v3_Highres-May5.jpg'},
             {id: 2, name: 'neighbourhood', image: 'img/neighbourhood-map.png'},
             {id: 3, name: 'interiors', image: 'img/man.png'},
             {id: 4, name: 'about the team', image: 'img/layout.png'}]

ReactDOM.render(
  <List links={links} />,
  document.getElementById('nav')
)