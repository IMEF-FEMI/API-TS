import mongoose from "mongoose";
import config from 'config'
import logger from "./logger";

export async function connect() {
    const dbUri = config.get<string>("dbUri");
    try {
        await mongoose.connect(dbUri);
        logger.info("DB Connected")
    } catch (err) {
        logger.error(`could not connect to database ${err}`);
        process.exit(1)
    }
} 