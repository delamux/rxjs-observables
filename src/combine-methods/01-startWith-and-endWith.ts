import { of } from "rxjs";
import { startWith, endWith } from "rxjs/operators";

const numbers$ = of(1,2,3,4);

numbers$.pipe(
    startWith('startWith A')
)
.subscribe(console.log);

console.log('here start endWith');
numbers$.pipe(
    endWith('endWith Z')
).subscribe(console.log)