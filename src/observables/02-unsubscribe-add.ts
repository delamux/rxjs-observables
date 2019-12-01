import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next : value => console.log('next:', value ),
    error: error => console.warn('error:', error ),
    complete: () => console.info('completado')
};


const interval$ = new Observable<number>( subscriber => {

    // Create counter, 1,2,3,4,5,......
    let count = 0;

    const interval = setInterval( () => {
        // each second
        count++;
        subscriber.next( count );
        console.log(count);

    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500 );

    return () => {
        clearInterval(interval);
        console.log('Intérvalo destruido');
    }

});


const subs1 = interval$.subscribe( observer );
const subs2 = interval$.subscribe( observer );
const subs3 = interval$.subscribe( observer );

subs1.add( subs2 )
     .add( subs3 );


setTimeout(() => {
    subs1.unsubscribe()
    // subs2.unsubscribe()
    // subs3.unsubscribe()

    console.log('Completado timeout');
}, 6000);







