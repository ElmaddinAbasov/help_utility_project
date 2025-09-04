import {printLinuxVersion, printJavaScriptVersion} from './help.mjs';
import { createInterface } from 'node:readline';
const stdinInput = createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log('Welcome to a help facility\n\n');
stdinInput.question('', command => {
	switch (command)
	{
		case 'help' :
			printLinuxVersion();
			printJavaScriptVersion();
			stdinInput.close();
			break;
	}
});
