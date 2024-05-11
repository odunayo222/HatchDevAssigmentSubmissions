//implement a queue
interface Queue<T> {
    push(value: T): void;
    pop(): T | undefined;
    size(): number;
    peek(): T | undefined;
}
class Queue<T> implements Queue<T> {
    private queue: T[] = [];
    push(value: T): void {
        this.queue.push(value);
    }
    pop(): T | undefined {
        return this.queue.shift();
    }
    size(): number {
        return this.queue.length;
    }
    peek(): T | undefined {
        return this.queue[0];
    }
}

const queue = new Queue<number>();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.size());
console.log(queue.peek());
console.log(queue.pop());
