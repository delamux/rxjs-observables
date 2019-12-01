import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next : value => console.log('siguiente [next]:', value ),
    error: error => console.warn('error [obs]:', error ),
    complete: () => console.info('completado [obs]')
};



// const obs$ = Observable.create();
const obs$ = new Observable<string>( subs => {

    subs.next('Hello');
    subs.next('World');

    subs.next('Hello');
    subs.next('World');

    // Force error
    // const a  = undefined;
    // a.nombre = 'Luis';


    subs.complete();

    subs.next('Hello');
    subs.next('World');

});


obs$.subscribe( observer );

// obs$.subscribe(
//     value => console.log('next: ', value),
//     error => console.warn('error: ', error),
//     () => console.info('Complete')
// );


