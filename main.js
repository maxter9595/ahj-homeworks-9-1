/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/CollapseWidget.js
class CollapseWidget {
  constructor(buttonId, contentId, copyTextClass) {
    this.collapseButton = document.getElementById(buttonId);
    this.collapsibleContent = document.getElementById(contentId);
    this.copyText = document.querySelector(copyTextClass);
    this.init();
  }
  init() {
    this.collapseButton.addEventListener("click", () => this.toggleContent());
    this.copyText.addEventListener("click", () => this.copyContent());
  }
  toggleContent() {
    this.collapsibleContent.classList.toggle("show");
  }
  copyContent() {
    const textToCopy = this.collapsibleContent.innerText.trim();
    navigator.clipboard.writeText(textToCopy).then(() => alert("Text copied to clipboard!")).catch(err => console.error("Failed to copy text: ", err));
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  new CollapseWidget("collapse-button", "collapsible-content", ".copy-text");
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;