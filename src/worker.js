self.onmessage = ({ data: { text } }) => {
  self.postMessage({ text: 'Hello' + text });
};

// The self read-only property of the WorkerGlobalScope
// interface returns a reference to the WorkerGlobalScope itself.
// Most of the time it is a specific scope like DedicatedWorkerGlobalScope,
// SharedWorkerGlobalScope, or ServiceWorkerGlobalScope.
