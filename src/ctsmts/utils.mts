import { mkdtempSync } from "fs";
import { tmpdir } from "os";
import path from "path";

export const getTemporaryDirectory = () => {
    const prefix = path.join(tmpdir(), "-");
    return mkdtempSync(prefix);
}
