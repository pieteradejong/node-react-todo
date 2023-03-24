import { Document } from "mongoose"

export ITodo extends Document {
    name: string
    description: string
    status: boolean
}
