//var chalk = require('chalk');//chalkは文字の色を変更する
import chalk from 'chalk'; // 上のES6 package.jsonのscriptをbabel-nodeにする

console.log(chalk.green('Starting app in dev mode'));//npm start実行時にこのメッセージをターミナル内に表示する
