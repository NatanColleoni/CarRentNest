const os = require('os')
const cluster = require('cluster')

const runPrimaryProcess = () => {
    const cpusCount = os.cpus().length
    console.log(`Primary ${process.pid} is running`)
    console.log(`Forking server with ${cpusCount} process`)

    for(let index = 0; index < cpusCount; index++) cluster.fork
}

const runWorkerProcess = async () => {
    await import('./main')
}

cluster.isPrimary ? runPrimaryProcess() : runWorkerProcess()