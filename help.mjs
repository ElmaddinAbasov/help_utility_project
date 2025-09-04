import { exec } from 'child_process';

export function printLinuxVersion()
{
        exec('cat /etc/*-release', (error, stdout, stderr) => {
                if (error){
                        console.error(`ERROR: Failed to get Linux version ${error.message}`);
                        return;
                }
                console.log(`Linux current version : ${stdout}`);
        });
}

export function printJavaScriptVersion()
{
        exec('node -v', (error, stdout, stderr) => {
                if (error) {
                        console.error(`Error occurred: ${error.message}`);
                        return;
                }
                console.log(`JavaScript runtime enviroment version: ${stdout}`);
        });
}

