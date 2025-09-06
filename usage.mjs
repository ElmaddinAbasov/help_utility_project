const dictionary = new Map();
export function usageInit()
{
        dictionary.set("var", "The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value.\nvar x = 1;\nif (x === 1){\n\tvar x = 2;\n\n\tconsole.log(x)\n}\nconsole.log(x);\n");
        dictionary.set("let", "Declares a block-scoped local variable\n");
        dictionary.set("const", "Declares a block-scoped read-only named constant\n");
        dictionary.set("if", "Used for conditional execution of code blocks\n\n");
        dictionary.set("else", "Used for conditional execution of code blocks\n");
        dictionary.set("else if", "Used for conditional execution of code blocks\n");
        dictionary.set("switch", "Used for multi-way conditional branching\n");
        dictionary.set("case", "Used for multi-way conditional branching\n");
        dictionary.set("default", "Used for multi-way conditional branching\n");
        dictionary.set("for", "Used for creating loops\n");
        dictionary.set("while", "Used for creating loops\n");
        dictionary.set("if", "Used for creating loops\n");

}
export function usageFunc(input)
{
        input.question('', keyWord => {
                if (keyWord === '')
                {
                        input.close();
                        return;
                }
		if (keyWord === undefined || keyWord === null)
		{
			console.error('ERROR: function usageFunc provide valid key word\n');
			input.close();
			return;
		}
                console.log(dictionary.has(keyWord) === true ? dictionary.get(keyWord) : "ERROR: No such keyword\n");
                usageFunc(input);
        });	
}
