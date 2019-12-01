import { fromEvent, Observable } from "rxjs";
import { debounceTime, map, pluck, mergeAll, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUserResp } from "../interfaces/github-user-resp.interface";

//References
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

const showUsers = (users: GithubUser[]) => {
    orderList.innerHTML = '';

    for (const user of users) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = ' show user page';
        anchor.target = '_blank';

        li.append(img);
        li.append(user.login);
        li.append(anchor);

        orderList.append(li);
    }
}

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

// switchMap
input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    map<string, Observable<GithubUserResp>>(text => ajax.getJSON(
        `https://api.github.com/search/users?q=${ text }`
    )),
    mergeAll<GithubUserResp>(),
    pluck<GithubUserResp, GithubUser[]>('items')
)
//.subscribe(showUsers)

const url = 'https://httpbin.org/delay/1?arg='

//This operator cancel the request before
input$.pipe(
    //we can use here the bounce time
    pluck('target', 'value'),
    switchMap(text => ajax.getJSON(url + text))
).subscribe(console.log)