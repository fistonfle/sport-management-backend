import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Sample HTTP function
export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase with TypeScript!");
});
