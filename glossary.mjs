const mapOfKeyWords = new Map();
function populateMap()
{
	mapOfKeyWords.set("var", "Declares a variable (function scoped or globally scoped)\n");
	mapOfKeyWords.set("let", "Declares a block-scoped local variable\n");
	mapOfKeyWords.set("const", "Declares a block-scoped read-only named constant\n");
	mapOfKeyWords.set("if", "Used for conditional execution of code blocks\n\n");
	mapOfKeyWords.set("else", "Used for conditional execution of code blocks\n");
	mapOfKeyWords.set("else if", "Used for conditional execution of code blocks\n");
	mapOfKeyWords.set("switch", "Used for multi-way conditional branching\n");
	mapOfKeyWords.set("case", "Used for multi-way conditional branching\n");
	mapOfKeyWords.set("default", "Used for multi-way conditional branching\n");
	mapOfKeyWords.set("for", "Used for creating loops\n");
	mapOfKeyWords.set("while", "Used for creating loops\n");
	mapOfKeyWords.set("if", "Used for creating loops\n");
}
export function glossaryInit()
{
	populateMap();
}
export function getWordDescription(keyWord)
{
	if (keyWord === undefined || keyWord === null)
		return "Provide valid keyword\n";
	return mapOfKeyWords.has(keyWord) === true ? mapOfKeyWords.get(keyWord) : "ERROR: No such keyword\n";
}
export function readKeyWord(input)
{
        input.question('', keyWord => {
                if (keyWord === '')
                {
                        input.close();
                        return; 
                }       
                console.log(getWordDescription(keyWord));
                readKeyWord(input);
        });
}

