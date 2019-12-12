import { take, delay } from "rxjs/operators";
import { of, interval, forkJoin } from "rxjs";


const numbers$ = of(1,2,3, 4    );
const intervals$ = interval(1000).pipe(take(3));
const letters$ = of('a', 'b', 'c').pipe(delay(3500));

forkJoin(
    numbers$,
    intervals$,
    letters$
).subscribe(console.log);
// return [4, 2, "c"]

forkJoin({ 
    numbers$,
    intervals$,
    letters$
}).subscribe(console.log);
// return {numbers$: 4, intervals$: 2, letters$: "c"}

forkJoin({ 
    num: numbers$,
    take: intervals$,
    char: letters$
}).subscribe(console.log);
//return {num: 4, take: 2, char: "c"}