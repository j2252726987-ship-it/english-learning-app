const fs = require('fs');
const content = fs.readFileSync('src/lib/words-data.ts', 'utf8');

// 统计所有单词
const wordMatches = content.matchAll(/\{ word: /g);
const total = Array.from(wordMatches).length;
console.log(`当前总词汇量: ${total}`);
console.log(`目标词汇量: 3000`);
console.log(`需要添加: ${3000 - total}`);
