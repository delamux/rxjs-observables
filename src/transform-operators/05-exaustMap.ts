import { interval, fromEvent } from "rxjs";
import { take, exhaustMap } from "rxjs/operators";


const interval$ = interval(500).pipe( take(3));

const click$ = fromEvent(document, 'click');

//The exhaustMap wait till the first interval finnish
click$.pipe(
    exhaustMap( () => interval$ )
)
.subscribe( console.log );