import {Router} from "express"

const router: Router = Router()

router.get("/", handleRoot)

router.get("/todos", handleIndex)

