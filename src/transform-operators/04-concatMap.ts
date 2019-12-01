import { interval, fromEvent } from "rxjs";
import { take, switchMap, concatMap } from "rxjs/operators";




const interval$ = interval(500).pipe( take(3) );

const click$ = fromEvent(document, 'click');

//The concat map add into the queue all request and execute on sequence
click$.pipe(
    concatMap( () => interval$ )
)
.subscribe( console.log );