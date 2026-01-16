export interface Song {
  id: string;
  title: string;
  titleCn: string;
  content: string[];
  level: number; // 1-5 难度级别
  category: 'song';
  tags: string[];
  bgGradient: string;
  icon: string;
}

export const songs: Song[] = [
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
    category: 'song',
    tags: ['星星', '经典', '儿歌'],
    bgGradient: 'from-yellow-100 via-orange-100 to-pink-100',
    icon: '⭐'
  },
  {
    id: 'abc-song',
    title: 'ABC Song',
    titleCn: '字母歌',
    content: [
      'A B C D E F G',
      'H I J K L M N O P',
      'Q R S T U V',
      'W X Y and Z',
      '',
      'Now I know my ABCs,',
      'Next time won\'t you sing with me?'
    ],
    level: 1,
    category: 'song',
    tags: ['字母', '学习', '儿歌'],
    bgGradient: 'from-blue-100 via-purple-100 to-pink-100',
    icon: '🔤'
  },
  {
    id: 'old-macdonald',
    title: 'Old MacDonald Had a Farm',
    titleCn: '老麦克唐纳有个农场',
    content: [
      'Old MacDonald had a farm,',
      'E-I-E-I-O!',
      'And on his farm he had a cow,',
      'E-I-E-I-O!',
      'With a moo moo here,',
      'And a moo moo there,',
      'Here a moo, there a moo,',
      'Everywhere a moo moo.',
      'Old MacDonald had a farm,',
      'E-I-E-I-O!'
    ],
    level: 2,
    category: 'song',
    tags: ['农场', '动物', '儿歌'],
    bgGradient: 'from-green-100 via-yellow-100 to-orange-100',
    icon: '🚜'
  },
  {
    id: 'mary-had-little-lamb',
    title: 'Mary Had a Little Lamb',
    titleCn: '玛丽有只小羊羔',
    content: [
      'Mary had a little lamb,',
      'Its fleece was white as snow.',
      'And everywhere that Mary went,',
      'The lamb was sure to go.',
      '',
      'It followed her to school one day,',
      'Which was against the rules.',
      'It made the children laugh and play,',
      'To see a lamb at school.'
    ],
    level: 2,
    category: 'song',
    tags: ['羊', '学校', '儿歌'],
    bgGradient: 'from-pink-100 via-purple-100 to-blue-100',
    icon: '🐑'
  },
  {
    id: 'itsy-bitsy-spider',
    title: 'Itsy Bitsy Spider',
    titleCn: '小蜘蛛',
    content: [
      'The itsy bitsy spider,',
      'Went up the water spout.',
      'Down came the rain,',
      'And washed the spider out.',
      '',
      'Out came the sun,',
      'And dried up all the rain.',
      'And the itsy bitsy spider,',
      'Went up the spout again.'
    ],
    level: 2,
    category: 'song',
    tags: ['蜘蛛', '天气', '儿歌'],
    bgGradient: 'from-gray-100 via-blue-100 to-cyan-100',
    icon: '🕷️'
  },
  {
    id: 'row-row-boat',
    title: 'Row, Row, Row Your Boat',
    titleCn: '划船歌',
    content: [
      'Row, row, row your boat,',
      'Gently down the stream.',
      'Merrily, merrily, merrily, merrily,',
      'Life is but a dream.'
    ],
    level: 1,
    category: 'song',
    tags: ['船', '梦想', '儿歌'],
    bgGradient: 'from-blue-100 via-cyan-100 to-teal-100',
    icon: '🚣'
  },
  {
    id: 'london-bridge',
    title: 'London Bridge Is Falling Down',
    titleCn: '伦敦桥要倒了',
    content: [
      'London Bridge is falling down,',
      'Falling down, falling down.',
      'London Bridge is falling down,',
      'My fair lady.',
      '',
      'Build it up with iron bars,',
      'Iron bars, iron bars.',
      'Build it up with iron bars,',
      'My fair lady.'
    ],
    level: 2,
    category: 'song',
    tags: ['桥梁', '建造', '儿歌'],
    bgGradient: 'from-red-100 via-orange-100 to-yellow-100',
    icon: '🌉'
  },
  {
    id: 'head-shoulders',
    title: 'Head, Shoulders, Knees and Toes',
    titleCn: '头肩膀膝盖脚',
    content: [
      'Head, shoulders, knees and toes,',
      'Knees and toes.',
      'Head, shoulders, knees and toes,',
      'Knees and toes.',
      '',
      'Eyes and ears and mouth and nose,',
      'Head, shoulders, knees and toes,',
      'Knees and toes.'
    ],
    level: 1,
    category: 'song',
    tags: ['身体', '运动', '儿歌'],
    bgGradient: 'from-purple-100 via-pink-100 to-red-100',
    icon: '🎭'
  },
  {
    id: 'hush-little-baby',
    title: 'Hush, Little Baby',
    titleCn: '乖乖睡吧',
    content: [
      'Hush, little baby, don\'t say a word,',
      'Papa\'s gonna buy you a mockingbird.',
      'If that mockingbird won\'t sing,',
      'Papa\'s gonna buy you a diamond ring.',
      '',
      'If that diamond ring turns brass,',
      'Papa\'s gonna buy you a looking glass.',
      'If that looking glass gets broke,',
      'Papa\'s gonna buy you a billy goat.'
    ],
    level: 3,
    category: 'song',
    tags: ['摇篮曲', '睡眠', '儿歌'],
    bgGradient: 'from-indigo-100 via-purple-100 to-pink-100',
    icon: '🌙'
  },
  {
    id: 'bingo',
    title: 'BINGO',
    titleCn: '宾果',
    content: [
      'There was a farmer had a dog,',
      'And Bingo was his name-o.',
      'B-I-N-G-O, B-I-N-G-O, B-I-N-G-O,',
      'And Bingo was his name-o.'
    ],
    level: 2,
    category: 'song',
    tags: ['名字', '狗', '儿歌'],
    bgGradient: 'from-orange-100 via-red-100 to-pink-100',
    icon: '🐕'
  },
  {
    id: 'five-monkeys',
    title: 'Five Little Monkeys',
    titleCn: '五只小猴子',
    content: [
      'Five little monkeys jumping on the bed,',
      'One fell off and bumped his head.',
      'Mama called the doctor,',
      'And the doctor said,',
      'No more monkeys jumping on the bed!'
    ],
    level: 2,
    category: 'song',
    tags: ['猴子', '数字', '儿歌'],
    bgGradient: 'from-yellow-100 via-green-100 to-teal-100',
    icon: '🐒'
  },
  {
    id: 'happy-birthday',
    title: 'Happy Birthday to You',
    titleCn: '生日快乐歌',
    content: [
      'Happy birthday to you,',
      'Happy birthday to you,',
      'Happy birthday dear friend,',
      'Happy birthday to you!'
    ],
    level: 1,
    category: 'song',
    tags: ['生日', '庆祝', '儿歌'],
    bgGradient: 'from-pink-100 via-purple-100 to-indigo-100',
    icon: '🎂'
  },
  {
    id: 'rain-rain-go-away',
    title: 'Rain, Rain, Go Away',
    titleCn: '雨啊雨快走开',
    content: [
      'Rain, rain, go away,',
      'Come again another day.',
      'Little children want to play,',
      'Rain, rain, go away.'
    ],
    level: 1,
    category: 'song',
    tags: ['天气', '游戏', '儿歌'],
    bgGradient: 'from-blue-100 via-gray-100 to-indigo-100',
    icon: '🌧️'
  },
  {
    id: 'wheels-bus',
    title: 'The Wheels on the Bus',
    titleCn: '巴士上的轮子',
    content: [
      'The wheels on the bus go round and round,',
      'Round and round, round and round.',
      'The wheels on the bus go round and round,',
      'All through the town.',
      '',
      'The wipers on the bus go swish, swish, swish,',
      'Swish, swish, swish, swish, swish, swish.',
      'The wipers on the bus go swish, swish, swish,',
      'All through the town.'
    ],
    level: 2,
    category: 'song',
    tags: ['巴士', '交通', '儿歌'],
    bgGradient: 'from-yellow-100 via-orange-100 to-red-100',
    icon: '🚌'
  },
  {
    id: 'baa-baa-black-sheep',
    title: 'Baa, Baa, Black Sheep',
    titleCn: '咩咩黑绵羊',
    content: [
      'Baa, baa, black sheep,',
      'Have you any wool?',
      'Yes, sir, yes, sir,',
      'Three bags full.',
      '',
      'One for the master,',
      'One for the dame,',
      'And one for the little boy,',
      'Who lives down the lane.'
    ],
    level: 2,
    category: 'song',
    tags: ['绵羊', '分享', '儿歌'],
    bgGradient: 'from-gray-100 via-slate-100 to-zinc-100',
    icon: '🐑'
  },
  {
    id: 'humpty-dumpty',
    title: 'Humpty Dumpty',
    titleCn: '矮胖子',
    content: [
      'Humpty Dumpty sat on a wall,',
      'Humpty Dumpty had a great fall.',
      'All the king\'s horses and all the king\'s men,',
      'Couldn\'t put Humpty together again.'
    ],
    level: 2,
    category: 'song',
    tags: ['故事', '童谣', '儿歌'],
    bgGradient: 'from-orange-100 via-amber-100 to-yellow-100',
    icon: '🥚'
  },
  {
    id: 'jack-jill',
    title: 'Jack and Jill',
    titleCn: '杰克和吉尔',
    content: [
      'Jack and Jill went up the hill,',
      'To fetch a pail of water.',
      'Jack fell down and broke his crown,',
      'And Jill came tumbling after.'
    ],
    level: 2,
    category: 'song',
    tags: ['水井', '朋友', '儿歌'],
    bgGradient: 'from-green-100 via-emerald-100 to-teal-100',
    icon: '⛰️'
  },
  {
    id: 'ring-ring-roses',
    title: 'Ring Around the Rosie',
    titleCn: '玫瑰圈',
    content: [
      'Ring around the rosie,',
      'A pocket full of posies.',
      'Ashes, ashes, we all fall down!'
    ],
    level: 1,
    category: 'song',
    tags: ['游戏', '花朵', '儿歌'],
    bgGradient: 'from-pink-100 via-rose-100 to-red-100',
    icon: '🌹'
  },
  {
    id: 'rock-bye-baby',
    title: 'Rock-a-bye Baby',
    titleCn: '宝宝乖乖睡',
    content: [
      'Rock-a-bye baby, on the treetop.',
      'When the wind blows, the cradle will rock.',
      'When the bough breaks, the cradle will fall,',
      'And down will come baby, cradle and all.'
    ],
    level: 3,
    category: 'song',
    tags: ['摇篮曲', '睡眠', '儿歌'],
    bgGradient: 'from-slate-100 via-blue-100 to-indigo-100',
    icon: '👶'
  },
  {
    id: 'incy-wincy',
    title: 'Incy Wincy Spider',
    titleCn: '印西小蜘蛛',
    content: [
      'Incy wincy spider,',
      'Climbed up the water spout.',
      'Down came the rain,',
      'And washed poor Incy out.',
      '',
      'Out came the sun,',
      'And dried up all the rain.',
      'And Incy wincy spider,',
      'Climbed up the spout again.'
    ],
    level: 2,
    category: 'song',
    tags: ['蜘蛛', '坚持', '儿歌'],
    bgGradient: 'from-blue-100 via-cyan-100 to-teal-100',
    icon: '🕸️'
  },
  {
    id: 'three-blind-mice',
    title: 'Three Blind Mice',
    titleCn: '三只瞎老鼠',
    content: [
      'Three blind mice, three blind mice,',
      'See how they run, see how they run.',
      'They all ran after the farmer\'s wife,',
      'She cut off their tails with a carving knife.',
      'Did you ever see such a thing in your life,',
      'As three blind mice?'
    ],
    level: 3,
    category: 'song',
    tags: ['老鼠', '童话', '儿歌'],
    bgGradient: 'from-gray-100 via-neutral-100 to-stone-100',
    icon: '🐭'
  },
  {
    id: 'pop-goes-weasel',
    title: 'Pop Goes the Weasel',
    titleCn: '黄鼠狼逃走了',
    content: [
      'All around the mulberry bush,',
      'The monkey chased the weasel.',
      'The monkey thought \'twas all in fun,',
      'Pop! goes the weasel.'
    ],
    level: 3,
    category: 'song',
    tags: ['动物', '幽默', '儿歌'],
    bgGradient: 'from-amber-100 via-orange-100 to-yellow-100',
    icon: '🦦'
  },
  {
    id: 'old-king-cole',
    title: 'Old King Cole',
    titleCn: '老国王科尔',
    content: [
      'Old King Cole was a merry old soul,',
      'And a merry old soul was he.',
      'He called for his pipe, and he called for his bowl,',
      'And he called for his fiddlers three.'
    ],
    level: 3,
    category: 'song',
    tags: ['国王', '音乐', '儿歌'],
    bgGradient: 'from-purple-100 via-violet-100 to-fuchsia-100',
    icon: '👑'
  },
  {
    id: 'little-boy-blue',
    title: 'Little Boy Blue',
    titleCn: '小蓝男孩',
    content: [
      'Little Boy Blue, come blow your horn,',
      'The sheep\'s in the meadow, the cow\'s in the corn.',
      'Where is the boy who looks after the sheep?',
      'He\'s under the haystack, fast asleep.'
    ],
    level: 2,
    category: 'song',
    tags: ['男孩', '羊', '儿歌'],
    bgGradient: 'from-blue-100 via-sky-100 to-cyan-100',
    icon: '🔵'
  },
  {
    id: 'little-miss-muffet',
    title: 'Little Miss Muffet',
    titleCn: '小玛菲特小姐',
    content: [
      'Little Miss Muffet,',
      'Sat on a tuffet,',
      'Eating her curds and whey.',
      'Along came a spider,',
      'Who sat down beside her,',
      'And frightened Miss Muffet away.'
    ],
    level: 2,
    category: 'song',
    tags: ['蜘蛛', '女孩', '儿歌'],
    bgGradient: 'from-pink-100 via-rose-100 to-fuchsia-100',
    icon: '👧'
  },
  {
    id: 'georgie-porgie',
    title: 'Georgie Porgie',
    titleCn: '乔治波吉',
    content: [
      'Georgie Porgie, pudding and pie,',
      'Kissed the girls and made them cry.',
      'When the boys came out to play,',
      'Georgie Porgie ran away.'
    ],
    level: 2,
    category: 'song',
    tags: ['男孩', '幽默', '儿歌'],
    bgGradient: 'from-yellow-100 via-amber-100 to-orange-100',
    icon: '👦'
  },
  {
    id: 'polly-put-kettle',
    title: 'Polly Put the Kettle On',
    titleCn: '波莉烧水',
    content: [
      'Polly put the kettle on,',
      'Polly put the kettle on,',
      'Polly put the kettle on,',
      'We\'ll all have tea.',
      '',
      'Sukey take it off again,',
      'Sukey take it off again,',
      'Sukey take it off again,',
      'They\'ve all gone away.'
    ],
    level: 2,
    category: 'song',
    tags: ['茶', '家庭', '儿歌'],
    bgGradient: 'from-rose-100 via-pink-100 to-red-100',
    icon: '🫖'
  },
  {
    id: 'hey-diddle-diddle',
    title: 'Hey Diddle Diddle',
    titleCn: '嘿迪德尔',
    content: [
      'Hey diddle diddle,',
      'The cat and the fiddle,',
      'The cow jumped over the moon.',
      'The little dog laughed,',
      'To see such sport,',
      'And the dish ran away with the spoon.'
    ],
    level: 2,
    category: 'song',
    tags: ['幻想', '动物', '儿歌'],
    bgGradient: 'from-indigo-100 via-violet-100 to-purple-100',
    icon: '🌙'
  },
  {
    id: 'star-light',
    title: 'Star Light, Star Bright',
    titleCn: '星星亮',
    content: [
      'Star light, star bright,',
      'First star I see tonight.',
      'I wish I may, I wish I might,',
      'Have the wish I wish tonight.'
    ],
    level: 1,
    category: 'song',
    tags: ['星星', '愿望', '儿歌'],
    bgGradient: 'from-yellow-100 via-amber-100 to-orange-100',
    icon: '✨'
  },
  {
    id: 'simple-simon',
    title: 'Simple Simon',
    titleCn: '单纯西蒙',
    content: [
      'Simple Simon met a pieman,',
      'Going to the fair.',
      'Says Simple Simon to the pieman,',
      'Let me taste your ware.'
    ],
    level: 3,
    category: 'song',
    tags: ['交易', '男孩', '儿歌'],
    bgGradient: 'from-orange-100 via-red-100 to-pink-100',
    icon: '🥧'
  },
  {
    id: 'little-jack-horner',
    title: 'Little Jack Horner',
    titleCn: '小杰克霍纳',
    content: [
      'Little Jack Horner,',
      'Sat in the corner,',
      'Eating a Christmas pie.',
      'He put in his thumb,',
      'And pulled out a plum,',
      'And said, "What a good boy am I!"'
    ],
    level: 2,
    category: 'song',
    tags: ['食物', '男孩', '儿歌'],
    bgGradient: 'from-red-100 via-orange-100 to-yellow-100',
    icon: '🍐'
  },
  {
    id: 'doctor-foster',
    title: 'Doctor Foster',
    titleCn: '福斯特医生',
    content: [
      'Doctor Foster went to Gloucester,',
      'In a shower of rain.',
      'He stepped in a puddle,',
      'Right up to his middle,',
      'And never went there again.'
    ],
    level: 2,
    category: 'song',
    tags: ['医生', '天气', '儿歌'],
    bgGradient: 'from-cyan-100 via-blue-100 to-indigo-100',
    icon: '🩺'
  },
  {
    id: 'one-two-buckle-shoe',
    title: 'One, Two, Buckle My Shoe',
    titleCn: '一二扣鞋扣',
    content: [
      'One, two, buckle my shoe.',
      'Three, four, knock at the door.',
      'Five, six, pick up sticks.',
      'Seven, eight, lay them straight.',
      'Nine, ten, a big fat hen.'
    ],
    level: 1,
    category: 'song',
    tags: ['数字', '节奏', '儿歌'],
    bgGradient: 'from-purple-100 via-pink-100 to-red-100',
    icon: '👟'
  },
  {
    id: 'lady-bug',
    title: 'Ladybug, Ladybug',
    titleCn: '瓢虫',
    content: [
      'Ladybug, ladybug,',
      'Fly away home.',
      'Your house is on fire,',
      'And your children are gone.'
    ],
    level: 2,
    category: 'song',
    tags: ['昆虫', '自然', '儿歌'],
    bgGradient: 'from-red-100 via-orange-100 to-yellow-100',
    icon: '🐞'
  },
  {
    id: 'sleeping-beauty',
    title: 'Sleep, Baby, Sleep',
    titleCn: '睡吧宝贝',
    content: [
      'Sleep, baby, sleep,',
      'On the clouds so deep.',
      'The moon is watching,',
      'The stars are peeping.',
      'Sleep, baby, sleep,',
      'While the world is sleeping.'
    ],
    level: 1,
    category: 'song',
    tags: ['摇篮曲', '睡眠', '儿歌'],
    bgGradient: 'from-indigo-100 via-purple-100 to-blue-100',
    icon: '😴'
  },
  {
    id: 'morning-has-broken',
    title: 'Morning Has Broken',
    titleCn: '早晨已破晓',
    content: [
      'Morning has broken,',
      'Like the first morning.',
      'Blackbird has spoken,',
      'Like the first bird.',
      '',
      'Praise for the singing,',
      'Praise for the morning.',
      'Praise for them springing,',
      'Fresh from the word.'
    ],
    level: 3,
    category: 'song',
    tags: ['早晨', '自然', '儿歌'],
    bgGradient: 'from-orange-100 via-yellow-100 to-green-100',
    icon: '🌄'
  },
  {
    id: 'this-old-man',
    title: 'This Old Man',
    titleCn: '这位老人',
    content: [
      'This old man, he played one,',
      'He played knick-knack on his thumb.',
      'With a knick-knack paddywhack,',
      'Give a dog a bone,',
      'This old man came rolling home.'
    ],
    level: 2,
    category: 'song',
    tags: ['老人', '节奏', '儿歌'],
    bgGradient: 'from-amber-100 via-orange-100 to-red-100',
    icon: '👴'
  },
  {
    id: 'skidamarink',
    title: 'Skidamarink',
    titleCn: '我爱你们',
    content: [
      'Skidamarink a dink a dink,',
      'Skidamarink a doo,',
      'I love you.',
      '',
      'Skidamarink a dink a dink,',
      'Skidamarink a doo,',
      'I love you.',
      '',
      'I love you in the morning,',
      'And in the afternoon.',
      'I love you in the evening,',
      'And underneath the moon.',
      '',
      'Skidamarink a dink a dink,',
      'Skidamarink a doo,',
      'I love you.'
    ],
    level: 1,
    category: 'song',
    tags: ['爱', '家庭', '儿歌'],
    bgGradient: 'from-pink-100 via-rose-100 to-red-100',
    icon: '💕'
  },
  {
    id: 'apples-bananas',
    title: 'Apples and Bananas',
    titleCn: '苹果和香蕉',
    content: [
      'I like to eat, eat, eat apples and bananas.',
      'I like to eat, eat, eat apples and bananas.',
      '',
      'I like to ate, ate, ate ay-ples and ba-nay-nays.',
      'I like to ate, ate, ate ay-ples and ba-nay-nays.'
    ],
    level: 2,
    category: 'song',
    tags: ['食物', '发音', '儿歌'],
    bgGradient: 'from-yellow-100 via-green-100 to-emerald-100',
    icon: '🍎'
  },
  {
    id: 'five-ducks',
    title: 'Five Little Ducks',
    titleCn: '五只小鸭子',
    content: [
      'Five little ducks went out one day,',
      'Over the hill and far away.',
      'Mother duck said, "Quack, quack, quack, quack."',
      'But only four little ducks came back.'
    ],
    level: 2,
    category: 'song',
    tags: ['鸭子', '数字', '儿歌'],
    bgGradient: 'from-cyan-100 via-blue-100 to-indigo-100',
    icon: '🦆'
  },
  {
    id: 'if-youre-happy',
    title: 'If You\'re Happy and You Know It',
    titleCn: '如果你快乐你就拍拍手',
    content: [
      'If you\'re happy and you know it, clap your hands.',
      'If you\'re happy and you know it, clap your hands.',
      'If you\'re happy and you know it,',
      'Then your face will surely show it.',
      'If you\'re happy and you know it, clap your hands.'
    ],
    level: 2,
    category: 'song',
    tags: ['快乐', '动作', '儿歌'],
    bgGradient: 'from-yellow-100 via-orange-100 to-pink-100',
    icon: '👏'
  },
  {
    id: 'hokey-pokey',
    title: 'The Hokey Pokey',
    titleCn: '摇摆舞',
    content: [
      'You put your right foot in,',
      'You put your right foot out.',
      'You put your right foot in,',
      'And you shake it all about.',
      'You do the Hokey Pokey,',
      'And you turn yourself around.',
      'That\'s what it\'s all about!'
    ],
    level: 3,
    category: 'song',
    tags: ['舞蹈', '身体', '儿歌'],
    bgGradient: 'from-purple-100 via-pink-100 to-red-100',
    icon: '💃'
  },
  {
    id: 'ten-green-bottles',
    title: 'Ten Green Bottles',
    titleCn: '十个绿瓶子',
    content: [
      'Ten green bottles hanging on the wall,',
      'Ten green bottles hanging on the wall.',
      'And if one green bottle should accidentally fall,',
      'There\'ll be nine green bottles hanging on the wall.'
    ],
    level: 2,
    category: 'song',
    tags: ['数字', '递减', '儿歌'],
    bgGradient: 'from-green-100 via-emerald-100 to-teal-100',
    icon: '🍾'
  },
  {
    id: 'ten-indians',
    title: 'Ten Little Indians',
    titleCn: '十个小印第安人',
    content: [
      'One little, two little, three little Indians,',
      'Four little, five little, six little Indians,',
      'Seven little, eight little, nine little Indians,',
      'Ten little Indian boys.'
    ],
    level: 2,
    category: 'song',
    tags: ['数字', '递增', '儿歌'],
    bgGradient: 'from-orange-100 via-red-100 to-pink-100',
    icon: '🏹'
  },
  {
    id: 'five-speckled',
    title: 'Five Little Speckled Frogs',
    titleCn: '五只斑点青蛙',
    content: [
      'Five little speckled frogs,',
      'Sat on a speckled log,',
      'Eating some most delicious bugs.',
      'Yum! Yum!',
      '',
      'One jumped into the pool,',
      'Where it was nice and cool.',
      'Now there are four green speckled frogs.',
      'Glub! Glub!'
    ],
    level: 2,
    category: 'song',
    tags: ['青蛙', '数字', '儿歌'],
    bgGradient: 'from-green-100 via-lime-100 to-emerald-100',
    icon: '🐸'
  },
  {
    id: 'baby-shark',
    title: 'Baby Shark',
    titleCn: '小鲨鱼',
    content: [
      'Baby shark, doo doo doo doo doo doo.',
      'Baby shark, doo doo doo doo doo doo.',
      'Baby shark, doo doo doo doo doo doo.',
      'Baby shark!'
    ],
    level: 1,
    category: 'song',
    tags: ['鲨鱼', '简单', '儿歌'],
    bgGradient: 'from-blue-100 via-cyan-100 to-teal-100',
    icon: '🦈'
  },
  {
    id: 'ant-go-marching',
    title: 'The Ants Go Marching',
    titleCn: '蚂蚁行军',
    content: [
      'The ants go marching one by one, hurrah, hurrah.',
      'The ants go marching one by one, hurrah, hurrah.',
      'The ants go marching one by one,',
      'The little one stops to suck his thumb.',
      'And they all go marching down, to the ground,',
      'To get out, of the rain, boom boom boom.'
    ],
    level: 3,
    category: 'song',
    tags: ['蚂蚁', '行军', '儿歌'],
    bgGradient: 'from-orange-100 via-amber-100 to-yellow-100',
    icon: '🐜'
  },
  {
    id: 'down-baby',
    title: 'Down by the Bay',
    titleCn: '在海湾边',
    content: [
      'Down by the bay,',
      'Where the watermelons grow,',
      'Back to my home,',
      'I dare not go.',
      'For if I do,',
      'My mother will say,',
      "Did you ever see a bear, combing his hair, down by the bay?"
    ],
    level: 3,
    category: 'song',
    tags: ['押韵', '幽默', '儿歌'],
    bgGradient: 'from-blue-100 via-indigo-100 to-purple-100',
    icon: '🍉'
  },
  {
    id: 'over-river',
    title: 'Over the River and Through the Woods',
    titleCn: '穿过河流和树林',
    content: [
      'Over the river and through the woods,',
      'To grandmother\'s house we go.',
      'The horse knows the way to carry the sleigh,',
      'Through white and drifted snow.'
    ],
    level: 3,
    category: 'song',
    tags: ['旅行', '冬天', '儿歌'],
    bgGradient: 'from-white via-blue-50 to-cyan-50',
    icon: '🛷'
  },
  {
    id: 'puff-magic',
    title: 'Puff, the Magic Dragon',
    titleCn: '魔法龙帕夫',
    content: [
      'Puff, the magic dragon, lived by the sea,',
      'And frolicked in the autumn mist in a land called Honalee.',
      'Little Jackie Paper loved that rascal Puff,',
      'And brought him strings and sealing wax and other fancy stuff.'
    ],
    level: 4,
    category: 'song',
    tags: ['龙', '友谊', '儿歌'],
    bgGradient: 'from-green-100 via-teal-100 to-cyan-100',
    icon: '🐉'
  },
  {
    id: 'zip-a-dee-doo',
    title: 'Zip-a-Dee-Doo-Dah',
    titleCn: '快乐无忧',
    content: [
      'Zip-a-dee-doo-dah, zip-a-dee-ay,',
      'My, oh my, what a wonderful day!',
      'Plenty of sunshine heading my way,',
      'Zip-a-dee-doo-dah, zip-a-dee-ay!'
    ],
    level: 2,
    category: 'song',
    tags: ['快乐', '阳光', '儿歌'],
    bgGradient: 'from-yellow-100 via-amber-100 to-orange-100',
    icon: '☀️'
  },
  {
    id: 'small-world',
    title: 'It\'s a Small World',
    titleCn: '这是一个小世界',
    content: [
      'It\'s a world of laughter, a world of tears.',
      'It\'s a world of hopes and a world of fears.',
      'There\'s so much that we share,',
      'That it\'s time we\'re aware,',
      'It\'s a small world after all.'
    ],
    level: 3,
    category: 'song',
    tags: ['和平', '友谊', '儿歌'],
    bgGradient: 'from-pink-100 via-purple-100 to-blue-100',
    icon: '🌍'
  },
  {
    id: 'you-are-my-sunshine',
    title: 'You Are My Sunshine',
    titleCn: '你是我的阳光',
    content: [
      'You are my sunshine, my only sunshine.',
      'You make me happy when skies are gray.',
      'You\'ll never know dear, how much I love you.',
      'Please don\'t take my sunshine away.'
    ],
    level: 2,
    category: 'song',
    tags: ['爱', '温暖', '儿歌'],
    bgGradient: 'from-yellow-100 via-orange-100 to-red-100',
    icon: '🌞'
  },
  {
    id: 'edelweiss',
    title: 'Edelweiss',
    titleCn: '雪绒花',
    content: [
      'Edelweiss, Edelweiss,',
      'Every morning you greet me.',
      'Small and white, clean and bright,',
      'You look happy to meet me.',
      '',
      'Blossom of snow may you bloom and grow,',
      'Bloom and grow forever.',
      'Edelweiss, Edelweiss,',
      'Bless my homeland forever.'
    ],
    level: 3,
    category: 'song',
    tags: ['花朵', '祖国', '儿歌'],
    bgGradient: 'from-white via-gray-50 to-slate-50',
    icon: '🏔️'
  },
  {
    id: 'do-re-mi',
    title: 'Do-Re-Mi',
    titleCn: '哆来咪',
    content: [
      'Doe, a deer, a female deer.',
      'Ray, a drop of golden sun.',
      'Me, a name I call myself.',
      'Far, a long long way to run.',
      '',
      'Sew, a needle pulling thread.',
      'La, a note to follow Sew.',
      'Tea, a drink with jam and bread.',
      'That will bring us back to Do.'
    ],
    level: 3,
    category: 'song',
    tags: ['音乐', '学习', '儿歌'],
    bgGradient: 'from-purple-100 via-pink-100 to-red-100',
    icon: '🎵'
  },
  {
    id: 'my-favorite-things',
    title: 'My Favorite Things',
    titleCn: '我最喜欢的事物',
    content: [
      'Raindrops on roses and whiskers on kittens,',
      'Bright copper kettles and warm woolen mittens.',
      'Brown paper packages tied up with strings,',
      'These are a few of my favorite things.'
    ],
    level: 4,
    category: 'song',
    tags: ['喜欢', '幸福', '儿歌'],
    bgGradient: 'from-pink-100 via-rose-100 to-red-100',
    icon: '🎀'
  },
  {
    id: 'climb-mountain',
    title: 'Climb Ev\'ry Mountain',
    titleCn: '攀登每一座山',
    content: [
      'Climb every mountain,',
      'Search high and low.',
      'Follow every byway,',
      'Every path you know.',
      '',
      'Climb every mountain,',
      'Ford every stream.',
      'Follow every rainbow,',
      'Till you find your dream.'
    ],
    level: 4,
    category: 'song',
    tags: ['梦想', '坚持', '儿歌'],
    bgGradient: 'from-blue-100 via-indigo-100 to-purple-100',
    icon: '⛰️'
  },
  {
    id: 'sing-song',
    title: 'Singin\' in the Rain',
    titleCn: '雨中歌唱',
    content: [
      'I\'m singing in the rain,',
      'Just singing in the rain.',
      'What a glorious feeling,',
      'I\'m happy again.',
      'I\'m laughing at clouds,',
      'So dark up above,',
      'The sun\'s in my heart,',
      'And I\'m ready for love.'
    ],
    level: 4,
    category: 'song',
    tags: ['快乐', '雨', '儿歌'],
    bgGradient: 'from-blue-100 via-cyan-100 to-teal-100',
    icon: '🌧️'
  },
  {
    id: 'once-catch-lion',
    title: 'Once I Caught a Fish Alive',
    titleCn: '我抓到一条鱼',
    content: [
      'One, two, three, four, five,',
      'Once I caught a fish alive.',
      'Six, seven, eight, nine, ten,',
      'Then I let it go again.',
      '',
      'Why did you let it go?',
      'Because it bit my finger so.',
      'Which finger did it bite?',
      'This little finger on the right.'
    ],
    level: 2,
    category: 'song',
    tags: ['数字', '鱼', '儿歌'],
    bgGradient: 'from-blue-100 via-cyan-100 to-teal-100',
    icon: '🐟'
  },
  {
    id: 'three-little-kittens',
    title: 'Three Little Kittens',
    titleCn: '三只小猫',
    content: [
      'Three little kittens lost their mittens,',
      'And they began to cry.',
      'Oh, mother dear, we sadly fear,',
      'That we have lost our mittens.',
      '',
      'What, lost your mittens, you naughty kittens!',
      'Then you shall have no pie.',
      'Meow, meow, meow, meow.',
      'Then you shall have no pie.'
    ],
    level: 3,
    category: 'song',
    tags: ['猫', '责任', '儿歌'],
    bgGradient: 'from-orange-100 via-amber-100 to-yellow-100',
    icon: '🐱'
  },
  {
    id: 'peter-peter',
    title: 'Peter Peter Pumpkin Eater',
    titleCn: '彼得吃南瓜的人',
    content: [
      'Peter, Peter, pumpkin eater,',
      'Had a wife and couldn\'t keep her.',
      'He put her in a pumpkin shell,',
      'And there he kept her very well.'
    ],
    level: 3,
    category: 'song',
    tags: ['彼得', '南瓜', '儿歌'],
    bgGradient: 'from-orange-100 via-yellow-100 to-green-100',
    icon: '🎃'
  },
  {
    id: 'three-bears',
    title: 'The Three Bears',
    titleCn: '三只熊',
    content: [
      'Three bears went out to walk,',
      'Walk, walk, walk.',
      'Three bears went out to walk,',
      'On a lovely day.',
      '',
      'One saw a bee, and he ran up a tree.',
      'One saw a bee, and he ran up a tree.',
      'And when he came down, it was time to go home.',
      'Home, home, home.'
    ],
    level: 2,
    category: 'song',
    tags: ['熊', '走路', '儿歌'],
    bgGradient: 'from-amber-100 via-orange-100 to-red-100',
    icon: '🐻'
  },
  {
    id: 'bought-me-cat',
    title: 'I Bought Me a Cat',
    titleCn: '我买了只猫',
    content: [
      'I bought me a cat, and the cat pleased me.',
      'I fed my cat under yonder tree.',
      'Cat goes fiddle-i-fee.',
      '',
      'I bought me a hen, and the hen pleased me.',
      'I fed my hen under yonder tree.',
      'Hen goes chimmy-chuck, chimmy-chuck, cat goes fiddle-i-fee.'
    ],
    level: 3,
    category: 'song',
    tags: ['动物', '农场', '儿歌'],
    bgGradient: 'from-red-100 via-orange-100 to-yellow-100',
    icon: '🐓'
  },
  {
    id: 'frog-went-court',
    title: 'Frog Went A-Courtin\'',
    titleCn: '青蛙去求婚',
    content: [
      'Frog went a-courtin\' and he did ride, uh-huh.',
      'Frog went a-courtin\' and he did ride, uh-huh.',
      'Sword and pistol by his side, uh-huh, uh-huh, uh-huh.'
    ],
    level: 4,
    category: 'song',
    tags: ['青蛙', '求婚', '儿歌'],
    bgGradient: 'from-green-100 via-emerald-100 to-teal-100',
    icon: '🐸'
  },
  {
    id: 'barnyard-dance',
    title: 'Barnyard Dance',
    titleCn: '农场舞会',
    content: [
      'Stomp your feet, clap your hands.',
      'Everybody ready for a barnyard dance.',
      'Bow to the horse, bow to the cow.',
      'Twirl with the pig if you know how.'
    ],
    level: 2,
    category: 'song',
    tags: ['舞蹈', '农场', '儿歌'],
    bgGradient: 'from-yellow-100 via-green-100 to-emerald-100',
    icon: '🎪'
  },
  {
    id: 'animal-fair',
    title: 'The Animal Fair',
    titleCn: '动物集市',
    content: [
      'We went to the animal fair,',
      'The birds and the beasts were there.',
      'The big baboon by the light of the moon,',
      'Was combing his hair.',
      '',
      'The funny little monk he sat on the trunk,',
      'And fell in love with a little skunk.'
    ],
    level: 3,
    category: 'song',
    tags: ['动物', '集市', '儿歌'],
    bgGradient: 'from-orange-100 via-amber-100 to-yellow-100',
    icon: '🎪'
  },
  {
    id: 'elephant',
    title: 'The Elephant',
    titleCn: '大象',
    content: [
      'The elephant goes like this and that,',
      'He\'s terrible wide and he\'s terrible fat.',
      'He has no fingers, he has no toes,',
      'But goodness gracious, what a nose!'
    ],
    level: 2,
    category: 'song',
    tags: ['大象', '身体', '儿歌'],
    bgGradient: 'from-gray-100 via-slate-100 to-zinc-100',
    icon: '🐘'
  },
  {
    id: 'teddy-bear',
    title: 'Teddy Bear, Teddy Bear',
    titleCn: '泰迪熊',
    content: [
      'Teddy bear, teddy bear, turn around.',
      'Teddy bear, teddy bear, touch the ground.',
      'Teddy bear, teddy bear, shine your shoes.',
      'Teddy bear, teddy bear, tie your shoes.'
    ],
    level: 1,
    category: 'song',
    tags: ['熊', '动作', '儿歌'],
    bgGradient: 'from-amber-100 via-orange-100 to-yellow-100',
    icon: '🧸'
  },
  {
    id: 'polly-wolly',
    title: 'Polly Wolly Doodle',
    titleCn: '波莉沃利杜朵',
    content: [
      'Oh I went down south for to see my Sal,',
      'Singing Polly wolly doodle all the day.',
      'My Sal she is a spunky girl,',
      'Singing Polly wolly doodle all the day.'
    ],
    level: 3,
    category: 'song',
    tags: ['女孩', '旅行', '儿歌'],
    bgGradient: 'from-pink-100 via-rose-100 to-red-100',
    icon: '👒'
  },
  {
    id: 'shepherd',
    title: 'The Shepherd\'s Call',
    titleCn: '牧羊人的呼唤',
    content: [
      'Little Bo-Peep has lost her sheep,',
      'And doesn\'t know where to find them.',
      'Leave them alone, and they\'ll come home,',
      'Wagging their tails behind them.'
    ],
    level: 2,
    category: 'song',
    tags: ['羊', '女孩', '儿歌'],
    bgGradient: 'from-pink-100 via-purple-100 to-blue-100',
    icon: '🐑'
  },
  {
    id: 'muffin-man',
    title: 'The Muffin Man',
    titleCn: '松饼人',
    content: [
      'Oh, do you know the muffin man,',
      'The muffin man, the muffin man?',
      'Oh, do you know the muffin man,',
      'Who lives on Drury Lane?'
    ],
    level: 2,
    category: 'song',
    tags: ['食物', '人物', '儿歌'],
    bgGradient: 'from-amber-100 via-yellow-100 to-orange-100',
    icon: '🧁'
  },
  {
    id: 'grand-duke-york',
    title: 'The Grand Old Duke of York',
    titleCn: '约克大公爵',
    content: [
      'Oh, the grand old Duke of York,',
      'He had ten thousand men.',
      'He marched them up to the top of the hill,',
      'And he marched them down again.',
      '',
      'And when they were up, they were up.',
      'And when they were down, they were down.',
      'And when they were only half-way up,',
      'They were neither up nor down.'
    ],
    level: 3,
    category: 'song',
    tags: ['公爵', '行军', '儿歌'],
    bgGradient: 'from-red-100 via-orange-100 to-yellow-100',
    icon: '🎖️'
  },
  {
    id: 'hot-cross',
    title: 'Hot Cross Buns',
    titleCn: '热十字面包',
    content: [
      'Hot cross buns, hot cross buns.',
      'One a penny, two a penny, hot cross buns.',
      'If you have no daughters, give them to your sons.',
      'One a penny, two a penny, hot cross buns.'
    ],
    level: 2,
    category: 'song',
    tags: ['面包', '复活节', '儿歌'],
    bgGradient: 'from-amber-100 via-orange-100 to-yellow-100',
    icon: '🥐'
  },
  {
    id: 'pat-cake',
    title: 'Pat-a-Cake',
    titleCn: '做蛋糕',
    content: [
      'Pat-a-cake, pat-a-cake, baker\'s man.',
      'Bake me a cake as fast as you can.',
      'Pat it and prick it and mark it with B.',
      'Put it in the oven for baby and me.'
    ],
    level: 1,
    category: 'song',
    tags: ['蛋糕', '烹饪', '儿歌'],
    bgGradient: 'from-orange-100 via-amber-100 to-yellow-100',
    icon: '🍰'
  },
  {
    id: 'jack-be-nimble',
    title: 'Jack Be Nimble',
    titleCn: '杰克要敏捷',
    content: [
      'Jack be nimble, Jack be quick.',
      'Jack jump over the candlestick.'
    ],
    level: 1,
    category: 'song',
    tags: ['杰克', '敏捷', '儿歌'],
    bgGradient: 'from-orange-100 via-red-100 to-pink-100',
    icon: '🕯️'
  },
  {
    id: 'little-nut-tree',
    title: 'I Had a Little Nut Tree',
    titleCn: '我有一棵小坚果树',
    content: [
      'I had a little nut tree,',
      'Nothing would it bear,',
      'But a silver nutmeg,',
      'And a golden pear.'
    ],
    level: 2,
    category: 'song',
    tags: ['树', '坚果', '儿歌'],
    bgGradient: 'from-green-100 via-emerald-100 to-teal-100',
    icon: '🌳'
  },
  {
    id: 'king-cole',
    title: 'Sing a Song of Sixpence',
    titleCn: '六便士之歌',
    content: [
      'Sing a song of sixpence,',
      'A pocket full of rye.',
      'Four and twenty blackbirds,',
      'Baked in a pie.',
      '',
      'When the pie was opened,',
      'The birds began to sing.',
      'Wasn\'t that a dainty dish,',
      'To set before the king?'
    ],
    level: 3,
    category: 'song',
    tags: ['鸟', '国王', '儿歌'],
    bgGradient: 'from-yellow-100 via-amber-100 to-orange-100',
    icon: '🐦'
  },
  {
    id: 'cobbler',
    title: 'Cobbler, Cobbler',
    titleCn: '鞋匠',
    content: [
      'Cobbler, cobbler, mend my shoe,',
      'Get it done by half-past two.',
      'Half-past two is much too late,',
      'Get it done by half-past eight.'
    ],
    level: 2,
    category: 'song',
    tags: ['鞋匠', '时间', '儿歌'],
    bgGradient: 'from-amber-100 via-orange-100 to-red-100',
    icon: '👞'
  },
  {
    id: 'diddle-diddle-dumpling',
    title: 'Diddle, Diddle, Dumpling, My Son John',
    titleCn: '迪德尔迪德尔我的儿子约翰',
    content: [
      'Diddle, diddle, dumpling, my son John,',
      'Went to bed with his trousers on.',
      'One shoe off and one shoe on,',
      'Diddle, diddle, dumpling, my son John.'
    ],
    level: 2,
    category: 'song',
    tags: ['睡觉', '男孩', '儿歌'],
    bgGradient: 'from-blue-100 via-indigo-100 to-purple-100',
    icon: '👖'
  },
  {
    id: 'goosey-gander',
    title: 'Goosey, Goosey Gander',
    titleCn: '鹅鹅雁',
    content: [
      'Goosey, goosey gander,',
      'Whither dost thou wander?',
      'Upstairs and downstairs,',
      'And in my lady\'s chamber.',
      '',
      'There I met an old man,',
      'Who wouldn\'t say his prayers.',
      'I took him by the left leg,',
      'And threw him down the stairs.'
    ],
    level: 3,
    category: 'song',
    tags: ['鹅', '楼梯', '儿歌'],
    bgGradient: 'from-gray-100 via-slate-100 to-zinc-100',
    icon: '🦢'
  },
  {
    id: 'one-mist-moist',
    title: 'One Misty Moisty Morning',
    titleCn: '一个雾蒙蒙的早晨',
    content: [
      'One misty moisty morning,',
      'When cloudy was the weather,',
      'I chanced to meet an old man,',
      'Clothed all in leather.',
      '',
      'He began to compliment,',
      'And I began to grin.',
      'How do you do? And how do you do?',
      'And how do you do again?'
    ],
    level: 4,
    category: 'song',
    tags: ['天气', '问候', '儿歌'],
    bgGradient: 'from-gray-100 via-blue-100 to-cyan-100',
    icon: '🌫️'
  },
  {
    id: 'sally-alley',
    title: 'Sally Go Round the Sun',
    titleCn: '萨莉绕着太阳转',
    content: [
      'Sally go round the sun,',
      'Sally go round the moon.',
      'Sally go round the chimney pot,',
      'About a Saturday afternoon.'
    ],
    level: 2,
    category: 'song',
    tags: ['女孩', '绕圈', '儿歌'],
    bgGradient: 'from-yellow-100 via-orange-100 to-red-100',
    icon: '☀️'
  },
  {
    id: 'looby-loo',
    title: 'Looby Loo',
    titleCn: '卢比卢',
    content: [
      'Here we dance looby loo,',
      'Here we dance looby light.',
      'Here we dance looby loo,',
      'All on a Saturday night.'
    ],
    level: 2,
    category: 'song',
    tags: ['舞蹈', '星期六', '儿歌'],
    bgGradient: 'from-pink-100 via-purple-100 to-blue-100',
    icon: '💃'
  },
  {
    id: 'grandmother-clock',
    title: 'My Grandfather\'s Clock',
    titleCn: '祖父的钟',
    content: [
      'My grandfather\'s clock was too large for the shelf,',
      'So it stood ninety years on the floor.',
      'It was taller by half than the old man himself,',
      'Though it weighed not a pennyweight more.'
    ],
    level: 4,
    category: 'song',
    tags: ['钟', '时间', '儿歌'],
    bgGradient: 'from-amber-100 via-orange-100 to-yellow-100',
    icon: '⏰'
  },
  {
    id: 'camp-town-races',
    title: 'Camptown Races',
    titleCn: '营地竞赛',
    content: [
      'Camptown racetrack five miles long,',
      'Gwine to run all night, gwine to run all day.',
      'I bet my money on a bob-tailed nag,',
      'Somebody bet on the bay.'
    ],
    level: 3,
    category: 'song',
    tags: ['赛马', '赌博', '儿歌'],
    bgGradient: 'from-green-100 via-emerald-100 to-teal-100',
    icon: '🏇'
  },
  {
    id: 'oh-susanna',
    title: 'Oh! Susanna',
    titleCn: '哦苏珊娜',
    content: [
      'I come from Alabama with my banjo on my knee,',
      'I\'m going to Louisiana my true love for to see.',
      'It rained all night the day I left, the weather it was dry.',
      'The sun so hot I froze to death, Susanna don\'t you cry.'
    ],
    level: 3,
    category: 'song',
    tags: ['旅行', '爱情', '儿歌'],
    bgGradient: 'from-yellow-100 via-amber-100 to-orange-100',
    icon: '🪕'
  },
  {
    id: 'home-range',
    title: 'Home on the Range',
    titleCn: '草原之家',
    content: [
      'Oh, give me a home where the buffalo roam,',
      'Where the deer and the antelope play.',
      'Where seldom is heard a discouraging word,',
      'And the skies are not cloudy all day.'
    ],
    level: 4,
    category: 'song',
    tags: ['草原', '动物', '儿歌'],
    bgGradient: 'from-blue-100 via-cyan-100 to-teal-100',
    icon: '🦬'
  },
  {
    id: 'red-river-valley',
    title: 'Red River Valley',
    titleCn: '红河谷',
    content: [
      'From this valley they say you are going,',
      'We will miss your bright eyes and sweet smile.',
      'For they say you are taking the sunshine,',
      'That has brightened our pathway for a while.'
    ],
    level: 4,
    category: 'song',
    tags: ['山谷', '离别', '儿歌'],
    bgGradient: 'from-red-100 via-orange-100 to-yellow-100',
    icon: '🏜️'
  },
  {
    id: 'sheep-safe',
    title: 'The Lamb Goes to School',
    titleCn: '小羊上学',
    content: [
      'Little lamb, little lamb, go to school.',
      'Learn your letters, learn your rule.',
      'Teacher says you\'re very good,',
      'The best sheep in the neighborhood.'
    ],
    level: 1,
    category: 'song',
    tags: ['羊', '学校', '儿歌'],
    bgGradient: 'from-white via-pink-50 to-purple-50',
    icon: '🐑'
  },
  {
    id: 'bunny-hop',
    title: 'The Bunny Hop',
    titleCn: '兔子跳',
    content: [
      'Right foot, left foot, hop, hop, hop.',
      'Bunny bunny, don\'t you stop.',
      'Wiggle your ears and wiggle your nose,',
      'Bunny bunny, off he goes!'
    ],
    level: 1,
    category: 'song',
    tags: ['兔子', '动作', '儿歌'],
    bgGradient: 'from-pink-100 via-purple-100 to-indigo-100',
    icon: '🐰'
  },
  {
    id: 'puppy-play',
    title: 'Puppy Dog\'s Playtime',
    titleCn: '小狗玩耍',
    content: [
      'Puppy dog runs round and round,',
      'Chasing sticks upon the ground.',
      'Wag his tail and bark with glee,',
      'Come and play along with me.'
    ],
    level: 1,
    category: 'song',
    tags: ['狗', '玩耍', '儿歌'],
    bgGradient: 'from-amber-100 via-orange-100 to-yellow-100',
    icon: '🐕'
  },
  {
    id: 'kitty-cat',
    title: 'Kitty Cat Soft and Sweet',
    titleCn: '小猫咪温柔又甜美',
    content: [
      'Kitty cat, kitty cat, soft and sweet.',
      'Purring softly on my seat.',
      'Little paws and whiskers too,',
      'I love playing with you.'
    ],
    level: 1,
    category: 'song',
    tags: ['猫', '温柔', '儿歌'],
    bgGradient: 'from-gray-100 via-slate-100 to-zinc-100',
    icon: '🐱'
  },
  {
    id: 'birdie-fly',
    title: 'Little Birdie in the Tree',
    titleCn: '树上的小鸟',
    content: [
      'Little birdie in the tree,',
      'Sing a song for you and me.',
      'Flap your wings and fly so high,',
      'Up towards the bright blue sky.'
    ],
    level: 1,
    category: 'song',
    tags: ['鸟', '树', '儿歌'],
    bgGradient: 'from-blue-100 via-sky-100 to-cyan-100',
    icon: '🐦'
  },
  {
    id: 'fish-swim',
    title: 'Fishy Fishy in the Sea',
    titleCn: '海里的小鱼',
    content: [
      'Fishy fishy in the sea,',
      'Swimming wild and swimming free.',
      'Splish splash bubbles everywhere,',
      'Fishy fishy without a care.'
    ],
    level: 1,
    category: 'song',
    tags: ['鱼', '海', '儿歌'],
    bgGradient: 'from-blue-100 via-cyan-100 to-teal-100',
    icon: '🐟'
  },
  {
    id: 'frog-jump',
    title: 'Froggy Jumping in the Pond',
    titleCn: '池塘里的青蛙',
    content: [
      'Froggy froggy jump so high,',
      'Jumping at the cloudy sky.',
      'Splash splash into the water,',
      'Happy froggy sons and daughters.'
    ],
    level: 1,
    category: 'song',
    tags: ['青蛙', '池塘', '儿歌'],
    bgGradient: 'from-green-100 via-emerald-100 to-teal-100',
    icon: '🐸'
  },
  {
    id: 'butterfly-dance',
    title: 'Butterfly Dancing Round',
    titleCn: '蝴蝶飞舞',
    content: [
      'Butterfly butterfly dance around,',
      'Flowers blooming on the ground.',
      'Colors bright and wings so light,',
      'Flying from the morning to the night.'
    ],
    level: 1,
    category: 'song',
    tags: ['蝴蝶', '舞蹈', '儿歌'],
    bgGradient: 'from-pink-100 via-purple-100 to-blue-100',
    icon: '🦋'
  },
  {
    id: 'bear-honey',
    title: 'Bear Loves Honey Sweet',
    titleCn: '熊爱吃蜂蜜',
    content: [
      'Big brown bear with honey pot,',
      'Eating all the honey got.',
      'Yummy yummy sweet and sticky,',
      'Bears are lucky bears are tricky.'
    ],
    level: 1,
    category: 'song',
    tags: ['熊', '蜂蜜', '儿歌'],
    bgGradient: 'from-amber-100 via-orange-100 to-yellow-100',
    icon: '🐻'
  },
  {
    id: 'lion-roar',
    title: 'Lion Roars So Loud',
    titleCn: '狮子大声吼',
    content: [
      'Lion lion big and strong,',
      'Roaring loudly all day long.',
      'King of jungle brave and bold,',
      'With a mane of shiny gold.'
    ],
    level: 1,
    category: 'song',
    tags: ['狮子', '吼叫', '儿歌'],
    bgGradient: 'from-yellow-100 via-amber-100 to-orange-100',
    icon: '🦁'
  },
  {
    id: 'elephant-trunk',
    title: 'Elephant With Long Trunk',
    titleCn: '大象的长鼻子',
    content: [
      'Elephant elephant big and gray,',
      'Swinging trunk from night to day.',
      'Big big ears and big big feet,',
      'Walking down the jungle street.'
    ],
    level: 1,
    category: 'song',
    tags: ['大象', '鼻子', '儿歌'],
    bgGradient: 'from-gray-100 via-slate-100 to-zinc-100',
    icon: '🐘'
  },
  {
    id: 'monkey-swing',
    title: 'Monkey Swinging on the Tree',
    titleCn: '猴子在树上荡',
    content: [
      'Monkey monkey swing so high,',
      'In the blue and sunny sky.',
      'Bananas sweet bananas yummy,',
      'Monkey finds them in his tummy.'
    ],
    level: 1,
    category: 'song',
    tags: ['猴子', '香蕉', '儿歌'],
    bgGradient: 'from-amber-100 via-orange-100 to-yellow-100',
    icon: '🐵'
  },
  {
    id: 'zebra-stripes',
    title: 'Zebra Has Stripes',
    titleCn: '斑马有条纹',
    content: [
      'Zebra zebra black and white,',
      'Running fast with all his might.',
      'Stripes upon his body too,',
      'Zebra zebra yes it\'s true.'
    ],
    level: 1,
    category: 'song',
    tags: ['斑马', '条纹', '儿歌'],
    bgGradient: 'from-white via-gray-100 to-zinc-100',
    icon: '🦓'
  },
  {
    id: 'giraffe-tall',
    title: 'Giraffe So Very Tall',
    titleCn: '长颈鹿真高',
    content: [
      'Giraffe giraffe so very tall,',
      'Reaching leaves above them all.',
      'Long long neck and spots so bright,',
      'Giraffe giraffe a lovely sight.'
    ],
    level: 1,
    category: 'song',
    tags: ['长颈鹿', '脖子', '儿歌'],
    bgGradient: 'from-yellow-100 via-amber-100 to-orange-100',
    icon: '🦒'
  },
  {
    id: 'penguin-waddle',
    title: 'Penguin Waddles Around',
    titleCn: '企鹅摇摆走',
    content: [
      'Penguin penguin black and white,',
      'Waddling with all his might.',
      'Snow and ice and cold so cold,',
      'Penguin penguin brave and bold.'
    ],
    level: 1,
    category: 'song',
    tags: ['企鹅', '摇摆', '儿歌'],
    bgGradient: 'from-white via-blue-50 to-cyan-50',
    icon: '🐧'
  },
  {
    id: 'owl-night',
    title: 'Owl Sleeps All Day',
    titleCn: '猫头鹰白天睡',
    content: [
      'Owl owl sleeping in the day,',
      'Wakes up when the sun goes away.',
      'Big big eyes and wise old bird,',
      'Whoo whoo is the only word.'
    ],
    level: 1,
    category: 'song',
    tags: ['猫头鹰', '夜晚', '儿歌'],
    bgGradient: 'from-indigo-100 via-purple-100 to-blue-100',
    icon: '🦉'
  },
  {
    id: 'duck-quack',
    title: 'Duck Goes Quack Quack',
    titleCn: '鸭子嘎嘎叫',
    content: [
      'Duck duck swimming in the pond,',
      'Quack quack quack so very long.',
      'Webbed feet and orange beak,',
      'Duck loves what the ducks all seek.'
    ],
    level: 1,
    category: 'song',
    tags: ['鸭子', '嘎嘎', '儿歌'],
    bgGradient: 'from-yellow-100 via-orange-100 to-green-100',
    icon: '🦆'
  },
  {
    id: 'horse-gallops',
    title: 'Horse Gallops Fast',
    titleCn: '马儿跑得快',
    content: [
      'Horse horse gallop so fast,',
      'Running free on fields at last.',
      'Clip clop clip clop goes the beat,',
      'Horsy horse is so sweet.'
    ],
    level: 1,
    category: 'song',
    tags: ['马', '奔跑', '儿歌'],
    bgGradient: 'from-amber-100 via-orange-100 to-red-100',
    icon: '🐴'
  },
  {
    id: 'cow-moo',
    title: 'Cow Goes Moo Moo',
    titleCn: '奶牛哞哞叫',
    content: [
      'Cow cow grazing in the grass,',
      'Moo moo moo as cows pass.',
      'Milk so white and fresh each day,',
      'Cow cow happy cows all day.'
    ],
    level: 1,
    category: 'song',
    tags: ['牛', '哞哞', '儿歌'],
    bgGradient: 'from-white via-gray-100 to-slate-100',
    icon: '🐄'
  },
  {
    id: 'pig-oink',
    title: 'Pig Goes Oink Oink',
    titleCn: '猪儿哼哼叫',
    content: [
      'Pig pig rolling in the mud,',
      'Oink oink oink just loves the flood.',
      'Pink and round and very fat,',
      'Pig pig pig and that is that.'
    ],
    level: 1,
    category: 'song',
    tags: ['猪', '泥巴', '儿歌'],
    bgGradient: 'from-pink-100 via-rose-100 to-red-100',
    icon: '🐷'
  },
  {
    id: 'hen-cluck',
    title: 'Hen Lays Eggs',
    titleCn: '母鸡下蛋',
    content: [
      'Hen hen cluck cluck cluck,',
      'Walking round the farmyard duck.',
      'Laying eggs both brown and white,',
      'Hen hen morning noon and night.'
    ],
    level: 1,
    category: 'song',
    tags: ['鸡', '蛋', '儿歌'],
    bgGradient: 'from-amber-100 via-yellow-100 to-orange-100',
    icon: '🐔'
  },
  {
    id: 'sheep-baa',
    title: 'Sheep Goes Baa Baa',
    titleCn: '绵羊咩咩叫',
    content: [
      'Sheep sheep baa baa baa,',
      'Running round the farm with glee.',
      'Wool so soft and white so bright,',
      'Sheep sheep day and night.'
    ],
    level: 1,
    category: 'song',
    tags: ['羊', '羊毛', '儿歌'],
    bgGradient: 'from-white via-pink-50 to-purple-50',
    icon: '🐑'
  },
  {
    id: 'goat-bleat',
    title: 'Goat Climbs High',
    titleCn: '山羊爬高',
    content: [
      'Goat goat climbs up the hill,',
      'Bleat bleat bleat so very still.',
      'Horns so sharp and beard so long,',
      'Goat goat jumping brave and strong.'
    ],
    level: 1,
    category: 'song',
    tags: ['山羊', '爬山', '儿歌'],
    bgGradient: 'from-gray-100 via-zinc-100 to-stone-100',
    icon: '🐐'
  },
  {
    id: 'donkey-bray',
    title: 'Donkey Goes Hee Haw',
    titleCn: '驴子嘿嘿叫',
    content: [
      'Donkey donkey hee haw hee haw,',
      'Carrying things with all his raw.',
      'Big big ears and brown so bright,',
      'Donkey donkey morning and night.'
    ],
    level: 1,
    category: 'song',
    tags: ['驴', '载物', '儿歌'],
    bgGradient: 'from-amber-100 via-orange-100 to-yellow-100',
    icon: '🫏'
  }
];
