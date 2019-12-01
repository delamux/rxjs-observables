import { asyncScheduler } from 'rxjs';

// setTimeout (() => {}, 3000);
// setInterval(() => {}, 3000);

const sayHi  = () => console.log('Hola Mundo');
const sayHi2 = name => console.log(`Hola ${ name }`);

// asyncScheduler.schedule( sayHi, 2000 );
// asyncScheduler.schedule( sayHi2, 2000, 'Luis' );


 const subs = asyncScheduler.schedule( function(state){

    console.log('state', state);

    this.schedule( state + 1, 1000 );
    
}, 3000, 0 );


// setTimeout( () => {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule( ()=> subs.unsubscribe(), 6000 );









