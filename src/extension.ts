import * as vscode from 'vscode';
import French from './frenchput';

const wordMap: { [key: string]: string; } = {
	'e\'': 'è',
	'e"': 'é',
	'e^': 'ê',
	'e:': 'ë',
	'E\'': 'È',
	'E"': 'É',
	'E^': 'Ê',
	'E:': 'Ë',
	'a\'': 'à',
	'a^': 'â',
	'A\'': 'À',
	'A^': 'Â',
	'i^': 'î',
	'i:': 'ï',
	'I^': 'Î',
	'I:': 'Ï',
	'o^': 'ô',
	'O^': 'Ô',
	'u\'': 'ù',
	'u^': 'û',
	'u:': 'ü',
	'U\'': 'Ù',
	'U^': 'Û',
	'U:': 'Ü',
};

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "helloworld" is now active!');


	vscode.workspace.onDidChangeTextDocument((e) => {
		const editor = vscode.window.activeTextEditor;
		const doc = e.document;
		const { rangeOffset, rangeLength } = e.contentChanges[0];

		const start = doc.positionAt(rangeOffset - 1);
		const end = doc.positionAt(rangeOffset + rangeLength + 1);
		const range = new vscode.Range(start, end);

		const word = doc.getText(range);

		if (editor && word) {
			vscode.window.showInformationMessage('Found one');
			const replace = wordMap[word];
			if (replace) {
				editor.edit(editBuilder => {
					editBuilder.replace(range, replace);
				});
			}
		}
	});


	// let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {

	// 	vscode.window.showInformationMessage('Hello VS!');
	// 	French.replaceLetters();
	// });

	// context.subscriptions.push(disposable);
}


export function deactivate() { }
