/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import 'vs/editor/editor.all';
import 'vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp';
import 'vs/editor/standalone/browser/inspectTokens/inspectTokens';
import 'vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard';
import 'vs/editor/standalone/browser/quickOpen/quickOutline';
import 'vs/editor/standalone/browser/quickOpen/gotoLine';
import 'vs/editor/standalone/browser/quickOpen/quickCommand';
import 'vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast';

import { createMonacoBaseAPI } from 'vs/editor/common/standalone/standaloneBase';
import { createMonacoEditorAPI } from 'vs/editor/standalone/browser/standaloneEditor';
import { createMonacoLanguagesAPI } from 'vs/editor/standalone/browser/standaloneLanguages';
import { EDITOR_DEFAULTS, WrappingIndent } from 'vs/editor/common/config/editorOptions';

// Set defaults for standalone editor
(<any>EDITOR_DEFAULTS).wrappingIndent = WrappingIndent.None;
(<any>EDITOR_DEFAULTS.contribInfo).folding = false;
(<any>EDITOR_DEFAULTS.viewInfo).glyphMargin = false;
(<any>EDITOR_DEFAULTS).autoIndent = false;

let exported = {};
let base = createMonacoBaseAPI();
for (let prop in base) {
	if (base.hasOwnProperty(prop)) {
		exported[prop] = base[prop];
	}
}
exported['editor'] = createMonacoEditorAPI();
exported['languages'] = createMonacoLanguagesAPI();

var global: any = self;
global.monaco = exported;
export const monaco = exported;
