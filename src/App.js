import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";
import { useEffect } from 'react';


function App() {

  useEffect(()=>{

  //menu item click #not passing
  $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top - 80
      }, 300);
  });
  
  //menu active window scroll
  $(window).scroll(function(){
    var windscroll = $(window).scrollTop();
    if(windscroll >=100)
    $('.ScrlDv').each(function(i){
      if((($(this).offset().top)-150)<=windscroll){
        $('.menuSec .navbar-nav .nav-link.active').removeClass('active');
        $('.menuSec .navbar-nav .nav-link').eq(i).addClass('active');
      }
    })
  }).scroll();

  //window scroll change nav shadows
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
  if (scroll > 300) {
    $('.navBg ').addClass('bg-scrolling');
  }
  else{
  $('.navBg ').removeClass('bg-scrolling'); 	
  }
  })

  })
  return (
    <div>
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
