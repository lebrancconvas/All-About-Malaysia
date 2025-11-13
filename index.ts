import fs from "fs/promises";
import path from "path";
import { CONFIG } from "./config";
// import { convertPopulationDataToJSON } from "./utils";

const POPULATION_STATE_JSON_PATH = path.join(CONFIG.populationStatePath, "population_state.json");

async function main() {
  const data = await fs.readFile(POPULATION_STATE_JSON_PATH, { encoding: "utf-8" });  
  console.log(data);
};

main();