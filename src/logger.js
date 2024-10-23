import winston from 'winston';


// Create a logger instance with transports and formats
const logger = winston.createLogger({
    level: 'info',  // Default level (logs 'info' and above)
    format: winston.format.combine(
        winston.format.timestamp(),   // Add a timestamp
        winston.format.json(),   // Output logs in JSON format
    ),
    transports: [
        new winston.transports.Console(),  // Log to console
        new winston.transports.File({ filename: 'combined.log' }),  // Log to file
    ],
});

// Logging at various levels
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');

export default logger;  // Ensure default export



/**
 * Logging Levels
   Winston uses logging levels with default severity:

   error: 0 (highest priority)
   warn: 1
   info: 2
   http: 3
   verbose: 4
   debug: 5
   silly: 6 (lowest priority)
   The default log level is info, so all messages at info level and above (info, warn, error) will be logged.
 */