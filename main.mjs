"use strict"
import {printLinuxVersion, printJavaScriptVersion} from './help.mjs';
import {glossaryInit, getWordDescription, readKeyWord} from './glossary.mjs';
import {printListOfEducationCenters} from './starter.mjs';
import { createInterface } from 'node:readline';
const stdinInput = createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log('Welcome to a help facility\n\n');
glossaryInit();
function mainModule()
{
	stdinInput.question('', command => {
		switch (command)
		{
			case 'help' :
				printLinuxVersion();
				printJavaScriptVersion();
				stdinInput.close();
				break;
			case 'glossary' :
				readKeyWord(stdinInput);
				break;
			case 'starter' :
				printListOfEducationCenters();
				break;
			case 'quit' :
			case '' :
				process.exit(0);
		}
	});
}
mainModule();
