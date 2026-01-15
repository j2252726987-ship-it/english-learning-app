const fs = require('fs');
const content = fs.readFileSync('src/lib/words-data.ts', 'utf8');

// 提取所有分类的单词数量
const categoryMatches = content.matchAll(/\/\/ .+? - (\d+)个单词/g);
let total = 0;
let categories = [];

for (const match of categoryMatches) {
  const count = parseInt(match[1]);
  const categoryName = match[0].match(/\/\/ (\S+)/)?.[1] || 'Unknown';
  categories.push({ name: categoryName, count });
  total += count;
}

console.log('当前词汇分布:');
categories.forEach((cat, i) => {
  console.log(`${i + 1}. ${cat.name}: ${cat.count}`);
});

console.log(`\n总计: ${total} 个单词`);
console.log(`目标: 3000 个单词`);
console.log(`还需添加: ${3000 - total} 个单词`);
