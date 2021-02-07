import { BaseDatabase } from "./base/BaseDatabase";

export class UserDatabase extends BaseDatabase {

  public async registerUser(
    id: string,
    name: string,
    email: string,
    company: string,
    criticalIssue: string,
    tellUs?: string
  ): Promise<void> {  
    try {
      await this.getConnection()
        .insert({
          id,
          name,
          email,
          company,
          critical_issue: criticalIssue,
          tell_us: tellUs
        })
        .into(this.tableNames.users);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

}