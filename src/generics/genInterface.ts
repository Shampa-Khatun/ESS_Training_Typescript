interface Pair<K, V> {
    key: K;
    value: V;
}
let month: Pair<string, number> = {
    key: 'Jan',
    value: 1
};

console.log(month);

//methods
// Generic Collection Interface
interface Collection<T> {
    add(item: T): void;
    remove(item: T): void;
}

// Generic List Class implementing Collection
class List<T> implements Collection<T> {
    private items: T[] = [];

    // Add an item
    add(item: T): void {
        this.items.push(item);
    }

    // Remove an item
    remove(item: T): void {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    // Get item at index
    get(index: number): T | undefined {
        return this.items[index];
    }

    // Get total number of items
    size(): number {
        return this.items.length;
    }

    // Check if list contains an item
    contains(item: T): boolean {
        return this.items.indexOf(item) > -1;
    }

    // Clear all items
    clear(): void {
        this.items = [];
    }

    // Print all items
    print(): void {
        console.log(this.items);
    }
}

// ---------------------- Usage ----------------------

// Number List
const numberList = new List<number>();
numberList.add(10);
numberList.add(20);
numberList.add(30);
numberList.print(); // [10, 20, 30]
numberList.remove(20);
console.log(numberList.contains(20)); // false
console.log(numberList.size()); // 2

// String List
const stringList = new List<string>();
stringList.add("Shampa");
stringList.add("Mahi");
stringList.print(); // ["Shampa", "Mahi"]
stringList.remove("Shampa");
console.log(stringList.contains("Shampa")); // false

// Object List
interface Person {
    name: string;
    age: number;
}
const personList = new List<Person>();
personList.add({ name: "Shampa", age: 22 });
personList.add({ name: "Mahi", age: 21 });
personList.print(); 
// Warning: remove will only work if reference is same

//it describes an index type
interface Options<T> {
    [name: string]: T
}

let inputOptions: Options<boolean> = {
    'disabled': false,
    'visible': true
};

