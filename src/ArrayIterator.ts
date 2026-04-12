class ArrayIterator<T> {
    private arr: T[];
    private index: number;
    constructor(arr: T[]) {
        this.arr = arr;
        this.index = 0;
    }
    public next(): { value: T | undefined; done: boolean } {
        if (this.index >= this.arr.length) {
            return { value: undefined, done: true };
        }
        const value = this.arr[this.index];
        this.index++;
        return { value: value, done: false };
    }
}
export default ArrayIterator;