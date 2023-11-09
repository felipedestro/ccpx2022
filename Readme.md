<h1 align="center">Documentação Landing Page DNC</h1>

<p align="center">
  <img alt="Projeto Landing Page CCPX" align="center" width="100%" src="./assets/img/mobile.png">
</p>

<p align="center">
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|
  <a href="#principais-funções">Principais Funções</a>&nbsp;&nbsp;&nbsp;
</p>

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML e CSS
- JavaScript
- Git e Github
- Figma

## Projeto

A página proposta serve como um estudo de JS Intermediário. Tem como objetivo desenvolver uma landing page aplicando funcionalidades Javascript junto a aplicação de HTML e CSS.

## Principais Funções

#### Contador 
    
Ele contabiliza o tempo com base na data atual 
    
  ```jsx
    var date = new Date("30 nov 2023");
    const count = document.getElementById("countdown");
    
    function formate(temp) {
      return temp < 10 ? `0${temp}` : temp;
    }
    
    function countdown() {
      var today = new Date();
      const total = (date - today) / 1000;
    
      const days = Math.floor(total / 60 / 60 / 24);
      const hours = Math.floor(total / 60 / 60) % 24;
      const minutes = Math.floor(total / 60) % 60;
      const seconds = Math.floor(total) % 60;
    
      count.innerHTML = `${days}D ${formate(hours)}H ${formate(minutes)}M ${formate(
        seconds
      )}S`;
    }
    
    countdown();
    setInterval(countdown, 1);
  ```
    
#### SelectCard
    
  Ele altera a visualização de um card para que fique claro ao usuário que ele foi selecionado
    
   ```jsx
    function selectCard(selector) {
      var element = document.querySelector(selector);
      element.classList.toggle("card-selected");
      return ingressos.includes(selector)
        ? ingressos.pop(selector)
        : ingressos.push(selector);
    }
   ```

---

<p align="center" style="text-decoration: none"> 
  Feito com ♥ by Felipe Destro 👋 <a href="https://github.com/felipedestro">Conheças meus projetos</a>
</p>