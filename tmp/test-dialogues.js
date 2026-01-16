// 测试对话数据导出
const dialoguesData = require('/workspace/projects/src/lib/dialogues-data.ts');

console.log('Total dialogues:', dialoguesData.dialogues?.length || 0);
console.log('Dialogues by level:');
for (let i = 1; i <= 5; i++) {
  const count = dialoguesData.dialoguesByLevel[i]?.length || 0;
  console.log(`  Level ${i}: ${count}`);
}

// 显示每个难度的第一个对话标题
for (let i = 1; i <= 5; i++) {
  const levelDialogues = dialoguesData.dialoguesByLevel[i];
  if (levelDialogues && levelDialogues.length > 0) {
    console.log(`Level ${i} first dialogue: ${levelDialogues[0].title}`);
  }
}
