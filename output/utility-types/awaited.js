/*JavaScript e jodi amra await use kori, seta Promise resolve kore inner value return kore.
TypeScript er problem holo – amra type system k easily bujhate parina je await er pore exactly ki type ashbe.
Ei gap fill korar jonne Awaited<T> asche.*/
// before TS 4.5, people used custom utility types like UnwrapPromise<T> or wrote complex conditional types.
async function example() {
    return 'Hello, World!';
}
async function getUser() {
    return { id: 1, name: 'Bob' };
}
export {};
//# sourceMappingURL=awaited.js.map