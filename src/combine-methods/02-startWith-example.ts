import { ajax } from "rxjs/ajax";
import { pipe } from "rxjs";
import { startWith } from "rxjs/operators";



const loadingDiv = document.createElement('div');

loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Loading...'

const body = document.querySelector('body');


ajax.getJSON('https://reqres.in/api/users/2?delay=3')
.pipe(
    startWith(true)
)
.subscribe(
    (res) => {
        if (res === true) {
            body.append(loadingDiv);
        } else {
            document.querySelector('.loading').remove();
        }
        console.log(res);
    }
)