const os = require('os');
const cluster = require('cluster');

const runPrimaryProcess = () => {
  const processCount = os.cpus().length;
  console.log(`Primary ${process.pid} is running`);
  console.log(`Forking Server with ${processCount} processes \n`);
  for (let i = 0; i < processCount; i++) {
    cluster.fork();
  }
};

const runWorkerProcess = async () => {
  await import('./main');
};

cluster.isPrimary ? runPrimaryProcess() : runWorkerProcess();
