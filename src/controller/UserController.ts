import { Request, Response } from "express";
import { UserInputDTO } from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/base/BaseDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../service/idGenerator";

export class UserController {
    private static UserBusiness = new UserBusiness (
        new UserDatabase(),
        new IdGenerator()
    )

    public async register(req: Request, res: Response) {
        try {

            const input: UserInputDTO = {
                name: req.body.name,
                email: req.body.email,
                company: req.body.company,
                criticalIssue: req.body.criticalIssue,
                tellUs: req.body.tellUs
            }

            await UserController.UserBusiness.registerUser(input);

            res.status(200).send({ message: "Cadastro realizado!" });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    };

}