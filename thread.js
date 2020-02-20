const { Worker, isMainThread, parentPort, workerData} = require('worker_threads')
console.log('test')
if(isMainThread){
    const worker = new Worker(__filename, { workerData: 1})
    worker.on('message', message => console.log(message))
}else {
    const math = 1+2;
    parentPort.postMessage(math)
}