import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';



const numeros$ = range(1,5);


numeros$.pipe(
    tap( x => {
        console.log('antes', x);
        return 100;
    }),
    map( val => val * 10 ),
    tap({
        next: value => console.log('después', value),
        complete: () => console.log('Se terminó todo')
    })
)
.subscribe( val => console.log('subs', val ));






