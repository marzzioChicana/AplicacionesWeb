<script>

function validarPrecio() {
  const precioInput = document.getElementById("eventPrice");
  const precioValor = parseFloat(precioInput.value);
  const errorPrecio = document.getElementById("errorPrecio");

  if (precioValor < 0) {
    precioInput.classList.add("error");
    errorPrecio.innerText = "El precio debe ser mayor o igual a cero";
    return false;
  } else {
    precioInput.classList.remove("error");
    errorPrecio.innerText = "";
    return true;
  }
}
</script>



<template>
  <body>
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-left">
          <h1 class="navbar-brand">Agenda</h1>
          <h1 class="navbar-brand">Usuario</h1>
        </div>
        <div class="navbar-right">
          <div class="search-container">
            <input type="text" placeholder="Buscar evento" />
            <span class="search-icon"><i class="fa fa-search"></i></span>
          </div>
        </div>
      </div>
    </nav>
    <div class="content">
      
      <form onsubmit="return validarPrecio()">
      <div class="media-container">
        <div class="input-container">
          <label for="eventName">Nombre del Evento</label>
          <input type="text" id="eventName" required>
        </div>
        <div class="input-container-left">
          <label for="mediaFile">Archivos Multimedia</label>
          <input type="file" id="mediaFile" accept="audio/*,video/*" />
        </div>
      </div>
      <div class="input-container">
        <label for="eventDescription">Descripción del Evento</label>
        <input type="text" id="eventDescription" class="large-input" required>
      </div>
      <div class="input-container">
        <label for="eventStartTime">Hora de Inicio</label>
        <input type="time" id="eventStartTime" required>
      </div>
      <div class="input-container">
        <label for="eventEndTime">Hora de Finalización</label>
        <input type="time" id="eventEndTime" required>
      </div>
      <div class="input-container">
        <label for="eventGuests">Invitados</label>
        <input type="text" id="eventGuests" />
      </div>

        <div class="input-container">
          <label for="eventPrice">Precio de Entrada</label>
          <input type="number" id="eventPrice" min="0" step="0.01" required>
          <span id="errorPrecio" class="error"></span>
        </div>
        
        <div class="pagination">
          <button class="submit">Siguiente</button>
        </div>
      </form>
    </div>
  </body>
</template>

<style>

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
  max-width: 100%;
  height: 100%;
  overflow-x: hidden;
}
.media-container{
  display: flex;
}
input {
  width: 400px;
  height: 40px;
}

h1, h2, h3, h4, h5, h6,
p, span, label, button {
  color: #79b791;
}
input {
  background-color: #abd1b5;
  color: #242423;
}
.large-input {
  height: 100px;
}
.navbar {
  background-color: #242423;
  padding: 20px;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.navbar-left h1 {
  margin: 0;
  padding-right: 20px;
  font-size: 24px;
}

.navbar-right {
  display: flex;
  align-items: center;
}

.search-container {
  position: relative;
  display: flex;
  align-items: center;
}

.search-container input[type="text"] {
  width: 100%;
  padding: 10px 40px 10px 10px;
  font-size: 16px;
  border: 1px solid #242423;
  border-radius: 4px;
  box-sizing: border-box;
}

.search-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 16px;
}

.search-icon i {
  color: #fff;
}

.content {
  max-width: 100%;
  padding: 2rem;
  background-color: #242423;
  border-top: 1px solid #79b791;

  margin: 0 auto;
  box-sizing: border-box;

}

.input-container {
  margin-bottom: 40px;
}
.input-container-left {
  margin-bottom: 40px;
  margin-left: 50%;
}
.input-container-left label {
  display: block;
  margin-bottom: 5px;
}

.input-container label {
  display: block;
  margin-bottom: 5px;
}

.input-container input[type="text"],
.input-container input[type="time"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

@media screen and (min-width: 600px) {
  .navbar-left h1 {
    font-size: 28px;
  }
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background-color: #242423;
}

.pagination button {
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #007ad9;
  border-radius: 4px;
  background-color: #BC2C1A;
  color: #ffffff;
  cursor: pointer;
}

.pagination button:hover {
  background-color: #98053e;
  color: #fff;
}
error {
  color: #f44336;
}
.input-container-right {
  flex-grow: 1;
}

</style>





