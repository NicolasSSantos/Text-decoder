// export class InputAreaController {
//   private inputText: HTMLTextAreaElement;
  
//   constructor() {
//     this.inputText = document.querySelector('[data-content=userText]') as HTMLTextAreaElement;
//   }
// }

import encodeText from "./encoder.js"

// Elementos DOM
const inputTextArea = document.querySelector('[data-content="userText"]') as HTMLTextAreaElement;
const resultTextArea = document.querySelector('[data-content="resultText"]') as HTMLTextAreaElement;
const resultBox = document.querySelector('.result__output') as HTMLElement;
const resultBoxEmpty = document.querySelector('.result__empty') as HTMLElement;
const buttonEncripty = document.querySelector('[data-btn=encoder__button--encrypt]') as HTMLElement;

// Controle de input
export function filterInput(event: Event) {
  const input = event.target as HTMLTextAreaElement;
  const resultado = input.value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z\s]/g, '')
      .replace(/\s+/g, ' ')
      // .trim();
  
  // console.log('Valor original:', input.value);
  // console.log('Resultado:', resultado);
  
  input.value = resultado;
}

// Manipulação da UI
function handleEncryption() {
  if (inputTextArea.value !== '') {
    const encryptedText = encodeText(inputTextArea.value);
    updateUI(encryptedText);
    clearInput();
  }
}

function updateUI(text: string) {
  resultBoxEmpty.classList.add('hidden');
  resultBox.classList.remove('hidden');
  resultBox.classList.add('visible');
  resultTextArea.textContent = text;
}

function clearInput() {
  inputTextArea.value = '';
}

// Inicialização dos event listeners
export function initializeTextAreaController() {
  inputTextArea.addEventListener('input', filterInput);
  buttonEncripty.addEventListener('click', handleEncryption);
}