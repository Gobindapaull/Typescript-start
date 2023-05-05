console.clear()

import { TodoItem } from "./todoItem"
import { ItemCollection } from "./itemCollection"

let col1: ItemCollection = new ItemCollection()

col1.addTodo("buy eth")
col1.addTodo("sell eth")

col1.printDetails()
