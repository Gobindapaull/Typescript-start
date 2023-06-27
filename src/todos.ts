function printTodos(todos: string[] | null) {
    if (todos) {
        todos.map((todo) => console.log(todo))
    }else {
        console.log('no todos: null')
    }
}

const todos = ["typing", "reading", "coding"]
printTodos(null)
