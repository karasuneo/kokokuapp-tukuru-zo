import Dexie, { type EntityTable } from "dexie";
import { DisplayFile } from "../types";

const db = new Dexie("DisplayFileUrlDatabase") as Dexie & {
  displayFiles: EntityTable<DisplayFile, "id">;
};

db.version(1).stores({
  displayFiles: "++id, file ,type",
});

export { db };
