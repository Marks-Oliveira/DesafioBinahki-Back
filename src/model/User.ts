export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private company: string,
        private criticalIssue: string,
        private tellUs: string
    ) {}

    getId() {
        return this.id;
    }

    getName() {
        return this.name
    }

    getEmail() {
        return this.email;
    }

    getCompany() {
        return this.company;
    }

    getCriticalIssue() {
        return this.criticalIssue;
    }

    getTellUs() {
        return this.tellUs;
    }

    static toUserModel(user: any): User {
        return user && new User (
            user.id, 
            user.name, 
            user.email, 
            user.company, 
            user.critical_issue,
            user?.tell_us
        );
    }

}

export interface UserInputDTO {
    name: string;
    email: string;
    company: string;
    criticalIssue: string,
    tellUs?: string
}