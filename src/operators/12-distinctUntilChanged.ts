import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';



const numbers$ = of<number|string>(1,'1',1,3,3,2,2,4,4,5,3,1, '1' );

numbers$.pipe(
    distinctUntilChanged()
).subscribe( console.log );

interface Character {
    name: string;
}

const characters: Character[] = [
    {
        name: 'Megaman'
    },
    {
        name: 'Megaman'
    },
    {
        name: 'Zero'
    },
    {
        name: 'Dr. Willy'
    },
    {
        name: 'X'
    },
    {
        name: 'X'
    },
    {
        name: 'Zero'
    },
];

from( characters ).pipe(
    distinctUntilChanged( (ant, act) => ant.name === act.name )
).subscribe( console.log );



