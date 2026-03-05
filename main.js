'use strict'

let tamanhoAtual = 16;
const tamanhoPadrao = 16;

function aumentarFonte() {
  tamanhoAtual += 3;
  document.documentElement.style.setProperty("--base-font", tamanhoAtual + "px");
}

function diminuirFonte() {
  tamanhoAtual -= 2;
  document.documentElement.style.setProperty("--base-font", tamanhoAtual + "px");
}

function fontePadrao() {
  tamanhoAtual = tamanhoPadrao;
  document.documentElement.style.setProperty("--base-font", tamanhoAtual + "px");
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("aumentar").addEventListener("click", aumentarFonte);
  document.getElementById("diminuir").addEventListener("click", diminuirFonte);
  document.getElementById("padrao").addEventListener("click", fontePadrao);
});