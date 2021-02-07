import { IdGenerator } from '../service/idGenerator';
import { UserInputDTO } from '../model/User';
import { UserDatabase } from '../data/UserDatabase';

export class UserBusiness {
    constructor (
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator
    ) {}

    public async registerUser(user: UserInputDTO): Promise<void> {

        if (user.criticalIssue === "Outra") {
            if (
                !user.name || 
                !user.email || 
                !user.company ||
                !user.criticalIssue ||
                !user.tellUs
            ) {
                throw new Error("Missing input");
            };
        } else {
            if (
                !user.name || 
                !user.email || 
                !user.company ||
                !user.criticalIssue
            ) {
                throw new Error("Missing input");
            };
        };

        if (user.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        };

        const id = this.idGenerator.generate();

        await this.userDatabase.registerUser (
            id, 
            user.name,
            user.email, 
            user.company,
            user.criticalIssue,
            user?.tellUs
        );
    }

}