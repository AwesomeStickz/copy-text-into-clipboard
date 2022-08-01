import * as childProcess from 'child_process';
import * as path from 'path';

export const copy = (text: string, options?: { copyFromFile?: boolean }) => {
    if (typeof text !== 'string') return console.error(new TypeError('Type of text must be a string!'));

    switch (process.platform) {
        case 'win32': // Windows
            if (options?.copyFromFile === true) {
                const filePath = path.resolve(text);

                childProcess.exec(`clip < ${filePath.replace('\\', '\\"')}`);
            } else {
                childProcess.exec(`(echo ${text.replace(/\n/g, '& echo ')}) | clip`);
            }
            break;
        case 'linux':
            if (options?.copyFromFile === true) {
                childProcess.exec(`cat ${text} | xclip -sel clip`);
            } else {
                childProcess.exec(`(echo ${text.replace(/\n/g, '& echo ')}) | xclip -sel clip`);
            }
            break;
        case 'darwin': // darwin is MacOS, IOS, basically anything apple.
            if (options?.copyFromFile === true) {
                childProcess.exec(`cat ${text} | pbcopy`);
            } else {
                childProcess.exec(`(echo ${text.replace(/\n/g, '& echo ')}) | pbcopy`);
            }
            break;
    }
};