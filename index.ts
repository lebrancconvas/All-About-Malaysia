import { CONFIG } from "./config";
import type { IPopulationData } from "./@types";
import fs from "fs/promises";
import path from "path";

const populationCSV = CONFIG.populationStatePath;

async function main() {
  const rawData = await fs.readFile(path.join(populationCSV, "population_state.csv"), { encoding: "utf-8" });
  const data = rawData.split("\n").map((data) => data.split(","));
  const dataNoColumn = data.splice(1, data.length);
  const jsonData: IPopulationData[] = [];
  
  for(let row = 0; row < dataNoColumn.length; row++) {
    const target = dataNoColumn[row] as string[];
    const json = {
      state: target[0] || null,
      date: target[1] || null,
      sex: target[2] || null,
      age: target[3] || null,
      ethnicity: target[4] || null,
      population: target[5] || null
    } as IPopulationData;
    jsonData.push(json);
  }
  await fs.writeFile(path.join(populationCSV, "population_state.json"), JSON.stringify(jsonData, null, 2));
};

main(); 