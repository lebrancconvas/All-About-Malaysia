import { CONFIG } from "../config";
import type { IPopulationData } from "../@types";
import fs from "fs/promises";
import path from "path";

const populationCSV = CONFIG.populationStatePath;

export async function convertPopulationDataToJSON() {
  const rawData = await fs.readFile(path.join(populationCSV, "population_state.csv"), { encoding: "utf-8" });
  const data = rawData.trim().split("\n").map((data) => data.split(","));
  const dataNoColumn = data.splice(1, data.length);
  const jsonData: IPopulationData[] = [];
  
  for(let row = 0; row < dataNoColumn.length; row++) {
    const target = dataNoColumn[row] as string[];
    const json = {
      state: target[0],
      year: target[1]?.split("-")[0],
      sex: target[2],
      age: target[3],
      ethnicity: target[4],
      population: Number(target[5])
    } as IPopulationData;
    jsonData.push(json);
  }
  await fs.writeFile(path.join(populationCSV, "population_state.json"), JSON.stringify(jsonData, null, 2));
};
