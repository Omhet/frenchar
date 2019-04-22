import * as vs from 'vscode';

class FrenchPut {
    public static replaceLetters() {
        const editor = vs.window.activeTextEditor;

        if (!editor) {
            vs.window.showErrorMessage('There is no open editor');
            return;
        }

        const doc = editor.document;
    }
}

export default FrenchPut;