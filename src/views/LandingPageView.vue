<template>
    <div class="about">
        <h1>This is an about page</h1>
        <a href="https://onservice-ws51.github.io/LandingPage.github.io/">Ingrese aquí a nuestro landing page</a>
    </div>
</template>

<style>
  @media (min-width: 1024px) {
      .about {
          min-height: 100vh;
          display: flex;
          align-items: center;
      }
  }
  .about {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 2rem;
  }

  .about h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
  }

  .about p {
      font-size: 1.2rem;
      margin-bottom: 1rem;
  }

  .about a {
      color: #007bff;
      text-decoration: none;
      font-weight: bold;
  }

  .about a:hover {
      text-decoration: underline;
  }
</style>