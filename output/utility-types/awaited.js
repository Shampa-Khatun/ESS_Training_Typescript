/*JavaScript e jodi amra await use kori, seta Promise resolve kore inner value return kore.
TypeScript er problem holo – amra type system k easily bujhate parina je await er pore exactly ki type ashbe.
Ei gap fill korar jonne Awaited<T> asche.*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// before TS 4.5, people used custom utility types like UnwrapPromise<T> or wrote complex conditional types.
function example() {
    return __awaiter(this, void 0, void 0, function* () {
        return 'Hello, World!';
    });
}
function getUser() {
    return __awaiter(this, void 0, void 0, function* () {
        return { id: 1, name: 'Bob' };
    });
}
export {};
// { id: number; name: string }
//# sourceMappingURL=awaited.js.map