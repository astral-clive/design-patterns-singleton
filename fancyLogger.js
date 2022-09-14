/**
 * Singleton Design Pattern
 */
class FancyLogger {
  constructor() {
    // this is what makes it a Singleton
    if(FancyLogger.instance == null) {
      this.logs = [];
      FancyLogger.instance = this;
    }
    return FancyLogger.instance;
  }

  log(message) {
    this.logs.push(message);
    console.log(`LOGGED: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}

const logger = new FancyLogger();
Object.freeze(logger); // stops any methods or variables added/removed

export default logger;