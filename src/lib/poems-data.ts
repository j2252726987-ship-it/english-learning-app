export interface Poem {
  id: string;
  title: string;
  titleCn: string;
  content: string[];
  author?: string;
  level: number; // 1-5 难度级别
  category: 'poem' | 'story' | 'prose';
  tags: string[];
  bgGradient: string;
  icon: string;
}

export const poems: Poem[] = [
  {
    id: 'twinkle-star',
    title: 'Twinkle, Twinkle, Little Star',
    titleCn: '小星星',
    content: [
      'Twinkle, twinkle, little star,',
      'How I wonder what you are!',
      'Up above the world so high,',
      'Like a diamond in the sky.',
      '',
      'Twinkle, twinkle, little star,',
      'How I wonder what you are!'
    ],
    level: 1,
    category: 'poem',
    tags: ['儿歌', '星星', '经典'],
    bgGradient: 'from-yellow-100 via-orange-100 to-pink-100',
    icon: '⭐'
  },
  {
    id: 'rainbow',
    title: 'The Rainbow',
    titleCn: '彩虹',
    content: [
      'Red, and yellow, and pink, and green,',
      'Purple, and orange, and blue.',
      'I can sing a rainbow,',
      'Sing a rainbow,',
      'Sing a rainbow too.'
    ],
    level: 1,
    category: 'poem',
    tags: ['颜色', '彩虹', '儿歌'],
    bgGradient: 'from-red-100 via-yellow-100 to-blue-100',
    icon: '🌈'
  },
  {
    id: 'butterfly',
    title: 'Butterfly, Butterfly',
    titleCn: '蝴蝶飞',
    content: [
      'Butterfly, butterfly,',
      'Fly, fly, fly.',
      'Butterfly, butterfly,',
      'In the sky.',
      '',
      'Butterfly, butterfly,',
      'Up so high.',
      'Butterfly, butterfly,',
      'Say goodbye.'
    ],
    level: 1,
    category: 'poem',
    tags: ['动物', '蝴蝶', '儿歌'],
    bgGradient: 'from-pink-100 via-purple-100 to-blue-100',
    icon: '🦋'
  },
  {
    id: 'happy-day',
    title: 'It is a Happy Day',
    titleCn: '快乐的一天',
    content: [
      'The sun is shining bright,',
      'The birds are in the sky,',
      'I smile at the lovely light,',
      'And watch the clouds go by.',
      '',
      'The flowers bloom so gay,',
      'The world is fresh and new,',
      'I laugh and run and play,',
      'Because I love you too.'
    ],
    level: 2,
    category: 'poem',
    tags: ['天气', '快乐', '自然'],
    bgGradient: 'from-orange-100 via-yellow-100 to-green-100',
    icon: '☀️'
  },
  {
    id: 'little-rabbit',
    title: 'The Little Rabbit',
    titleCn: '小兔子',
    content: [
      'Little rabbit, white and soft,',
      'Hopping through the grass so high.',
      'Wiggle nose and ears aloft,',
      'Watching clouds float in the sky.',
      '',
      'Little rabbit, run and play,',
      'Jumping through the garden gate.',
      'Hop along your happy way,',
      'Before it gets too late.'
    ],
    level: 2,
    category: 'poem',
    tags: ['动物', '兔子', '故事'],
    bgGradient: 'from-white via-pink-50 to-purple-50',
    icon: '🐰'
  },
  {
    id: 'my-family',
    title: 'My Family',
    titleCn: '我的家庭',
    content: [
      'I have a family,',
      'Mom and Dad and me.',
      'We love each other,',
      'As happy as can be.',
      '',
      'Mom is kind and sweet,',
      'Dad is strong and tall.',
      'Together we are happy,',
      'Together we have all.'
    ],
    level: 1,
    category: 'poem',
    tags: ['家庭', '爱', '简单'],
    bgGradient: 'from-blue-100 via-purple-100 to-pink-100',
    icon: '👨‍👩‍👧'
  },
  {
    id: 'morning-song',
    title: 'Good Morning',
    titleCn: '早上好',
    content: [
      'Good morning to you,',
      'Good morning to you.',
      'We are all in our places,',
      'With bright and happy faces.',
      '',
      'Good morning to you,',
      'Good morning to you.',
      'Let us start our happy day,',
      'In a very happy way.'
    ],
    level: 1,
    category: 'poem',
    tags: ['问候', '早晨', '儿歌'],
    bgGradient: 'from-cyan-100 via-blue-100 to-indigo-100',
    icon: '🌅'
  },
  {
    id: 'seasons',
    title: 'The Four Seasons',
    titleCn: '四季歌',
    content: [
      'Spring is green with flowers bright,',
      'Summer brings the warm sunlight.',
      'Autumn leaves turn red and gold,',
      'Winter snow is lovely cold.'
    ],
    level: 2,
    category: 'poem',
    tags: ['季节', '自然', '四季'],
    bgGradient: 'from-green-100 via-yellow-100 to-orange-100',
    icon: '🍂'
  },
  {
    id: 'my-dream',
    title: 'I Have a Dream',
    titleCn: '我的梦想',
    content: [
      'I have a dream, so big and bright,',
      'To touch the stars and reach the light.',
      'I want to fly up in the sky,',
      'Where eagles soar and birds fly high.',
      '',
      'I have a dream, so strong and true,',
      'To make the world brand new.',
      'With love and hope in all I do,',
      'My dreams will surely see me through.'
    ],
    level: 3,
    category: 'poem',
    tags: ['梦想', '励志', '成长'],
    bgGradient: 'from-purple-100 via-pink-100 to-red-100',
    icon: '💫'
  },
  {
    id: 'nature-song',
    title: 'Nature\'s Song',
    titleCn: '自然之歌',
    content: [
      'Listen to the wind blow soft and low,',
      'Hear the river gently flow.',
      'Watch the flowers bloom in spring,',
      'Hear the happy birds sing.',
      '',
      'Nature is a beautiful thing,',
      'To us it makes us want to sing.',
      'Love the earth and all its grace,',
      'In every happy place.'
    ],
    level: 3,
    category: 'poem',
    tags: ['自然', '环保', '诗歌'],
    bgGradient: 'from-green-100 via-teal-100 to-cyan-100',
    icon: '🌿'
  },
  {
    id: 'friendship',
    title: 'A Friend Like You',
    titleCn: '像你这样的朋友',
    content: [
      'A friend like you is hard to find,',
      'You are gentle, you are kind.',
      'You make me smile, you make me laugh,',
      'You fill my heart with happy chaff.',
      '',
      'Together we will play and learn,',
      'Together we will grow and yearn.',
      'For all the joy that friendship brings,',
      'Like a bird with happy wings.'
    ],
    level: 2,
    category: 'poem',
    tags: ['友谊', '朋友', '情感'],
    bgGradient: 'from-pink-100 via-rose-100 to-red-100',
    icon: '💝'
  },
  {
    id: 'magic-world',
    title: 'The Magic World',
    titleCn: '魔法世界',
    content: [
      'In a world of magic bright,',
      'Where stars shine through the night,',
      'Where fairies dance and dragons fly,',
      'And rainbows paint the sky.',
      '',
      'In this world of wonder free,',
      'I want to be, I want to be.',
      'A part of this enchanted land,',
      'Holding magic in my hand.'
    ],
    level: 3,
    category: 'poem',
    tags: ['奇幻', '魔法', '想象'],
    bgGradient: 'from-violet-100 via-purple-100 to-fuchsia-100',
    icon: '✨'
  }
];

// 按类别分组
export const poemsByCategory = {
  poem: poems.filter(p => p.category === 'poem'),
  story: poems.filter(p => p.category === 'story'),
  prose: poems.filter(p => p.category === 'prose')
};

// 按难度分组
export const poemsByLevel = {
  1: poems.filter(p => p.level === 1),
  2: poems.filter(p => p.level === 2),
  3: poems.filter(p => p.level === 3),
  4: poems.filter(p => p.level === 4),
  5: poems.filter(p => p.level === 5)
};

// 获取难度描述
export function getLevelDescription(level: number): string {
  const descriptions: Record<number, string> = {
    1: '入门',
    2: '简单',
    3: '中等',
    4: '较难',
    5: '困难'
  };
  return descriptions[level] || '未知';
}
