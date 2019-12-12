import { forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError } from "rxjs/operators";


const GITHUB_API = 'https://api.github.com/users';
const GITHUB_USER = 'delamux'

// In this way, if we have an error in one of these request all, all request its going to crash
forkJoin({
    user: ajax.getJSON(`${GITHUB_API}/${GITHUB_USER}`),
    repos: ajax.getJSON(`${GITHUB_API}/${GITHUB_USER}/repos`),
    gists: ajax.getJSON(`${GITHUB_API}/${GITHUB_USER}/gists`),
}).subscribe(console.log)

// If we want all request even thought one of these crash we need to pass the catch error
forkJoin({
    user: ajax.getJSON(`${GITHUB_API}/${GITHUB_USER}`),
    repos: ajax.getJSON(`${GITHUB_API}/${GITHUB_USER}/reposGoingToCrash`)
        .pipe(
            catchError(err => of(err))
        ),
    gists: ajax.getJSON(`${GITHUB_API}/${GITHUB_USER}/gists`),
}).subscribe(console.log)