import {escapeRegExp} from 'utils';

const matches = {
  '🙂': [
    ':)',
    ':‑)',
    ':]',
    ':-]',
    '=)',
    '=]',
    ':3',
    ':-3',
    '(:',
    '(-:',
    '[:',
    '[-:',
    '(=',
    '[=',
    ':>',
    '<:',
  ],
  '😄': ['^^', '^-^', '^_^', '^o^'],
  '😀': [':D', ':‑D', '=D', '=3'],
  '😆': ['xD', 'x-D', 'XD', 'X=D'],
  '🙁': [':(', ':-(', ':[', ':-['],
  '😢': [":'(", ":'-(", ':,(', ':,-('],
  '😂': [":')", ":'-)", ':,)', ':,-)'],
  '😱': ["D-':", 'D:<', 'D:', 'D=', 'DX'],
  '😮': [':o', ':-o', ':O', ':-O', ':0', ':-0'],
  '😙': [':*', ':-*', ':x'],
  '😉': [';)', ';-)', ';]', ';-]', '*)', '*-)', ';D', ';>'],
  '😛': [':p', ':-p', ':P', ':-P', '=p', '=P', ':b', ':-b'],
  '😝': ['XP', 'X-P', 'xP', 'x-P'],
  '😕': [':/', ':-/', ':-.', '>:\\', ':\\', '=/', '=\\', ':L', '=L', ':S'],
  '😐': [':|', ':-|'],
  '😞': [':$', '://)', '://3'],
  '🤐': [':X', ':-X', ':#', ':-#', ':&', ':-&'],
  '😇': ['o:)', 'o:-)', 'O:)', 'O:-)', '0:)', '0:-)', '0:3', '0:-3'],
  '😈': ['>:)', '>:-)', '}:)', '}:-)', '3:)', '3:-)', '=3:)', '=3:-)', '>;)', '>;3', '>:3', '>:-3'],
  '😎': ['|;‑)', 'B-)', 'B)', 'o:o', '8-)', '8)'],
  '😪': ['|‑O'],
  '😏': [':-J'],
  '😵': ['%)', '%-)'],
  '🤒': [':#', ':-#'],
  '🤨': ["',:-|", "',:-l", 'O.o', 'o.O'],
  '😬': [':E'],
  '❤️': ['<3'],
  '💔': ['</3', '<\\3'],
  '🐧': ['<(“)'],
  '🦈': ['(^^^)'],
  '🤖': [':|]'],
  '👍': ['(y)'],
  '💩': [':poop:'],
};

export const matchTable = Object.keys(matches).reduce((table, emoji) => {
  for (const smiley of matches[emoji]) {
    table.push({smiley, emoji, regex: new RegExp(`(^|\\s)(${escapeRegExp(smiley)})(\\s|$)`, 'g')});
  }
  return table;
}, []);
