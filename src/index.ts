import * as childProcess from 'child_process';

export const copy = (text: string) => {
    if (typeof text !== 'string') return console.error(new TypeError('Type of text must be a string!'));
    if (process.platform !== 'win32') return console.error(new Error('This package works only in windows currently!'));


    childProcess.exec(`(echo ${text.replace(/\n/g, '& echo ')}) | clip`);
};
