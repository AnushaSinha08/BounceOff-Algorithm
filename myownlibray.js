function bounceOff(ob1,ob2) {

    if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
      && ob2.x - ob1.x < ob2.width/2 + ob1.width/2) {
        ob1.velocityX = ob1.velocityX * (-1);
        ob2.velocityX = ob2.velocityX * (-1);
  }
  
  if (ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2){
      ob1.velocityY = ob1.velocityY * (-1);
      ob2.velocityY = ob2.velocityY * (-1);
  }
  
  } 

  function isTouching(movingrect,fixrect) {
    
    if (movingrect.x - fixrect.x < movingrect.width/2  + fixrect.width/2 &&
        fixrect.x - movingrect.x < movingrect.width/2 + fixrect.width/2 &&
      movingrect.y - fixrect.y < movingrect.height/2  + fixrect.height/2 &&
      fixrect.y - movingrect.y < movingrect.height/2 + fixrect.height/2 ) {
      return  true;
    
    }
    
    else {
      return false;
    }
  
  }