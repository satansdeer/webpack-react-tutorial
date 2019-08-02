import Worker from './worker.js';

const worker = new Worker();

worker.postMessage({ text: 'Maksim' });

worker.addEventListener('message', e => console.log(e.data))