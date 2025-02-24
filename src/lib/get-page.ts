import { Data } from "@measured/puck";
import fs from "fs";
import path from "path";

// Replace with call to your database
export const getPage = (pagePath: string) => {
  const dbPath = path.join(process.cwd(), "src", "database.json"); 
  console.log({__dirname});
  

  const allData: Record<string, Data> | null = fs.existsSync(dbPath)
    ? JSON.parse(fs.readFileSync(dbPath, "utf-8"))
    : null;

  console.log(fs.existsSync(dbPath),dbPath);

  return allData ? allData[pagePath] : null;
};