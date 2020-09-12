import path from "path";
import { remote } from "electron";
import {
  existsSync,
  readFileSync,
  writeFileSync,
  statSync,
  mkdirSync,
} from "fs";

import { Metadata } from "../types/metadata";

export const getStorageDirectory = async (): Promise<string> => {
  const dir = path.join(remote.app.getPath("documents"), "./BrainTree/");

  if (existsSync(dir) && statSync(dir).isDirectory()) {
    return dir;
  }

  mkdirSync(dir, { recursive: true });
  return dir;
};

export const writeFile = async (name: string, contents: string) => {
  const dir = await getStorageDirectory();

  writeFileSync(path.join(dir, `./${name}`), contents);
};

export const readFile = async (name: string): Promise<string> => {
  const dir = await getStorageDirectory();

  return readFileSync(path.join(dir, `./${name}`)).toString();
};

export const writeMetadata = async (data: Metadata) => {
  await writeFile("metadata.json", JSON.stringify(data, null, 2));
};

export const readMetadata = async (): Promise<Metadata> => {
  const metdata: Metadata = JSON.parse(await readFile("metadata.json"));

  return metdata;
};
