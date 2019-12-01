import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete'),
}

const todayInFive = new Date(); // ahora
todayInFive.setSeconds( todayInFive.getSeconds() + 5 );


const interval$ = interval(1000);

// const timer$    = timer(2000);
// const timer$    = timer(2000, 1000 );
const timer$    = timer( todayInFive );


console.log('Inicio');
// interval$.subscribe( observer );
timer$.subscribe( observer )
console.log('Fin');









