function touching (fixed,moving) {
    if(fixed.x-moving.x < moving.width/2 + fixed.width/2 && moving.x-fixed.x < moving.width/2 + fixed.width/2 && moving.y-fixed.y<moving.height/2+fixed.height/2 && fixed.y-moving.y<moving.height/2+fixed.height/2) {
    return true;
      }
      else{
       return false;
     
    
      }
  }
  