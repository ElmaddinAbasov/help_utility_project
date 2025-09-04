"use strict"
import {printLinuxVersion, printJavaScriptVersion} from './help.mjs';
import {glossaryInit, getWordDescription} from './glossary.mjs';
import { createInterface } from 'node:readline';
const stdinInput = createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log('Welcome to a help facility\n\n');
glossaryInit();
stdinInput.question('', command => {
	switch (command)
	{
		case 'help' :
			printLinuxVersion();
			printJavaScriptVersion();
			stdinInput.close();
			break;
		case 'key word' :
			stdinInput.question('', keyWord => {
				console.log(getWordDescription(keyWord));
				stdinInput.close();
			});	
			break;
	}
});
