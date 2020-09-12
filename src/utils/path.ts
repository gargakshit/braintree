import path from "path";
import { remote } from "electron";
import { promises as fs, existsSync } from "fs";

export const getStorageDirectory = async (): Promise<string> => {
  const dir = path.join(remote.app.getPath("documents"), "./BrainTree/");

  if (existsSync(dir) && (await fs.stat(dir)).isDirectory()) {
    return dir;
  }

  await fs.mkdir(dir, { recursive: true });
  return dir;
};

export const writeFile = async (
  name: string,
  contents: string
): Promise<void> => {
  const dir = await getStorageDirectory();

  await fs.writeFile(path.join(dir, `./${name}`), contents);
};

export const readFile = async (name: string): Promise<string> => {
  const dir = await getStorageDirectory();

  return (await fs.readFile(path.join(dir, `./${name}`))).toString();
};
