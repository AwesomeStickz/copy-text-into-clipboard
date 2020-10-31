import * as childProcess from 'child_process';
import * as path from 'path';

export const copy = (text: string, options?: { copyFromFile?: boolean }) => {
    if (typeof text !== 'string') return console.error(new TypeError('Type of text must be a string!'));
    if (process.platform !== 'win32') return console.error(new Error('This package works only in windows currently!'));

    if (options?.copyFromFile === true) {
        const filePath = path.resolve(text);

        childProcess.exec(`clip < ${filePath.replace('\\', '\\"')}`);
    } else {
        childProcess.exec(`(echo ${text.replace(/\n/g, '& echo ')}) | clip`);
    }
};
