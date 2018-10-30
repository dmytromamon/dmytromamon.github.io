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

function open(id){
  if (id == 'blog') {
    const blog = (
      <p>It is blog</p>
    )

    ReactDOM.render(
      blog,
      document.getElementById('blog')
    )
  }
  
  if (id == 'about') {
    const about = (
      <p>It is about</p>
    )

    ReactDOM.render(
      about,
      document.getElementById('about')
    )
  }
  
  if (id == 'contact') {
    const contact = (
      <p>It is contact</p>
    )

    ReactDOM.render(
      contact,
      document.getElementById('contact')
    )
  }
}

function handleHeaderClick(index, id){
  $('.nav-link').removeClass('active');
  $('.nav-link').eq(index).addClass('active');
  history.pushState(null, null, '#' + id);
  
  const element = (
    <div id={id}></div>
  )
  
  ReactDOM.render(
    element,
    document.getElementsByClassName('wrapper')[0]
  )
  
  open(id);
}

function CreateHeader(props){
  const headerList = props.menuItems.map((link) =>
    <li className="nav-item" key={link.id}>
      <a href={link.link} onClick={() => handleHeaderClick(link.id, link.link)} className={link.status}>
        {link.name}
      </a>
    </li>
  )
  return (
    <nav className="navbar nav-pills navbar-expand-lg navbar-light bg-light">
      <ul className="nav">
        {headerList}
      </ul>
    </nav>
  )
}

const menuItems = [{id: 0, name: 'Blog', link: 'blog', status: 'nav-link active'},
             {id: 1, name: 'About', link: 'about', status: 'nav-link'},
             {id: 2, name: 'Contact', link: 'contact', status: 'nav-link'}];

ReactDOM.render(
  <CreateHeader menuItems={menuItems} />,
  document.getElementById('header')
);

$(document).on('click', '.nav-link', function(e){
  e.preventDefault();
})