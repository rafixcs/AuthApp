import { Router } from "express";

export default (router: Router): void => {
    router.get("/", (req, res) => {res.status(200).send({message: "Hello world!"})})
}
