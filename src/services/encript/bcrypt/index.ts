import { IHash } from "../interface/hash";
import bcrypt from "bcrypt";

const saltRounds = 10;

export class BcryptHashing implements IHash {
  async hash(content: string): Promise<string> {

    try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(content, salt);
      return hashedPassword;
    } catch (error) {
      throw new Error("Error hashing password");
    }
  }
  
  async compareContent(value: string, hashedValue: string): Promise<boolean> {
    try {
      const match = await bcrypt.compare(value, hashedValue);
      return match;
    } catch (error) {
      throw new Error("Error comparing values");
    }
  }
}
