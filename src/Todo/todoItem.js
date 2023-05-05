export class TodoItem {
    public id: number
    public task: string
    public complete: boolean

    public constructor(_id: number, _task: string, _complete: boolean) {
        this.id = _id,
        this.task = _task
        this.complete = _complete
    }
    public printDetails(): void {
        console.log(`${this.id} \t ${this.task} \t ${this.complete}`)
    }
}
