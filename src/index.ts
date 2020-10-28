import * as childProcess from 'child_process';

export const copy = (text: string) => {
    if (typeof text !== 'string') throw new Error('Type of text must be a string!');
    if (process.platform !== 'win32') throw new Error('This package works only in windows currently!');

    childProcess.exec(`(echo ${text.replace(/\n/g, '& echo ')}) | clip`);
};
