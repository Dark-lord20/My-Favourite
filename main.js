function collaps(){
    if (document.getElementById("col").innerHTML==""){
      console.log("hello world");
      document.getElementById("col").innerHTML='<br><a href="https://www.google.com/search?q=rick+riordan&safe=active&sxsrf=ALeKk00ScwxoXhLVg5vgvoZJY1h6sZgefA:1607425742323&tbm=isch&source=iu&ictx=1&fir=t7AqKH-TCUTqTM%252Ch7w_LsAacFUJ3M%252C_&vet=1&usg=AI4_-kSmBG7xpod4KpzVvD6LRX96FmvfNQ&sa=X&ved=2ahUKEwjds_7Cn77tAhUHzjgGHXCdDbcQ_h16BAguEAE#imgrc=t7AqKH-TCUTqTM" class="article link">Rick Riordan image</a><br><a href="https://fonts.google.com/specimen/Fredericka+the+Great" class="article link">Fredericka the Great Font</a><br><a href="https://fonts.google.com/specimen/Lobster" class="article link">Lobster Font</a>';
    }
    else {
      document.getElementById("col").innerHTML="";
    }
  }