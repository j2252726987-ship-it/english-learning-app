const fs = require('fs');

// 需要添加的单词列表
const additions = {
  '身体部位分类': [
    { word: 'ankle', cn: '脚踝', emoji: '🦶', ipa: '/ˈæŋkəl/' },
    { word: 'wrist', cn: '手腕', emoji: '🤚', ipa: '/rɪst/' },
    { word: 'elbow', cn: '手肘', emoji: '💪', ipa: '/ˈɛlboʊ/' },
    { word: 'shoulder', cn: '肩膀', emoji: '🤷', ipa: '/ˈʃoʊldər/' },
    { word: 'knee', cn: '膝盖', emoji: '🦵', ipa: '/niː/' },
    { word: 'hip', cn: '髋部', emoji: '🦴', ipa: '/hɪp/' },
    { word: 'waist', cn: '腰', emoji: '⭕', ipa: '/weɪst/' },
    { word: 'chest', cn: '胸部', emoji: '🫁', ipa: '/tʃɛst/' },
    { word: 'back', cn: '背部', emoji: '🔙', ipa: '/bæk/' },
    { word: 'stomach', cn: '胃', emoji: '🥣', ipa: '/ˈstʌmək/' },
    { word: 'throat', cn: '喉咙', emoji: '🗣️', ipa: '/θroʊt/' },
    { word: 'tongue', cn: '舌头', emoji: '👅', ipa: '/tʌŋ/' },
    { word: 'chin', cn: '下巴', emoji: '👇', ipa: '/tʃɪn/' },
    { word: 'forehead', cn: '前额', emoji: '🧠', ipa: '/ˈfɔːrhɛd/' },
    { word: 'cheek', cn: '脸颊', emoji: '😊', ipa: '/tʃiːk/' },
    { word: 'eyebrow', cn: '眉毛', emoji: '🤨', ipa: '/ˈaɪbraʊ/' },
    { word: 'eyelash', cn: '睫毛', emoji: '👁️', ipa: '/ˈaɪlæʃ/' },
    { word: 'nostril', cn: '鼻孔', emoji: '👃', ipa: '/ˈnɑːstrəl/' },
    { word: 'muscle', cn: '肌肉', emoji: '💪', ipa: '/ˈmʌsəl/' },
    { word: 'skeleton', cn: '骨骼', emoji: '🦴', ipa: '/ˈskɛlɪtən/' },
  ],
  '家庭分类': [
    { word: 'aunt', cn: '阿姨', emoji: '👩', ipa: '/ænt/' },
    { word: 'uncle', cn: '叔叔', emoji: '👨', ipa: '/ˈʌŋkəl/' },
    { word: 'niece', cn: '侄女', emoji: '👧', ipa: '/niːs/' },
    { word: 'nephew', cn: '侄子', emoji: '👦', ipa: '/ˈnɛfjuː/' },
    { word: 'cousin', cn: '表兄妹', emoji: '👫', ipa: '/ˈkʌzən/' },
    { word: 'granddaughter', cn: '孙女', emoji: '👧', ipa: '/ˈɡrændˌdɔːtər/' },
    { word: 'grandson', cn: '孙子', emoji: '👦', ipa: '/ˈɡrændˌsʌn/' },
    { word: 'sister-in-law', cn: '嫂子', emoji: '👩', ipa: '/ˈsɪstərɪnˌlɔː/' },
    { word: 'brother-in-law', cn: '姐夫', emoji: '👨', ipa: '/ˈbrʌðərɪnˌlɔː/' },
    { word: 'mother-in-law', cn: '岳母', emoji: '👵', ipa: '/ˈmʌðərɪnˌlɔː/' },
    { word: 'father-in-law', cn: '岳父', emoji: '👴', ipa: '/ˈfɑːðərɪnˌlɔː/' },
    { word: 'stepmother', cn: '继母', emoji: '👩', ipa: '/ˈstɛpˌmʌðər/' },
    { word: 'stepfather', cn: '继父', emoji: '👨', ipa: '/ˈstɛpˌfɑːðər/' },
    { word: 'half-brother', cn: '同父异母兄弟', emoji: '👦', ipa: '/ˈhæfˈbrʌðər/' },
    { word: 'half-sister', cn: '同父异母姐妹', emoji: '👧', ipa: '/ˈhæfˈsɪstər/' },
    { word: 'twin', cn: '双胞胎', emoji: '👶', ipa: '/twɪn/' },
    { word: 'adopted', cn: '收养的', emoji: '👶', ipa: '/əˈdɑːptɪd/' },
    { word: 'foster', cn: '寄养的', emoji: '👶', ipa: '/ˈfɔːstər/' },
    { word: 'godparent', cn: '教父教母', emoji: '👴', ipa: '/ˈɡɑːdˌpɛrənt/' },
    { word: 'ancestor', cn: '祖先', emoji: '📜', ipa: '/ˈænˌsɛstər/' },
  ],
  '天气分类': [
    { word: 'humid', cn: '潮湿', emoji: '💧', ipa: '/ˈhjuːmɪd/' },
    { word: 'dry', cn: '干燥', emoji: '☀️', ipa: '/draɪ/' },
    { word: 'breeze', cn: '微风', emoji: '🌬️', ipa: '/briːz/' },
    { word: 'gale', cn: '大风', emoji: '🌪️', ipa: '/ɡeɪl/' },
    { word: 'hurricane', cn: '飓风', emoji: '🌀', ipa: '/ˈhʌrɪkeɪn/' },
    { word: 'typhoon', cn: '台风', emoji: '🌀', ipa: '/taɪˈfuːn/' },
    { word: 'tornado', cn: '龙卷风', emoji: '🌪️', ipa: '/tɔːrˈneɪdoʊ/' },
    { word: 'thunderstorm', cn: '雷暴', emoji: '⛈️', ipa: '/ˈθʌndərˌstɔːrm/' },
    { word: 'lightning', cn: '闪电', emoji: '⚡', ipa: '/ˈlaɪtnɪŋ/' },
    { word: 'rainbow', cn: '彩虹', emoji: '🌈', ipa: '/ˈreɪnboʊ/' },
    { word: 'fog', cn: '雾', emoji: '🌫️', ipa: '/fɔːɡ/' },
    { word: 'mist', cn: '薄雾', emoji: '🌫️', ipa: '/mɪst/' },
    { word: 'haze', cn: '霾', emoji: '🌫️', ipa: '/heɪz/' },
    { word: 'smog', cn: '烟雾', emoji: '🏭', ipa: '/smɑːɡ/' },
    { word: 'drought', cn: '干旱', emoji: '🏜️', ipa: '/draʊt/' },
    { word: 'flood', cn: '洪水', emoji: '🌊', ipa: '/flʌd/' },
    { word: 'blizzard', cn: '暴风雪', emoji: '❄️', ipa: '/ˈblɪzərd/' },
    { word: 'ice storm', cn: '冰风暴', emoji: '🧊', ipa: '/aɪs stɔːrm/' },
    { word: 'monsoon', cn: '季风', emoji: '🌧️', ipa: '/mɑːnˈsuːn/' },
    { word: 'climate', cn: '气候', emoji: '🌍', ipa: '/ˈklaɪmət/' },
  ]
};

console.log('准备添加的单词:');
Object.keys(additions).forEach(category => {
  console.log(`${category}: ${additions[category].length}个`);
});
const total = Object.values(additions).reduce((sum, words) => sum + words.length, 0);
console.log(`总计: ${total}个单词`);
