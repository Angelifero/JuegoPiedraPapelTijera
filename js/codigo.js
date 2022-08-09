      // 1 es piedra, 2 es papel, 3 es tijera
      let jugador = 0

      //Esto tambien funciona
      //let pc = Math.floor(Math.random()*3 + 1);

      function aleatorio(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      function eligiendo(jugada){
        let mensaje = ""
          if(jugada == 1) {
            mensaje = "piedra 🌑"
          } else if (jugada == 2) {
            mensaje = "papel 📃"
          } else if (jugada == 3) {
            mensaje = "tijera ✂️"
          } else {
            mensaje = "Elección invalida"
          }
          return mensaje;
      }

      let pc = aleatorio(1,3);
      jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
      
      alert("PC elige: " + eligiendo(pc))
      alert("Tu eliges: " + eligiendo(jugador))
      

      /*if(pc == 1) {
        alert("Pc eligio piedra 🌑")
      } else if (pc == 2) {
        alert("Pc eligio papel 📃")
      } else if (pc == 3) {
        alert("Pc eligio tijera ✂️")
      }*/
      // COMBATE
      if (pc == jugador) {
        alert("EMPATE")
      } else if (jugador == 1 && pc == 3) {
        alert("GANASTE")
      } else if (jugador == 2 && pc == 1) {
        alert("GANASTE")
      } else if (jugador == 3 && pc == 2) {
        alert("GANASTE")
      } else {
        alert("PERDISTE")
      }
