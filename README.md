# Start project- RXJS

* The first that you need is run in your command line:

```
npm install
```
* This should be load all project modules

```
npm start
```
this command should be run in the same directory where ```package.json``` file it is.

## Change port
By default, the configured port is ```8081```, you can change if you want on the ```package.json``` >> scripts.

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

Change the port, save changes and run ```npm start``` again.

* All RxJS operators is inside /src folder, if you want test one of them, you can copy de file and paste in the ```index.ts``` file, The mosty operators it's for test on the web browser console, others are visual.
