import { sum } from './modules/sum';
console.log('ping')
const root = document.querySelector('#root');
root.textContent = sum(10, -1).toString();
