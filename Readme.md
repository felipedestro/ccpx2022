# Documentação Landing Page DNC

![mobile.png](./assets/img/mobile.png)

---

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-principais-funcoes">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML e CSS
- JavaScript
- Git e Github
- Figma

## Projeto

A página proposta serve como um estudo de JS Intermediário. Tem como objetivo desenvolver aplicando funcionalidades Javascript junto a aplicação de HTML e CSS.

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

eito com ♥ by Felipe Destro 👋 [Conheças mais projetos](https://github.com/felipedestro)