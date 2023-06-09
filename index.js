require("colors");

// console.log("hi".bgBlack);

const { TYPES } = require("./helper");

const { success, warn, error, rainbow } = TYPES;

const logSuccess = (message) => {
  const msg = message[success];
  console.log(msg);
};
const logWarn = (message) => {
  const msg = message[warn];
  console.log(msg);
};
const logError = (message) => {
  const msg = message[error];
  console.log(msg);
};
const logRainbow = (message) => {
  const msg = message[rainbow];
  console.log(msg);
};

const log = () => {
  return {
    success: (msg) => logSuccess(msg),
    warn: (msg) => logWarn(msg),
    error: (msg) => logError(msg),
    rainbow: (msg) => logRainbow(msg),
  };
};

// const logger = log();
// logger.success("green");
// logger.warn("yellow");
// logger.error("red");

module.exports = log;
