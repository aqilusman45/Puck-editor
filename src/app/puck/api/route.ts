import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const dbPath = path.join(process.cwd(), "src", "database.json"); 

    if (!fs.existsSync(dbPath)) {
      fs.writeFileSync(dbPath, JSON.stringify({}), "utf-8");
    }

    const existingData = JSON.parse(fs.readFileSync(dbPath, "utf-8") || "{}");

    const updatedData = {
      ...existingData,
      [payload.path]: payload.data,
    };

    fs.writeFileSync(dbPath, JSON.stringify(updatedData, null, 2), "utf-8");

    revalidatePath(payload.path);

    return NextResponse.json({ status: "ok" });
  } catch (error:any) {
    console.error("Error updating database.json:", error);
    return NextResponse.json({ status: "error", message: error.message }, { status: 500 });
  }
}
