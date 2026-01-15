export interface DialogueLine {
  speaker: 'A' | 'B';
  text: string;
  cn: string;
}

export interface Dialogue {
  title: string;
  icon: string;
  color: string;
  level: 1 | 2 | 3 | 4 | 5;
  scenario: DialogueLine[];
}

export const dialogues: Dialogue[] = [
  // === Level 1: 基础问候与简单交流 (1-40) ===
  {
    title: '打招呼',
    icon: '👋',
    color: 'bg-blue-100 dark:bg-blue-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Hello!', cn: '你好！' },
      { speaker: 'B', text: 'Hi!', cn: '嗨！' },
    ]
  },
  {
    title: '问好',
    icon: '☀️',
    color: 'bg-yellow-100 dark:bg-yellow-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Good morning!', cn: '早上好！' },
      { speaker: 'B', text: 'Good morning!', cn: '早上好！' },
    ]
  },
  {
    title: '道别',
    icon: '👋',
    color: 'bg-pink-100 dark:bg-pink-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Goodbye!', cn: '再见！' },
      { speaker: 'B', text: 'See you!', cn: '再见！' },
    ]
  },
  {
    title: '道晚安',
    icon: '🌙',
    color: 'bg-indigo-100 dark:bg-indigo-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Good night!', cn: '晚安！' },
      { speaker: 'B', text: 'Good night!', cn: '晚安！' },
    ]
  },
  {
    title: '谢谢',
    icon: '🙏',
    color: 'bg-green-100 dark:bg-green-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Thank you!', cn: '谢谢！' },
      { speaker: 'B', text: 'You are welcome!', cn: '不客气！' },
    ]
  },
  {
    title: '对不起',
    icon: '😊',
    color: 'bg-orange-100 dark:bg-orange-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'I am sorry.', cn: '对不起。' },
      { speaker: 'B', text: 'It is okay.', cn: '没关系。' },
    ]
  },
  {
    title: '打招呼与问候',
    icon: '🤝',
    color: 'bg-blue-100 dark:bg-blue-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Hello! How are you?', cn: '你好！你好吗？' },
      { speaker: 'B', text: 'I am fine, thank you.', cn: '我很好，谢谢。' },
    ]
  },
  {
    title: '请问名字',
    icon: '👤',
    color: 'bg-purple-100 dark:bg-purple-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'What is your name?', cn: '你叫什么名字？' },
      { speaker: 'B', text: 'My name is Tom.', cn: '我叫汤姆。' },
    ]
  },
  {
    title: '询问年龄',
    icon: '🎂',
    color: 'bg-red-100 dark:bg-red-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'How old are you?', cn: '你多大了？' },
      { speaker: 'B', text: 'I am ten years old.', cn: '我十岁了。' },
    ]
  },
  {
    title: '认识',
    icon: '🤝',
    color: 'bg-green-100 dark:bg-green-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Nice to meet you!', cn: '很高兴认识你！' },
      { speaker: 'B', text: 'Nice to meet you too!', cn: '我也很高兴认识你！' },
    ]
  },
  {
    title: '打招呼与天气',
    icon: '🌤️',
    color: 'bg-cyan-100 dark:bg-cyan-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Hi! It is sunny today.', cn: '嗨！今天很晴朗。' },
      { speaker: 'B', text: 'Yes, it is beautiful!', cn: '是的，真美！' },
    ]
  },
  {
    title: '问候家人',
    icon: '👨‍👩‍👧',
    color: 'bg-rose-100 dark:bg-rose-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'How is your mother?', cn: '你妈妈怎么样？' },
      { speaker: 'B', text: 'She is fine, thank you.', cn: '她很好，谢谢。' },
    ]
  },
  {
    title: '答应邀请',
    icon: '✅',
    color: 'bg-emerald-100 dark:bg-emerald-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Can you come?', cn: '你能来吗？' },
      { speaker: 'B', text: 'Yes, I can.', cn: '是的，我可以。' },
    ]
  },
  {
    title: '拒绝邀请',
    icon: '❌',
    color: 'bg-red-100 dark:bg-red-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Can you play now?', cn: '你现在能玩吗？' },
      { speaker: 'B', text: 'Sorry, I cannot.', cn: '对不起，我不能。' },
    ]
  },
  {
    title: '邀请',
    icon: '📢',
    color: 'bg-blue-100 dark:bg-blue-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Let us play together!', cn: '我们一起玩吧！' },
      { speaker: 'B', text: 'Great!', cn: '太棒了！' },
    ]
  },
  {
    title: '打招呼与回应',
    icon: '💬',
    color: 'bg-violet-100 dark:bg-violet-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Good afternoon!', cn: '下午好！' },
      { speaker: 'B', text: 'Good afternoon!', cn: '下午好！' },
    ]
  },
  {
    title: '打招呼与晚上',
    icon: '🌆',
    color: 'bg-orange-100 dark:bg-orange-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Good evening!', cn: '晚上好！' },
      { speaker: 'B', text: 'Good evening!', cn: '晚上好！' },
    ]
  },
  {
    title: '谢谢回应',
    icon: '💕',
    color: 'bg-pink-100 dark:bg-pink-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Here is your book.', cn: '这是你的书。' },
      { speaker: 'B', text: 'Thank you very much!', cn: '非常感谢！' },
    ]
  },
  {
    title: '问是谁',
    icon: '❓',
    color: 'bg-slate-100 dark:bg-slate-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Who are you?', cn: '你是谁？' },
      { speaker: 'B', text: 'I am Amy.', cn: '我是艾米。' },
    ]
  },
  {
    title: '问这是什么',
    icon: '🔍',
    color: 'bg-amber-100 dark:bg-amber-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'What is this?', cn: '这是什么？' },
      { speaker: 'B', text: 'It is a book.', cn: '这是一本书。' },
    ]
  },
  {
    title: '问颜色',
    icon: '🎨',
    color: 'bg-fuchsia-100 dark:bg-fuchsia-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'What color is this?', cn: '这是什么颜色？' },
      { speaker: 'B', text: 'It is red.', cn: '这是红色。' },
    ]
  },
  {
    title: '问时间',
    icon: '⏰',
    color: 'bg-teal-100 dark:bg-teal-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'What time is it?', cn: '现在几点了？' },
      { speaker: 'B', text: 'It is 8 o\'clock.', cn: '现在是8点。' },
    ]
  },
  {
    title: '问天气',
    icon: '☀️',
    color: 'bg-sky-100 dark:bg-sky-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Is it cold today?', cn: '今天冷吗？' },
      { speaker: 'B', text: 'Yes, it is cold.', cn: '是的，今天冷。' },
    ]
  },
  {
    title: '喜欢',
    icon: '❤️',
    color: 'bg-red-100 dark:bg-red-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Do you like apples?', cn: '你喜欢苹果吗？' },
      { speaker: 'B', text: 'Yes, I like apples.', cn: '是的，我喜欢苹果。' },
    ]
  },
  {
    title: '不喜欢',
    icon: '💔',
    color: 'bg-gray-100 dark:bg-gray-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Do you like milk?', cn: '你喜欢牛奶吗？' },
      { speaker: 'B', text: 'No, I do not like milk.', cn: '不，我不喜欢牛奶。' },
    ]
  },
  {
    title: '想吃',
    icon: '🍎',
    color: 'bg-green-100 dark:bg-green-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Do you want an apple?', cn: '你想要一个苹果吗？' },
      { speaker: 'B', text: 'Yes, please.', cn: '是的，请给我。' },
    ]
  },
  {
    title: '不想吃',
    icon: '🍪',
    color: 'bg-amber-100 dark:bg-amber-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Do you want a cookie?', cn: '你想要一个饼干吗？' },
      { speaker: 'B', text: 'No, thank you.', cn: '不，谢谢。' },
    ]
  },
  {
    title: '高兴',
    icon: '😊',
    color: 'bg-yellow-100 dark:bg-yellow-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'I am happy today!', cn: '我今天很高兴！' },
      { speaker: 'B', text: 'Me too!', cn: '我也是！' },
    ]
  },
  {
    title: '难过',
    icon: '😢',
    color: 'bg-blue-100 dark:bg-blue-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'I am sad today.', cn: '我今天很难过。' },
      { speaker: 'B', text: 'Why? Tell me.', cn: '为什么？告诉我。' },
    ]
  },
  {
    title: '累',
    icon: '😴',
    color: 'bg-purple-100 dark:bg-purple-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'I am tired.', cn: '我很累。' },
      { speaker: 'B', text: 'Go to sleep early.', cn: '早点睡觉吧。' },
    ]
  },
  {
    title: '饿',
    icon: '🍽️',
    color: 'bg-orange-100 dark:bg-orange-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'I am hungry.', cn: '我饿了。' },
      { speaker: 'B', text: 'Let us eat.', cn: '我们去吃饭吧。' },
    ]
  },
  {
    title: '渴',
    icon: '💧',
    color: 'bg-cyan-100 dark:bg-cyan-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'I am thirsty.', cn: '我渴了。' },
      { speaker: 'B', text: 'Drink some water.', cn: '喝点水吧。' },
    ]
  },
  {
    title: '帮忙',
    icon: '🤝',
    color: 'bg-emerald-100 dark:bg-emerald-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Can you help me?', cn: '你能帮我吗？' },
      { speaker: 'B', text: 'Sure!', cn: '当然！' },
    ]
  },
  {
    title: '需要',
    icon: '✨',
    color: 'bg-violet-100 dark:bg-violet-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'I need a pen.', cn: '我需要一支笔。' },
      { speaker: 'B', text: 'Here you are.', cn: '给你。' },
    ]
  },
  {
    title: '有',
    icon: '✅',
    color: 'bg-green-100 dark:bg-green-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Do you have a ruler?', cn: '你有尺子吗？' },
      { speaker: 'B', text: 'Yes, I do.', cn: '是的，我有。' },
    ]
  },
  {
    title: '没有',
    icon: '❌',
    color: 'bg-red-100 dark:bg-red-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Do you have a pencil?', cn: '你有铅笔吗？' },
      { speaker: 'B', text: 'No, I do not.', cn: '不，我没有。' },
    ]
  },
  {
    title: '在哪里',
    icon: '📍',
    color: 'bg-rose-100 dark:bg-rose-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Where is my bag?', cn: '我的包在哪里？' },
      { speaker: 'B', text: 'It is on the chair.', cn: '在椅子上。' },
    ]
  },
  {
    title: '在做什么',
    icon: '🏃',
    color: 'bg-indigo-100 dark:bg-indigo-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'What are you doing?', cn: '你在做什么？' },
      { speaker: 'B', text: 'I am reading.', cn: '我在看书。' },
    ]
  },
  {
    title: '去哪里',
    icon: '🚶',
    color: 'bg-lime-100 dark:bg-lime-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Where are you going?', cn: '你去哪里？' },
      { speaker: 'B', text: 'I am going to school.', cn: '我去学校。' },
    ]
  },
  {
    title: '请求允许',
    icon: '🙋',
    color: 'bg-blue-100 dark:bg-blue-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Can I go home?', cn: '我可以回家吗？' },
      { speaker: 'B', text: 'Yes, you can.', cn: '是的，你可以。' },
    ]
  },
  {
    title: '同意',
    icon: '👍',
    color: 'bg-green-100 dark:bg-green-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Is this good?', cn: '这个好吗？' },
      { speaker: 'B', text: 'Yes, it is good.', cn: '是的，这个很好。' },
    ]
  },
  {
    title: '不同意',
    icon: '👎',
    color: 'bg-red-100 dark:bg-red-900',
    level: 1,
    scenario: [
      { speaker: 'A', text: 'Is this bad?', cn: '这个不好吗？' },
      { speaker: 'B', text: 'No, it is not bad.', cn: '不，它不好。' },
    ]
  },

  // === Level 2: 日常生活场景 (41-80) ===
  {
    title: '自我介绍',
    icon: '🤝',
    color: 'bg-green-100 dark:bg-green-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Hi, what is your name?', cn: '嗨，你叫什么名字？' },
      { speaker: 'B', text: 'My name is Tom. What about you?', cn: '我叫汤姆。你呢？' },
      { speaker: 'A', text: 'I am Amy. Nice to meet you!', cn: '我是艾米。很高兴认识你！' },
    ]
  },
  {
    title: '问路',
    icon: '🗺️',
    color: 'bg-purple-100 dark:bg-purple-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Excuse me, where is the library?', cn: '打扰一下，图书馆在哪里？' },
      { speaker: 'B', text: 'Go straight and turn left. You can see it.', cn: '直走然后左转，你就能看到了。' },
      { speaker: 'A', text: 'Thank you very much!', cn: '非常感谢！' },
      { speaker: 'B', text: 'You are welcome!', cn: '不客气！' },
    ]
  },
  {
    title: '购物',
    icon: '🛒',
    color: 'bg-orange-100 dark:bg-orange-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'How much is this apple?', cn: '这个苹果多少钱？' },
      { speaker: 'B', text: 'It is two yuan.', cn: '两块钱。' },
      { speaker: 'A', text: 'I will take two, please.', cn: '我要两个，谢谢。' },
      { speaker: 'B', text: 'Here you are. Four yuan, please.', cn: '给你。四块钱。' },
    ]
  },
  {
    title: '点餐',
    icon: '🍽️',
    color: 'bg-red-100 dark:bg-red-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Good morning! Can I help you?', cn: '早上好！我能帮你吗？' },
      { speaker: 'B', text: 'Yes, please. I would like a hamburger.', cn: '是的，请给我一个汉堡。' },
      { speaker: 'A', text: 'What would you like to drink?', cn: '你想喝点什么？' },
      { speaker: 'B', text: 'A glass of orange juice, please.', cn: '一杯橙汁，谢谢。' },
    ]
  },
  {
    title: '在课堂上',
    icon: '📚',
    color: 'bg-cyan-100 dark:bg-cyan-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Good morning, teacher!', cn: '早上好，老师！' },
      { speaker: 'B', text: 'Good morning, class!', cn: '早上好，同学们！' },
      { speaker: 'A', text: 'Can I go to the bathroom?', cn: '我可以去洗手间吗？' },
      { speaker: 'B', text: 'Yes, you can. But be quick.', cn: '可以，但要快点。' },
    ]
  },
  {
    title: '打电话',
    icon: '📞',
    color: 'bg-pink-100 dark:bg-pink-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Hello, this is Tom. May I speak to Amy?', cn: '你好，我是汤姆。我可以找艾米吗？' },
      { speaker: 'B', text: 'This is Amy. How are you?', cn: '我是艾米。你好吗？' },
      { speaker: 'A', text: 'I am fine. Do you want to play together?', cn: '我很好。你想一起玩吗？' },
      { speaker: 'B', text: 'Sure! What time?', cn: '当然！什么时间？' },
    ]
  },
  {
    title: '谈论天气',
    icon: '🌤️',
    color: 'bg-yellow-100 dark:bg-yellow-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'What is the weather like today?', cn: '今天天气怎么样？' },
      { speaker: 'B', text: 'It is sunny and warm.', cn: '今天很晴朗温暖。' },
      { speaker: 'A', text: 'That is great! Let us go to the park.', cn: '太棒了！我们去公园吧。' },
      { speaker: 'B', text: 'Good idea!', cn: '好主意！' },
    ]
  },
  {
    title: '买文具',
    icon: '✏️',
    color: 'bg-indigo-100 dark:bg-indigo-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'I need a pencil and a notebook.', cn: '我需要一支铅笔和一个笔记本。' },
      { speaker: 'B', text: 'Here you are. Anything else?', cn: '给你。还要别的吗？' },
      { speaker: 'A', text: 'No, that is all. How much?', cn: '不要了，就这些。多少钱？' },
      { speaker: 'B', text: 'Five yuan, please.', cn: '五块钱。' },
    ]
  },
  {
    title: '借东西',
    icon: '📚',
    color: 'bg-blue-100 dark:bg-blue-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Can I borrow your pen?', cn: '我可以借你的笔吗？' },
      { speaker: 'B', text: 'Sure, here you are.', cn: '当然，给你。' },
      { speaker: 'A', text: 'Thank you! I will return it soon.', cn: '谢谢！我很快就还。' },
      { speaker: 'B', text: 'No problem.', cn: '没问题。' },
    ]
  },
  {
    title: '约朋友',
    icon: '📅',
    color: 'bg-emerald-100 dark:bg-emerald-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Do you want to play football tomorrow?', cn: '你明天想踢足球吗？' },
      { speaker: 'B', text: 'Yes! What time should we meet?', cn: '想！我们几点见面？' },
      { speaker: 'A', text: 'How about 4 o\'clock at the park?', cn: '下午4点在公园怎么样？' },
      { speaker: 'B', text: 'Perfect! See you then!', cn: '太好了！到时候见！' },
    ]
  },
  {
    title: '谈论爱好',
    icon: '🎨',
    color: 'bg-purple-100 dark:bg-purple-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'What is your hobby?', cn: '你的爱好是什么？' },
      { speaker: 'B', text: 'I like drawing pictures.', cn: '我喜欢画画。' },
      { speaker: 'A', text: 'That is cool! I like reading books.', cn: '太酷了！我喜欢看书。' },
      { speaker: 'B', text: 'Reading is fun too!', cn: '看书也很有趣！' },
    ]
  },
  {
    title: '询问星期',
    icon: '📆',
    color: 'bg-teal-100 dark:bg-teal-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'What day is today?', cn: '今天是星期几？' },
      { speaker: 'B', text: 'It is Monday.', cn: '今天是星期一。' },
      { speaker: 'A', text: 'Do we have school tomorrow?', cn: '我们明天上学吗？' },
      { speaker: 'B', text: 'Yes, we do.', cn: '是的，我们要上学。' },
    ]
  },
  {
    title: '谈论周末',
    icon: '🎉',
    color: 'bg-orange-100 dark:bg-orange-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'What did you do last weekend?', cn: '你上周末做了什么？' },
      { speaker: 'B', text: 'I went to the zoo with my parents.', cn: '我和父母去动物园了。' },
      { speaker: 'A', text: 'That sounds fun! What animals did you see?', cn: '听起来很有趣！你看到了什么动物？' },
      { speaker: 'B', text: 'We saw tigers, lions, and monkeys.', cn: '我们看到了老虎、狮子和猴子。' },
    ]
  },
  {
    title: '谈论食物',
    icon: '🍕',
    color: 'bg-red-100 dark:bg-red-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'What is your favorite food?', cn: '你最喜欢什么食物？' },
      { speaker: 'B', text: 'My favorite food is pizza.', cn: '我最喜欢的食物是披萨。' },
      { speaker: 'A', text: 'I like pizza too! What about fruit?', cn: '我也喜欢披萨！那水果呢？' },
      { speaker: 'B', text: 'I like strawberries and bananas.', cn: '我喜欢草莓和香蕉。' },
    ]
  },
  {
    title: '谈论颜色',
    icon: '🌈',
    color: 'bg-fuchsia-100 dark:bg-fuchsia-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'What color do you like best?', cn: '你最喜欢什么颜色？' },
      { speaker: 'B', text: 'I like blue best. It is the color of the sky.', cn: '我最喜欢蓝色，它是天空的颜色。' },
      { speaker: 'A', text: 'I like red. It is the color of apples.', cn: '我喜欢红色，它是苹果的颜色。' },
      { speaker: 'B', text: 'Both colors are beautiful!', cn: '两种颜色都很美！' },
    ]
  },
  {
    title: '问路2',
    icon: '🗺️',
    color: 'bg-lime-100 dark:bg-lime-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Excuse me, how can I get to the post office?', cn: '打扰一下，我该怎么去邮局？' },
      { speaker: 'B', text: 'Go along this street, turn right at the second crossing.', cn: '沿着这条街走，在第二个路口右转。' },
      { speaker: 'A', text: 'Is it far from here?', cn: '离这里远吗？' },
      { speaker: 'B', text: 'No, it is only about 5 minutes\' walk.', cn: '不远，步行大约5分钟。' },
    ]
  },
  {
    title: '乘坐公交',
    icon: '🚌',
    color: 'bg-yellow-100 dark:bg-yellow-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Which bus should I take to the museum?', cn: '去博物馆应该坐几路公交？' },
      { speaker: 'B', text: 'You can take bus number 5.', cn: '你可以坐5路公交。' },
      { speaker: 'A', text: 'Where is the bus stop?', cn: '公交站在哪里？' },
      { speaker: 'B', text: 'It is over there, across the street.', cn: '就在那边，街对面。' },
    ]
  },
  {
    title: '看电影',
    icon: '🎬',
    color: 'bg-rose-100 dark:bg-rose-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Do you want to watch a movie with me?', cn: '你想和我一起看电影吗？' },
      { speaker: 'B', text: 'Sure! What movie do you want to watch?', cn: '当然！你想看什么电影？' },
      { speaker: 'A', text: 'How about a cartoon?', cn: '动画片怎么样？' },
      { speaker: 'B', text: 'Great! I love cartoons.', cn: '太好了！我喜欢动画片。' },
    ]
  },
  {
    title: '谈论运动',
    icon: '⚽',
    color: 'bg-green-100 dark:bg-green-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Do you like sports?', cn: '你喜欢运动吗？' },
      { speaker: 'B', text: 'Yes, I like playing basketball.', cn: '是的，我喜欢打篮球。' },
      { speaker: 'A', text: 'I like swimming. It is good exercise.', cn: '我喜欢游泳，这是很好的锻炼。' },
      { speaker: 'B', text: 'I want to learn swimming too!', cn: '我也想学游泳！' },
    ]
  },
  {
    title: '谈论音乐',
    icon: '🎵',
    color: 'bg-violet-100 dark:bg-violet-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Do you like music?', cn: '你喜欢音乐吗？' },
      { speaker: 'B', text: 'Yes! I like pop music.', cn: '喜欢！我喜欢流行音乐。' },
      { speaker: 'A', text: 'Can you play any instruments?', cn: '你会演奏乐器吗？' },
      { speaker: 'B', text: 'I can play the piano a little.', cn: '我会一点钢琴。' },
    ]
  },
  {
    title: '生日快乐',
    icon: '🎂',
    color: 'bg-pink-100 dark:bg-pink-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Happy birthday! This is for you.', cn: '生日快乐！这是给你的礼物。' },
      { speaker: 'B', text: 'Thank you so much! Can I open it?', cn: '非常感谢！我可以打开吗？' },
      { speaker: 'A', text: 'Yes, of course!', cn: '当然可以！' },
      { speaker: 'B', text: 'Wow! I love it!', cn: '哇！我好喜欢！' },
    ]
  },
  {
    title: '生病',
    icon: '🤒',
    color: 'bg-slate-100 dark:bg-slate-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'You don\'t look well. What is wrong?', cn: '你看起来不太好，怎么了？' },
      { speaker: 'B', text: 'I have a headache and a fever.', cn: '我头疼而且发烧。' },
      { speaker: 'A', text: 'You should see a doctor and rest.', cn: '你应该看医生并休息。' },
      { speaker: 'B', text: 'Thank you for your care.', cn: '谢谢你的关心。' },
    ]
  },
  {
    title: '找失物',
    icon: '🔍',
    color: 'bg-amber-100 dark:bg-amber-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Did you see my red bag?', cn: '你看到我的红包了吗？' },
      { speaker: 'B', text: 'I think it is on your desk.', cn: '我觉得在你桌子上。' },
      { speaker: 'A', text: 'Oh, you are right! Thank you!', cn: '哦，你说得对！谢谢！' },
      { speaker: 'B', text: 'You are welcome!', cn: '不客气！' },
    ]
  },
  {
    title: '图书馆',
    icon: '📖',
    color: 'bg-stone-100 dark:bg-stone-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'I want to borrow this book.', cn: '我想借这本书。' },
      { speaker: 'B', text: 'Let me check your library card.', cn: '让我查一下你的借书证。' },
      { speaker: 'A', text: 'How long can I keep it?', cn: '我可以借多久？' },
      { speaker: 'B', text: 'Two weeks. Remember to return it on time.', cn: '两周。记得按时归还。' },
    ]
  },
  {
    title: '邮局',
    icon: '📮',
    color: 'bg-red-100 dark:bg-red-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'I want to send a letter to my friend.', cn: '我想给朋友寄一封信。' },
      { speaker: 'B', text: 'Where do you want to send it?', cn: '你想寄到哪里？' },
      { speaker: 'A', text: 'To Beijing. How much is the postage?', cn: '到北京。邮费是多少？' },
      { speaker: 'B', text: 'One yuan and twenty cents.', cn: '一块两毛。' },
    ]
  },
  {
    title: '理发店',
    icon: '💇',
    color: 'bg-gray-100 dark:bg-gray-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Welcome! How can I help you?', cn: '欢迎！我能帮你吗？' },
      { speaker: 'B', text: 'I want to get a haircut.', cn: '我想剪头发。' },
      { speaker: 'A', text: 'What style do you want?', cn: '你想要什么发型？' },
      { speaker: 'B', text: 'Just trim it a little shorter.', cn: '稍微剪短一点就好。' },
    ]
  },
  {
    title: '银行',
    icon: '🏦',
    color: 'bg-slate-100 dark:bg-slate-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'I would like to open a savings account.', cn: '我想开一个储蓄账户。' },
      { speaker: 'B', text: 'Please fill out this form first.', cn: '请先填写这张表格。' },
      { speaker: 'A', text: 'Do I need to show my ID card?', cn: '我需要出示身份证吗？' },
      { speaker: 'B', text: 'Yes, and provide your phone number.', cn: '是的，还要提供你的手机号。' },
    ]
  },
  {
    title: '药店',
    icon: '💊',
    color: 'bg-emerald-100 dark:bg-emerald-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Excuse me, I need some medicine for a cold.', cn: '打扰一下，我需要一些感冒药。' },
      { speaker: 'B', text: 'Do you have a prescription?', cn: '你有处方吗？' },
      { speaker: 'A', text: 'No, I just have a runny nose and cough.', cn: '没有，我只是流鼻涕和咳嗽。' },
      { speaker: 'B', text: 'You can try this over-the-counter medicine.', cn: '你可以试试这种非处方药。' },
    ]
  },
  {
    title: '谈论家庭',
    icon: '👨‍👩‍👧‍👦',
    color: 'bg-orange-100 dark:bg-orange-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'How many people are there in your family?', cn: '你家有几口人？' },
      { speaker: 'B', text: 'There are four: my parents, my brother and me.', cn: '有四口：父母、哥哥和我。' },
      { speaker: 'A', text: 'What does your father do?', cn: '你爸爸是做什么的？' },
      { speaker: 'B', text: 'He is a doctor.', cn: '他是个医生。' },
    ]
  },
  {
    title: '谈论学校',
    icon: '🏫',
    color: 'bg-blue-100 dark:bg-blue-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Which school do you go to?', cn: '你在哪个学校上学？' },
      { speaker: 'B', text: 'I go to Star Primary School.', cn: '我在明星小学上学。' },
      { speaker: 'A', text: 'What is your favorite subject?', cn: '你最喜欢什么科目？' },
      { speaker: 'B', text: 'I like English and Math best.', cn: '我最喜欢英语和数学。' },
    ]
  },
  {
    title: '谈论老师',
    icon: '👨‍🏫',
    color: 'bg-purple-100 dark:bg-purple-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Who is your favorite teacher?', cn: '你最喜欢的老师是谁？' },
      { speaker: 'B', text: 'Mrs. Wang, she teaches English.', cn: '王老师，她教英语。' },
      { speaker: 'A', text: 'Why do you like her?', cn: '你为什么喜欢她？' },
      { speaker: 'B', text: 'She is very kind and patient.', cn: '她很善良也很耐心。' },
    ]
  },
  {
    title: '谈论朋友',
    icon: '👫',
    color: 'bg-pink-100 dark:bg-pink-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Who is your best friend?', cn: '你最好的朋友是谁？' },
      { speaker: 'B', text: 'My best friend is Lisa.', cn: '我最好的朋友是丽莎。' },
      { speaker: 'A', text: 'What do you usually do together?', cn: '你们通常一起做什么？' },
      { speaker: 'B', text: 'We study together and play games.', cn: '我们一起学习和玩游戏。' },
    ]
  },
  {
    title: '谈论宠物',
    icon: '🐕',
    color: 'bg-amber-100 dark:bg-amber-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Do you have any pets?', cn: '你有宠物吗？' },
      { speaker: 'B', text: 'Yes, I have a dog. His name is Lucky.', cn: '有的，我有一只狗，它的名字叫幸运。' },
      { speaker: 'A', text: 'What does he look like?', cn: '它长什么样？' },
      { speaker: 'B', text: 'He is small and white with big eyes.', cn: '它很小，白色，有大眼睛。' },
    ]
  },
  {
    title: '谈论房间',
    icon: '🏠',
    color: 'bg-cyan-100 dark:bg-cyan-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'What is your room like?', cn: '你的房间是什么样的？' },
      { speaker: 'B', text: 'It is small but very comfortable.', cn: '很小但是很舒服。' },
      { speaker: 'A', text: 'What color is your bed?', cn: '你的床是什么颜色的？' },
      { speaker: 'B', text: 'It is blue, my favorite color.', cn: '蓝色的，我最喜欢的颜色。' },
    ]
  },
  {
    title: '谈论假期',
    icon: '🏖️',
    color: 'bg-teal-100 dark:bg-teal-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Where did you go for your holiday?', cn: '你假期去哪里了？' },
      { speaker: 'B', text: 'I went to the beach with my family.', cn: '我和家人去海边了。' },
      { speaker: 'A', text: 'Did you swim in the sea?', cn: '你在海里游泳了吗？' },
      { speaker: 'B', text: 'Yes! The water was warm and beautiful.', cn: '是的！海水温暖又美丽。' },
    ]
  },
  {
    title: '谈论节日',
    icon: '🎄',
    color: 'bg-red-100 dark:bg-red-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'What is your favorite festival?', cn: '你最喜欢的节日是什么？' },
      { speaker: 'B', text: 'I like Spring Festival the best.', cn: '我最喜欢春节。' },
      { speaker: 'A', text: 'What do you do on that day?', cn: '那天你们做什么？' },
      { speaker: 'B', text: 'We have dinner together and get red envelopes.', cn: '我们一起吃晚饭，还收红包。' },
    ]
  },
  {
    title: '谈论季节',
    icon: '🍂',
    color: 'bg-orange-100 dark:bg-orange-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'Which season do you like best?', cn: '你最喜欢哪个季节？' },
      { speaker: 'B', text: 'I like spring best.', cn: '我最喜欢春天。' },
      { speaker: 'A', text: 'Why do you like spring?', cn: '你为什么喜欢春天？' },
      { speaker: 'B', text: 'Because the flowers bloom and it is warm.', cn: '因为花开而且很温暖。' },
    ]
  },
  {
    title: '谈论时间',
    icon: '⏰',
    color: 'bg-indigo-100 dark:bg-indigo-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'What time do you get up every day?', cn: '你每天几点起床？' },
      { speaker: 'B', text: 'I get up at 7 o\'clock.', cn: '我7点起床。' },
      { speaker: 'A', text: 'What time do you go to bed?', cn: '你几点睡觉？' },
      { speaker: 'B', text: 'I go to bed at 9 o\'clock.', cn: '我9点睡觉。' },
    ]
  },
  {
    title: '谈论日程',
    icon: '📋',
    color: 'bg-slate-100 dark:bg-slate-900',
    level: 2,
    scenario: [
      { speaker: 'A', text: 'What do you do on weekends?', cn: '你周末做什么？' },
      { speaker: 'B', text: 'I do my homework in the morning.', cn: '我早上做作业。' },
      { speaker: 'A', text: 'What about the afternoon?', cn: '下午呢？' },
      { speaker: 'B', text: 'I play with my friends.', cn: '我和朋友一起玩。' },
    ]
  },

  // === Level 3: 学校、家庭场景 (81-120) ===
  {
    title: '借东西给同学',
    icon: '✏️',
    color: 'bg-blue-100 dark:bg-blue-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'Hey, I forgot my ruler. Can I use yours?', cn: '嘿，我忘记带尺子了。可以用你的吗？' },
      { speaker: 'B', text: 'Sure, but please return it after class.', cn: '当然可以，但请课后还给我。' },
      { speaker: 'A', text: 'Thank you! I will give it back.', cn: '谢谢！我会还给你的。' },
      { speaker: 'B', text: 'No problem. Be careful with it.', cn: '没问题。小心一点。' },
      { speaker: 'A', text: 'I will. Thanks again!', cn: '我会的。再次感谢！' },
    ]
  },
  {
    title: '课堂提问',
    icon: '🙋',
    color: 'bg-green-100 dark:bg-green-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'Teacher, may I ask a question?', cn: '老师，我可以问个问题吗？' },
      { speaker: 'B', text: 'Of course, what is your question?', cn: '当然可以，你有什么问题？' },
      { speaker: 'A', text: 'I don\'t understand this word. Can you explain it?', cn: '我不明白这个单词。你能解释一下吗？' },
      { speaker: 'B', text: 'This word means "beautiful". For example...', cn: '这个单词的意思是"美丽的"。例如……' },
      { speaker: 'A', text: 'Oh, I see now. Thank you!', cn: '哦，我现在明白了。谢谢！' },
    ]
  },
  {
    title: '交作业',
    icon: '📝',
    color: 'bg-yellow-100 dark:bg-yellow-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'Here is my homework, teacher.', cn: '老师，这是我的作业。' },
      { speaker: 'B', text: 'Thank you. Did you finish all the questions?', cn: '谢谢。你完成所有问题了吗？' },
      { speaker: 'A', text: 'Yes, I did. But question 5 was hard.', cn: '是的，完成了。但是第5题很难。' },
      { speaker: 'B', text: 'That\'s okay. Let me check your answers.', cn: '没关系。让我检查一下你的答案。' },
      { speaker: 'A', text: 'I hope I did well.', cn: '希望我做得很好。' },
    ]
  },
  {
    title: '迟到道歉',
    icon: '⏰',
    color: 'bg-red-100 dark:bg-red-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'Sorry I am late, teacher.', cn: '对不起老师，我迟到了。' },
      { speaker: 'B', text: 'Why are you late today?', cn: '你今天为什么迟到？' },
      { speaker: 'A', text: 'I missed the bus this morning.', cn: '我早上错过了公交车。' },
      { speaker: 'B', text: 'Okay, come in and sit down. Don\'t be late again.', cn: '好吧，进来坐下。不要再迟到了。' },
      { speaker: 'A', text: 'I won\'t. Thank you, teacher.', cn: '我不会了。谢谢老师。' },
    ]
  },
  {
    title: '请求帮助',
    icon: '🤝',
    color: 'bg-purple-100 dark:bg-purple-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'Excuse me, can you help me with this problem?', cn: '打扰一下，你能帮我解决这个问题吗？' },
      { speaker: 'B', text: 'Sure! Let me see. Oh, this is easy.', cn: '当然！让我看看。哦，这个很简单。' },
      { speaker: 'A', text: 'Really? Can you show me how to do it?', cn: '真的吗？你能教我怎么做的吗？' },
      { speaker: 'B', text: 'First, you need to add these two numbers...', cn: '首先，你需要把这两个数字相加……' },
      { speaker: 'A', text: 'Oh, I understand now. Thank you so much!', cn: '哦，我现在懂了。非常感谢！' },
    ]
  },
  {
    title: '讨论考试',
    icon: '📚',
    color: 'bg-cyan-100 dark:bg-cyan-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'How was your English test?', cn: '你的英语考试怎么样？' },
      { speaker: 'B', text: 'It was okay, but I made some mistakes.', cn: '还可以，但我犯了一些错误。' },
      { speaker: 'A', text: 'What kind of mistakes?', cn: '什么样的错误？' },
      { speaker: 'B', text: 'I forgot some words and grammar rules.', cn: '我忘记了一些单词和语法规则。' },
      { speaker: 'A', text: 'Let\'s study together next time.', cn: '下次我们一起学习吧。' },
    ]
  },
  {
    title: '选择选修课',
    icon: '📖',
    color: 'bg-indigo-100 dark:bg-indigo-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'What elective course do you want to choose?', cn: '你想选什么选修课？' },
      { speaker: 'B', text: 'I am thinking about art class.', cn: '我在考虑美术课。' },
      { speaker: 'A', text: 'Art is fun! What will you learn?', cn: '美术很有趣！你会学到什么？' },
      { speaker: 'B', text: 'Drawing, painting, and making crafts.', cn: '画画、绘画和做手工。' },
      { speaker: 'A', text: 'That sounds great! I might choose it too.', cn: '听起来很棒！我可能也选这个。' },
    ]
  },
  {
    title: '运动会',
    icon: '🏃',
    color: 'bg-orange-100 dark:bg-orange-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'Are you going to join the sports meeting?', cn: '你要参加运动会吗？' },
      { speaker: 'B', text: 'Yes! I will run in the 100-meter race.', cn: '是的！我会参加100米赛跑。' },
      { speaker: 'A', text: 'That\'s exciting! Have you practiced?', cn: '太激动人心了！你练习了吗？' },
      { speaker: 'B', text: 'Every day after school. Come and cheer for me!', cn: '每天放学后都练习。来为我加油吧！' },
      { speaker: 'A', text: 'I will be there shouting for you!', cn: '我会在那里为你呐喊助威！' },
    ]
  },
  {
    title: '做值日',
    icon: '🧹',
    color: 'bg-emerald-100 dark:bg-emerald-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'It is our turn to clean the classroom today.', cn: '今天轮到我们打扫教室了。' },
      { speaker: 'B', text: 'Okay. What should we do?', cn: '好的。我们应该做什么？' },
      { speaker: 'A', text: 'I will sweep the floor and you clean the blackboard.', cn: '我来扫地，你来擦黑板。' },
      { speaker: 'B', text: 'Sure. Let\'s make our classroom clean and tidy.', cn: '好的。让我们把教室打扫干净整洁。' },
      { speaker: 'A', text: 'Work hard, finish quickly!', cn: '努力工作，快速完成！' },
    ]
  },
  {
    title: '小组讨论',
    icon: '💬',
    color: 'bg-pink-100 dark:bg-pink-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'Let\'s discuss this topic together.', cn: '让我们一起讨论这个话题。' },
      { speaker: 'B', text: 'Okay. I think we should start with a story.', cn: '好的。我觉得我们应该从故事开始。' },
      { speaker: 'A', text: 'Good idea! What kind of story?', cn: '好主意！什么样的故事？' },
      { speaker: 'B', text: 'A story about animals. Everyone loves animals.', cn: '关于动物的故事。大家都喜欢动物。' },
      { speaker: 'A', text: 'Great! Let\'s write our ideas down.', cn: '太好了！让我们把想法写下来。' },
    ]
  },
  {
    title: '借书讨论',
    icon: '📚',
    color: 'bg-blue-100 dark:bg-blue-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'I borrowed a new book from the library.', cn: '我从图书馆借了一本新书。' },
      { speaker: 'B', text: 'What is the book about?', cn: '这本书是关于什么的？' },
      { speaker: 'A', text: 'It is about space exploration. Very interesting!', cn: '是关于太空探索的。非常有意思！' },
      { speaker: 'B', text: 'Can I borrow it after you finish?', cn: '你看完后我可以借吗？' },
      { speaker: 'A', text: 'Of course! I will tell you when I am done.', cn: '当然可以！我看完后会告诉你的。' },
    ]
  },
  {
    title: '食堂吃饭',
    icon: '🍱',
    color: 'bg-red-100 dark:bg-red-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'What are you going to have for lunch?', cn: '你午餐吃什么？' },
      { speaker: 'B', text: 'I will have rice and chicken. What about you?', cn: '我吃米饭和鸡肉。你呢？' },
      { speaker: 'A', text: 'I want noodles and vegetables.', cn: '我想要面条和蔬菜。' },
      { speaker: 'B', text: 'The food here is delicious and cheap.', cn: '这里的食物既便宜又美味。' },
      { speaker: 'A', text: 'Yes! Let\'s find a table together.', cn: '是的！我们一起找张桌子吧。' },
    ]
  },
  {
    title: '家庭作业讨论',
    icon: '📝',
    color: 'bg-yellow-100 dark:bg-yellow-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'Did you finish your homework yesterday?', cn: '你昨天完成作业了吗？' },
      { speaker: 'B', text: 'Yes, I finished it before dinner.', cn: '是的，我在晚餐前完成了。' },
      { speaker: 'A', text: 'That was early! How long did it take?', cn: '那真早！花了多长时间？' },
      { speaker: 'B', text: 'About one hour. What about you?', cn: '大约一小时。你呢？' },
      { speaker: 'A', text: 'I did it after dinner. It took two hours.', cn: '我晚饭后做的，花了两个小时。' },
    ]
  },
  {
    title: '周末计划',
    icon: '📅',
    color: 'bg-teal-100 dark:bg-teal-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'What are you going to do this weekend?', cn: '这周末你打算做什么？' },
      { speaker: 'B', text: 'I will visit my grandparents on Saturday.', cn: '周六我要去看望祖父母。' },
      { speaker: 'A', text: 'That is nice. What about Sunday?', cn: '那很好。周日呢？' },
      { speaker: 'B', text: 'I will stay at home and prepare for the test.', cn: '我会待在家里准备考试。' },
      { speaker: 'A', text: 'You should rest too. Don\'t study too hard.', cn: '你也应该休息。不要学太辛苦。' },
    ]
  },
  {
    title: '帮忙做家务',
    icon: '🧹',
    color: 'bg-amber-100 dark:bg-amber-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'Can you help me wash the dishes?', cn: '你能帮我洗碗吗？' },
      { speaker: 'B', text: 'Sure, mom! I will do it right now.', cn: '当然可以，妈妈！我现在就做。' },
      { speaker: 'A', text: 'Thank you, honey. You are a good boy.', cn: '谢谢你，亲爱的。你是个好孩子。' },
      { speaker: 'B', text: 'I should help with housework.', cn: '我应该帮忙做家务。' },
      { speaker: 'A', text: 'After washing dishes, you can play games.', cn: '洗完碗后你可以玩游戏。' },
    ]
  },
  {
    title: '家庭晚餐',
    icon: '🍽️',
    color: 'bg-rose-100 dark:bg-rose-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'Dinner is ready! Come to the table.', cn: '晚饭好了！来餐桌吧。' },
      { speaker: 'B', text: 'Wow! This smells delicious!', cn: '哇！闻起来真香！' },
      { speaker: 'A', text: 'Today we have fish and vegetables.', cn: '今天有鱼和蔬菜。' },
      { speaker: 'B', text: 'My favorite! Thank you for cooking, mom.', cn: '我的最爱！谢谢你做饭，妈妈。' },
      { speaker: 'A', text: 'Eat more! You are growing up.', cn: '多吃点！你在长身体呢。' },
    ]
  },
  {
    title: '辅导作业',
    icon: '📚',
    color: 'bg-violet-100 dark:bg-violet-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'Dad, I don\'t understand this math problem.', cn: '爸爸，我不明白这道数学题。' },
      { speaker: 'B', text: 'Let me see. Read it to me.', cn: '让我看看。读给我听。' },
      { speaker: 'A', text: 'If I have 5 apples and eat 2, how many are left?', cn: '如果有5个苹果，我吃了2个，还剩几个？' },
      { speaker: 'B', text: 'That is subtraction. 5 minus 2 equals...', cn: '那是减法。5减2等于……' },
      { speaker: 'A', text: 'Three! Oh, I get it now!', cn: '3个！哦，我现在懂了！' },
    ]
  },
  {
    title: '家庭旅行',
    icon: '✈️',
    color: 'bg-sky-100 dark:bg-sky-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'Guess what? We are going on a trip!', cn: '猜猜看？我们要去旅行了！' },
      { speaker: 'B', text: 'Really? Where are we going?', cn: '真的吗？我们要去哪里？' },
      { speaker: 'A', text: 'We will visit the Great Wall in Beijing!', cn: '我们要去北京参观长城！' },
      { speaker: 'B', text: 'That\'s amazing! When are we leaving?', cn: '太棒了！我们什么时候出发？' },
      { speaker: 'A', text: 'Next Monday. You should pack your bag.', cn: '下周一。你应该收拾行李了。' },
    ]
  },
  {
    title: '生日礼物',
    icon: '🎁',
    color: 'bg-pink-100 dark:bg-pink-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'What do you want for your birthday?', cn: '你生日想要什么礼物？' },
      { speaker: 'B', text: 'I want a new bicycle, mom.', cn: '妈妈，我想要一辆新自行车。' },
      { speaker: 'A', text: 'A bicycle? That is a big gift.', cn: '自行车？那是个大礼物。' },
      { speaker: 'B', text: 'I will ride it to school every day.', cn: '我会每天骑它去上学。' },
      { speaker: 'A', text: 'Okay, if you get good grades, I will buy it.', cn: '好吧，如果你成绩好，我会买的。' },
    ]
  },
  {
    title: '看电视',
    icon: '📺',
    color: 'bg-slate-100 dark:bg-slate-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'Can I watch cartoons now?', cn: '我现在可以看动画片吗？' },
      { speaker: 'B', text: 'Have you finished your homework?', cn: '你完成作业了吗？' },
      { speaker: 'A', text: 'Yes, I finished it an hour ago.', cn: '是的，我一小时前就完成了。' },
      { speaker: 'B', text: 'Okay, you can watch for 30 minutes.', cn: '好的，你可以看30分钟。' },
      { speaker: 'A', text: 'Thank you! I will not watch too long.', cn: '谢谢！我不会看太久的。' },
    ]
  },
  {
    title: '购物讨论',
    icon: '🛒',
    color: 'bg-orange-100 dark:bg-orange-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'Let\'s go shopping for new school supplies.', cn: '我们去买新文具吧。' },
      { speaker: 'B', text: 'I need new pencils and notebooks.', cn: '我需要新铅笔和笔记本。' },
      { speaker: 'A', text: 'Do you need a new school bag?', cn: '你需要新书包吗？' },
      { speaker: 'B', text: 'Yes, my old one is broken.', cn: '是的，我的旧书包坏了。' },
      { speaker: 'A', text: 'Okay, let\'s buy a blue one like you wanted.', cn: '好的，那就买个像你想要的那种蓝色书包吧。' },
    ]
  },
  {
    title: '谈论梦想',
    icon: '💫',
    color: 'bg-purple-100 dark:bg-purple-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'What do you want to be in the future?', cn: '你未来想成为什么？' },
      { speaker: 'B', text: 'I want to be a teacher.', cn: '我想成为一名老师。' },
      { speaker: 'A', text: 'Why do you want to be a teacher?', cn: '你为什么想成为老师？' },
      { speaker: 'B', text: 'Because I like teaching children.', cn: '因为我喜欢教孩子。' },
      { speaker: 'A', text: 'That is a great dream! I am sure you can do it.', cn: '那是个伟大的梦想！我相信你能做到。' },
    ]
  },
  {
    title: '谈论特长',
    icon: '🎨',
    color: 'bg-indigo-100 dark:bg-indigo-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'Do you have any special talents?', cn: '你有什么特长吗？' },
      { speaker: 'B', text: 'I can sing very well. What about you?', cn: '我唱歌很好。你呢？' },
      { speaker: 'A', text: 'I can dance. I learned it for three years.', cn: '我会跳舞，我学了三年了。' },
      { speaker: 'B', text: 'That is amazing! Can you show me?', cn: '太厉害了！你能展示一下吗？' },
      { speaker: 'A', text: 'Sure! Let\'s perform together at the school show.', cn: '当然！我们在学校表演上一起表演吧。' },
    ]
  },
  {
    title: '讨论书籍',
    icon: '📖',
    color: 'bg-amber-100 dark:bg-amber-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'What kind of books do you like to read?', cn: '你喜欢读什么类型的书？' },
      { speaker: 'B', text: 'I like storybooks about adventures.', cn: '我喜欢冒险故事书。' },
      { speaker: 'A', text: 'I like science books. They are interesting.', cn: '我喜欢科学书，很有意思。' },
      { speaker: 'B', text: 'What is the last book you read?', cn: '你读的最后一本书是什么？' },
      { speaker: 'A', text: 'A book about dinosaurs. It was great!', cn: '一本关于恐龙的书，太棒了！' },
    ]
  },
  {
    title: '讨论电影',
    icon: '🎬',
    color: 'bg-red-100 dark:bg-red-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'What movie did you watch last weekend?', cn: '你上周末看了什么电影？' },
      { speaker: 'B', text: 'I watched "The Lion King".', cn: '我看了《狮子王》。' },
      { speaker: 'A', text: 'Is it good? I want to watch it too.', cn: '好看吗？我也想看。' },
      { speaker: 'B', text: 'Yes, it is very touching and beautiful.', cn: '是的，非常感人又美丽。' },
      { speaker: 'A', text: 'Maybe we can watch it together next time.', cn: '也许下次我们可以一起看。' },
    ]
  },
  {
    title: '讨论游戏',
    icon: '🎮',
    color: 'bg-green-100 dark:bg-green-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'Do you like playing video games?', cn: '你喜欢玩电子游戏吗？' },
      { speaker: 'B', text: 'Yes, but only on weekends.', cn: '喜欢，但只在周末玩。' },
      { speaker: 'A', text: 'What is your favorite game?', cn: '你最喜欢的游戏是什么？' },
      { speaker: 'B', text: 'I like puzzle games. They make me think.', cn: '我喜欢益智游戏，它们让我思考。' },
      { speaker: 'A', text: 'I like racing games. They are exciting!', cn: '我喜欢赛车游戏，很刺激！' },
    ]
  },
  {
    title: '讨论健康',
    icon: '🏥',
    color: 'bg-teal-100 dark:bg-teal-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'You look very healthy. What do you do?', cn: '你看起来很健康，你做什么运动？' },
      { speaker: 'B', text: 'I exercise every morning and eat healthy food.', cn: '我每天早上锻炼，吃健康的食物。' },
      { speaker: 'A', text: 'What exercises do you do?', cn: '你做什么锻炼？' },
      { speaker: 'B', text: 'Running and jumping rope.', cn: '跑步和跳绳。' },
      { speaker: 'A', text: 'I should start exercising too.', cn: '我也应该开始锻炼了。' },
    ]
  },
  {
    title: '讨论安全',
    icon: '⚠️',
    color: 'bg-yellow-100 dark:bg-yellow-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'Do you know how to stay safe at school?', cn: '你知道在学校如何保持安全吗？' },
      { speaker: 'B', text: 'Yes, we should follow the teacher\'s instructions.', cn: '知道，我们应该听从老师的指导。' },
      { speaker: 'A', text: 'What else should we do?', cn: '还有什么我们应该做的？' },
      { speaker: 'B', text: 'Don\'t run in the hallway and be careful on stairs.', cn: '不要在走廊里跑，在楼梯上要小心。' },
      { speaker: 'A', text: 'Good advice. Safety is very important.', cn: '好建议。安全非常重要。' },
    ]
  },
  {
    title: '讨论友谊',
    icon: '🤝',
    color: 'bg-pink-100 dark:bg-pink-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'What makes a good friend?', cn: '什么样的朋友才是好朋友？' },
      { speaker: 'B', text: 'A good friend should be kind and helpful.', cn: '好朋友应该善良且乐于助人。' },
      { speaker: 'A', text: 'Yes, and should share things with you.', cn: '是的，还应该愿意和你分享。' },
      { speaker: 'B', text: 'Also, a good friend never lies.', cn: '还有，好朋友从不说谎。' },
      { speaker: 'A', text: 'I am glad you are my good friend!', cn: '很高兴你是我的好朋友！' },
    ]
  },
  {
    title: '讨论礼貌',
    icon: '🎩',
    color: 'bg-slate-100 dark:bg-slate-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'Why is it important to be polite?', cn: '为什么有礼貌很重要？' },
      { speaker: 'B', text: 'Being polite makes people feel good.', cn: '有礼貌让人感觉很好。' },
      { speaker: 'A', text: 'What words should we use often?', cn: '我们应该经常使用哪些词？' },
      { speaker: 'B', text: 'Please, thank you, sorry, and excuse me.', cn: '请、谢谢、对不起和打扰了。' },
      { speaker: 'A', text: 'I will try to use these words more often.', cn: '我会试着更常使用这些词。' },
    ]
  },
  {
    title: '讨论环保',
    icon: '🌿',
    color: 'bg-green-100 dark:bg-green-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'What can we do to protect the environment?', cn: '我们能做些什么来保护环境？' },
      { speaker: 'B', text: 'We should not throw trash on the ground.', cn: '我们不应该把垃圾扔在地上。' },
      { speaker: 'A', text: 'Anything else?', cn: '还有什么吗？' },
      { speaker: 'B', text: 'Save water and electricity. Use less plastic.', cn: '节约用水用电。少用塑料。' },
      { speaker: 'A', text: 'Small actions can make a big difference!', cn: '小小的行动也能带来巨大的改变！' },
    ]
  },
  {
    title: '讨论时间管理',
    icon: '⏰',
    color: 'bg-blue-100 dark:bg-blue-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'How do you manage your time every day?', cn: '你每天怎么管理时间？' },
      { speaker: 'B', text: 'I make a schedule for everything I do.', cn: '我会把所有事情都做一个时间表。' },
      { speaker: 'A', text: 'Does it help?', cn: '这有帮助吗？' },
      { speaker: 'B', text: 'Yes, I can finish tasks on time and have time to play.', cn: '是的，我能按时完成任务，还有时间玩。' },
      { speaker: 'A', text: 'I should make a schedule too!', cn: '我也应该做一个时间表！' },
    ]
  },
  {
    title: '讨论学习习惯',
    icon: '📚',
    color: 'bg-purple-100 dark:bg-purple-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'What are good study habits?', cn: '什么是好的学习习惯？' },
      { speaker: 'B', text: 'Review lessons after class and take notes.', cn: '课后复习和做笔记。' },
      { speaker: 'A', text: 'What else?', cn: '还有什么？' },
      { speaker: 'B', text: 'Ask questions when you don\'t understand.', cn: '不懂的时候要提问。' },
      { speaker: 'A', text: 'I will try to develop these habits.', cn: '我会试着培养这些习惯。' },
    ]
  },
  {
    title: '讨论交通',
    icon: '🚗',
    color: 'bg-orange-100 dark:bg-orange-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'How do you go to school every day?', cn: '你每天怎么去上学？' },
      { speaker: 'B', text: 'I go by school bus. What about you?', cn: '我坐校车去。你呢？' },
      { speaker: 'A', text: 'My father drives me.', cn: '我爸爸开车送我。' },
      { speaker: 'B', text: 'That is convenient. Do you live far from school?', cn: '那很方便。你住得离学校远吗？' },
      { speaker: 'A', text: 'Yes, it takes 30 minutes.', cn: '是的，要花30分钟。' },
    ]
  },
  {
    title: '讨论假期',
    icon: '🏖️',
    color: 'bg-cyan-100 dark:bg-cyan-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'What did you do on your summer holiday?', cn: '你暑假做了什么？' },
      { speaker: 'B', text: 'I went to an English summer camp.', cn: '我去了一个英语夏令营。' },
      { speaker: 'A', text: 'Was it fun? What did you learn?', cn: '好玩吗？你学到了什么？' },
      { speaker: 'B', text: 'Yes! I learned many new words and made friends.', cn: '好玩！我学了很多新单词，还交了朋友。' },
      { speaker: 'A', text: 'I want to join next year!', cn: '我明年也想参加！' },
    ]
  },
  {
    title: '讨论梦想大学',
    icon: '🎓',
    color: 'bg-indigo-100 dark:bg-indigo-900',
    level: 3,
    scenario: [
      { speaker: 'A', text: 'Which university do you want to go to?', cn: '你想去哪所大学？' },
      { speaker: 'B', text: 'I want to go to Peking University.', cn: '我想去北京大学。' },
      { speaker: 'A', text: 'That is a great university! What do you want to study?', cn: '那是一所很棒的大学！你想学什么？' },
      { speaker: 'B', text: 'I want to study medicine.', cn: '我想学医学。' },
      { speaker: 'A', text: 'I will study hard and go there with you!', cn: '我会努力学习，和你一起去那里！' },
    ]
  },

  // === Level 4: 社交、购物、旅行场景 (121-160) ===
  {
    title: '新邻居',
    icon: '🏘️',
    color: 'bg-green-100 dark:bg-green-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'Hello, I just moved in next door.', cn: '你好，我刚搬来隔壁。' },
      { speaker: 'B', text: 'Welcome to the neighborhood! I am your neighbor, Mary.', cn: '欢迎来到这个社区！我是你的邻居玛丽。' },
      { speaker: 'A', text: 'Nice to meet you, Mary. I am Tom.', cn: '很高兴认识你，玛丽。我是汤姆。' },
      { speaker: 'B', text: 'Nice to meet you too! Do you need any help?', cn: '我也很高兴认识你！需要帮助吗？' },
      { speaker: 'A', text: 'Thank you. Could you tell me where the supermarket is?', cn: '谢谢。你能告诉我超市在哪里吗？' },
    ]
  },
  {
    title: '感谢邻居',
    icon: '🏡',
    color: 'bg-yellow-100 dark:bg-yellow-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'Thank you for taking care of my cat last week.', cn: '谢谢你上周帮我照顾猫。' },
      { speaker: 'B', text: 'You are welcome! Your cat is so cute.', cn: '不客气！你的猫太可爱了。' },
      { speaker: 'A', text: 'Here are some cookies for you.', cn: '这里有一些饼干给你。' },
      { speaker: 'B', text: 'Oh, that is so kind of you! Thank you very much!', cn: '哦，你太好了！非常感谢！' },
      { speaker: 'A', text: 'Anytime you need help, just let me know.', cn: '无论什么时候需要帮助，尽管告诉我。' },
    ]
  },
  {
    title: '社区活动',
    icon: '🎪',
    color: 'bg-pink-100 dark:bg-pink-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'Did you hear about the community party this weekend?', cn: '你听说这个周末的社区聚会了吗？' },
      { speaker: 'B', text: 'Yes! Are you going?', cn: '听说了！你要去吗？' },
      { speaker: 'A', text: 'Yes, with my family. What about you?', cn: '是的，我和家人一起去。你呢？' },
      { speaker: 'B', text: 'We are going too. Let\'s meet there!', cn: '我们也去。我们到时候在那里见吧！' },
      { speaker: 'A', text: 'Great! It will be fun to see everyone.', cn: '太好了！见到大家一定很有趣。' },
    ]
  },
  {
    title: '图书馆交流',
    icon: '📚',
    color: 'bg-blue-100 dark:bg-blue-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'Excuse me, is this seat taken?', cn: '打扰一下，这个座位有人坐吗？' },
      { speaker: 'B', text: 'No, you can sit here.', cn: '没有，你可以坐这里。' },
      { speaker: 'A', text: 'Thank you. What are you reading?', cn: '谢谢。你在看什么书？' },
      { speaker: 'B', text: 'I am reading a book about history. And you?', cn: '我在看一本历史书。你呢？' },
      { speaker: 'A', text: 'I am studying for my English exam.', cn: '我在准备英语考试。' },
    ]
  },
  {
    title: '公园野餐',
    icon: '🧺',
    color: 'bg-green-100 dark:bg-green-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'The weather is perfect for a picnic today!', cn: '今天天气完美，适合野餐！' },
      { speaker: 'B', text: 'Yes! Let\'s go to the park.', cn: '是的！我们去公园吧。' },
      { speaker: 'A', text: 'What food should we bring?', cn: '我们应该带什么食物？' },
      { speaker: 'B', text: 'Sandwiches, fruits, and some juice.', cn: '三明治、水果和一些果汁。' },
      { speaker: 'A', text: 'Great! I will prepare the food. You bring the blanket.', cn: '太好了！我来准备食物。你带毯子。' },
    ]
  },
  {
    title: '健身房交流',
    icon: '💪',
    color: 'bg-orange-100 dark:bg-orange-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'Do you come to the gym often?', cn: '你经常来健身房吗？' },
      { speaker: 'B', text: 'Yes, I come here every Monday, Wednesday, and Friday.', cn: '是的，我每周一、三、五都来。' },
      { speaker: 'A', text: 'That is great! What exercises do you do?', cn: '太棒了！你做什么运动？' },
      { speaker: 'B', text: 'I run on the treadmill and lift weights.', cn: '我在跑步机上跑步，还有举重。' },
      { speaker: 'A', text: 'Can you show me how to use this machine?', cn: '你能教我怎么用这个机器吗？' },
    ]
  },
  {
    title: '邮局咨询',
    icon: '📮',
    color: 'bg-red-100 dark:bg-red-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'I would like to send this package to Shanghai.', cn: '我想把这个包裹寄到上海。' },
      { speaker: 'B', text: 'How would you like to send it? Express or regular?', cn: '你想怎么寄？快递还是普通？' },
      { speaker: 'A', text: 'Express, please. How long will it take?', cn: '快递。要多久？' },
      { speaker: 'B', text: 'About 2 days. It will cost 25 yuan.', cn: '大约2天。要25元。' },
      { speaker: 'A', text: 'That is fine. Here is the money and the address.', cn: '好的。这是钱和地址。' },
    ]
  },
  {
    title: '银行开户',
    icon: '🏦',
    color: 'bg-slate-100 dark:bg-slate-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'I would like to open a new account.', cn: '我想开一个新账户。' },
      { speaker: 'B', text: 'What kind of account? Savings or checking?', cn: '什么类型的账户？储蓄还是支票？' },
      { speaker: 'A', text: 'A savings account. I want to save money.', cn: '储蓄账户。我想存钱。' },
      { speaker: 'B', text: 'Please fill out this form. Do you have an ID?', cn: '请填写这张表格。你有身份证吗？' },
      { speaker: 'A', text: 'Yes, here is my ID card.', cn: '有，这是我的身份证。' },
    ]
  },
  {
    title: '药店购药',
    icon: '💊',
    color: 'bg-emerald-100 dark:bg-emerald-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'I have a bad headache. What medicine do you recommend?', cn: '我头疼得厉害。你推荐什么药？' },
      { speaker: 'B', text: 'You can try this painkiller. It works well.', cn: '你可以试试这种止痛药，效果很好。' },
      { speaker: 'A', text: 'How many should I take?', cn: '我应该吃多少？' },
      { speaker: 'B', text: 'One tablet every 6 hours. Do not take more than 4 a day.', cn: '每6小时一片。一天不要超过4片。' },
      { speaker: 'A', text: 'Okay, thank you. How much is it?', cn: '好的，谢谢。多少钱？' },
    ]
  },
  {
    title: '服装店',
    icon: '👕',
    color: 'bg-purple-100 dark:bg-purple-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'Can I help you find something?', cn: '我能帮你找点什么吗？' },
      { speaker: 'B', text: 'Yes, I am looking for a T-shirt for my son.', cn: '是的，我在给我儿子找T恤。' },
      { speaker: 'A', text: 'What size does he wear?', cn: '他穿什么尺码？' },
      { speaker: 'B', text: 'He is 10 years old, so maybe size M.', cn: '他10岁，可能是M码。' },
      { speaker: 'A', text: 'How about this blue one? It is very popular.', cn: '这件蓝色的怎么样？很受欢迎。' },
    ]
  },
  {
    title: '书店购书',
    icon: '📚',
    color: 'bg-amber-100 dark:bg-amber-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'Welcome! Are you looking for any specific book?', cn: '欢迎！你在找什么特定的书吗？' },
      { speaker: 'B', text: 'Yes, I am looking for children\'s storybooks.', cn: '是的，我在找儿童故事书。' },
      { speaker: 'A', text: 'They are on the second floor. What age group?', cn: '在二楼。什么年龄段？' },
      { speaker: 'B', text: 'For 8-10 years old. Any recommendations?', cn: '8-10岁的。有什么推荐吗？' },
      { speaker: 'A', text: 'This series is very popular. Kids love them!', cn: '这个系列很受欢迎，孩子们很喜欢！' },
    ]
  },
  {
    title: '水果店',
    icon: '🍎',
    color: 'bg-red-100 dark:bg-red-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'These apples look fresh. How much per kilogram?', cn: '这些苹果看起来很新鲜。多少钱一公斤？' },
      { speaker: 'B', text: '8 yuan per kilogram. They are very sweet.', cn: '一公斤8元。它们非常甜。' },
      { speaker: 'A', text: 'I will take 2 kilograms. Can you give me a discount?', cn: '我要2公斤。能给我打折吗？' },
      { speaker: 'B', text: 'Since you buy 2 kilograms, I can give you 15 yuan.', cn: '既然你买2公斤，我可以给你15元。' },
      { speaker: 'A', text: 'Thank you! Here is the money.', cn: '谢谢！这是钱。' },
    ]
  },
  {
    title: '面包店',
    icon: '🍞',
    color: 'bg-yellow-100 dark:bg-yellow-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'What kind of bread do you have today?', cn: '今天你们有什么面包？' },
      { speaker: 'B', text: 'We have white bread, whole wheat bread, and croissants.', cn: '我们有白面包、全麦面包和羊角面包。' },
      { speaker: 'A', text: 'Which one is the healthiest?', cn: '哪种最健康？' },
      { speaker: 'B', text: 'Whole wheat bread has more fiber and is healthier.', cn: '全麦面包含更多纤维，更健康。' },
      { speaker: 'A', text: 'Okay, I will take a loaf of whole wheat bread.', cn: '好的，我要一条全麦面包。' },
    ]
  },
  {
    title: '咖啡馆',
    icon: '☕',
    color: 'bg-amber-100 dark:bg-amber-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'Welcome! What can I get for you today?', cn: '欢迎！今天我能为你做点什么？' },
      { speaker: 'B', text: 'I would like a latte, please.', cn: '我要一杯拿铁。' },
      { speaker: 'A', text: 'Hot or iced? And what size?', cn: '热的还是冰的？什么杯型？' },
      { speaker: 'B', text: 'Iced, medium size. Do you have any snacks?', cn: '冰的，中杯。有什么零食吗？' },
      { speaker: 'A', text: 'Yes, we have muffins and cookies. Would you like one?', cn: '有的，有松饼和饼干。想要一个吗？' },
    ]
  },
  {
    title: '餐厅点餐',
    icon: '🍽️',
    color: 'bg-rose-100 dark:bg-rose-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'Good evening! Here is the menu.', cn: '晚上好！这是菜单。' },
      { speaker: 'B', text: 'Thank you. What do you recommend today?', cn: '谢谢。今天你推荐什么？' },
      { speaker: 'A', text: 'Our beef steak is excellent today.', cn: '我们今天的牛排非常棒。' },
      { speaker: 'B', text: 'That sounds good. I will have the steak, medium rare.', cn: '听起来不错。我要牛排，五分熟。' },
      { speaker: 'A', text: 'Great choice! What would you like to drink?', cn: '很好的选择！你想喝点什么？' },
    ]
  },
  {
    title: '快餐店',
    icon: '🍔',
    color: 'bg-orange-100 dark:bg-orange-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'Welcome! May I take your order?', cn: '欢迎！我可以点餐了吗？' },
      { speaker: 'B', text: 'Yes, I would like a cheeseburger and fries.', cn: '是的，我要一个芝士汉堡和薯条。' },
      { speaker: 'A', text: 'Do you want to make it a combo? It comes with a drink.', cn: '要套餐吗？包含一杯饮料。' },
      { speaker: 'B', text: 'Yes, please. I would like a cola.', cn: '是的，请给我一杯可乐。' },
      { speaker: 'A', text: 'For here or to go?', cn: '在这里吃还是带走？' },
    ]
  },
  {
    title: '电影院',
    icon: '🎬',
    color: 'bg-indigo-100 dark:bg-indigo-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'Two tickets for the 7:00 show, please.', cn: '请给我两张7点场的票。' },
      { speaker: 'B', text: 'Which movie? "The Adventure" or "Love Story"?', cn: '哪部电影？《冒险》还是《爱情故事》？' },
      { speaker: 'A', text: '"The Adventure". Where are the seats?', cn: '《冒险》。座位在哪里？' },
      { speaker: 'B', text: 'Row 5, seats 12 and 13. Here are your tickets.', cn: '第5排，12号和13号。这是你的票。' },
      { speaker: 'A', text: 'Thank you. What time does the movie end?', cn: '谢谢。电影几点结束？' },
    ]
  },
  {
    title: '博物馆',
    icon: '🏛️',
    color: 'bg-stone-100 dark:bg-stone-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'Excuse me, where is the dinosaur exhibition?', cn: '打扰一下，恐龙展览在哪里？' },
      { speaker: 'B', text: 'It is on the third floor. Follow the signs.', cn: '在四楼。跟着标识走。' },
      { speaker: 'A', text: 'How much is the entrance fee?', cn: '门票多少钱？' },
      { speaker: 'B', text: 'It is free for students today. Show your student ID.', cn: '今天学生免费。出示你的学生证。' },
      { speaker: 'A', text: 'Great! Thank you very much.', cn: '太好了！非常感谢。' },
    ]
  },
  {
    title: '旅游景点',
    icon: '🏔️',
    color: 'bg-cyan-100 dark:bg-cyan-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'This place is beautiful! Do you come here often?', cn: '这个地方真美！你经常来吗？' },
      { speaker: 'B', text: 'Yes, I love it here. The view is amazing.', cn: '是的，我喜欢这里。风景太棒了。' },
      { speaker: 'A', text: 'Where is the best spot for photos?', cn: '哪里拍照最好看？' },
      { speaker: 'B', text: 'Follow me, I will show you a hidden spot.', cn: '跟我来，我带你去一个隐藏的好地方。' },
      { speaker: 'A', text: 'Thank you! You are a great guide.', cn: '谢谢！你是个很好的向导。' },
    ]
  },
  {
    title: '机场问询',
    icon: '✈️',
    color: 'bg-sky-100 dark:bg-sky-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'Excuse me, where can I check in for flight CA1234?', cn: '打扰一下，我在哪里办理CA1234航班的登机手续？' },
      { speaker: 'B', text: 'Go to counter 15. It is over there.', cn: '去15号柜台。就在那边。' },
      { speaker: 'A', text: 'Thank you. What time does the flight start boarding?', cn: '谢谢。航班什么时候开始登机？' },
      { speaker: 'B', text: 'Boarding starts at 10:30. You have plenty of time.', cn: '10:30开始登机。你时间很充足。' },
      { speaker: 'A', text: 'One more question, where is the security check?', cn: '还有一个问题，安检在哪里？' },
    ]
  },
  {
    title: '火车站',
    icon: '🚄',
    color: 'bg-green-100 dark:bg-green-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'Which platform does the train to Shanghai depart from?', cn: '去上海的火车从哪个站台出发？' },
      { speaker: 'B', text: 'Platform 3. The train will leave in 10 minutes.', cn: '3号站台。火车10分钟后出发。' },
      { speaker: 'A', text: 'Where is the waiting room?', cn: '候车室在哪里？' },
      { speaker: 'B', text: 'Go straight and turn left. You will see it.', cn: '直走然后左转，你会看到的。' },
      { speaker: 'A', text: 'Thank you. Is there a restaurant nearby?', cn: '谢谢。附近有餐厅吗？' },
    ]
  },
  {
    title: '公交车站',
    icon: '🚌',
    color: 'bg-yellow-100 dark:bg-yellow-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'Excuse me, does bus number 5 go to the city center?', cn: '打扰一下，5路公交去市中心吗？' },
      { speaker: 'B', text: 'Yes, it does. Do you want to go there?', cn: '是的，去。你要去那里吗？' },
      { speaker: 'A', text: 'Yes. How long does it take?', cn: '是的。要多久？' },
      { speaker: 'B', text: 'About 20 minutes, depending on traffic.', cn: '大约20分钟，看交通情况。' },
      { speaker: 'A', text: 'Do I need to buy a ticket on the bus?', cn: '我需要上车买票吗？' },
    ]
  },
  {
    title: '出租车',
    icon: '🚕',
    color: 'bg-yellow-100 dark:bg-yellow-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'Taxi! Where are you going?', cn: '出租车！你要去哪里？' },
      { speaker: 'B', text: 'To the train station, please.', cn: '请去火车站。' },
      { speaker: 'A', text: 'Okay, get in. Do you need to hurry?', cn: '好的，上车。需要赶时间吗？' },
      { speaker: 'B', text: 'Yes, please. My train leaves in 30 minutes.', cn: '是的，我的火车30分钟后出发。' },
      { speaker: 'A', text: 'Don\'t worry. I know a shortcut.', cn: '别担心，我知道一条近路。' },
    ]
  },
  {
    title: '自行车租赁',
    icon: '🚲',
    color: 'bg-blue-100 dark:bg-blue-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'I would like to rent a bicycle.', cn: '我想租一辆自行车。' },
      { speaker: 'B', text: 'Sure! How many hours do you need?', cn: '当然可以！你需要几个小时？' },
      { speaker: 'A', text: 'About 3 hours. How much is it?', cn: '大约3小时。多少钱？' },
      { speaker: 'B', text: 'It is 10 yuan per hour. So 30 yuan total.', cn: '一小时10元。总共30元。' },
      { speaker: 'A', text: 'Okay, here is my ID and deposit.', cn: '好的，这是我的身份证和押金。' },
    ]
  },
  {
    title: '地铁站',
    icon: '🚇',
    color: 'bg-violet-100 dark:bg-violet-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'Excuse me, which line should I take to go to the zoo?', cn: '打扰一下，去动物园应该坐哪条线？' },
      { speaker: 'B', text: 'Take Line 2 and get off at Zoo Station.', cn: '坐2号线，在动物园站下车。' },
      { speaker: 'A', text: 'Where is the ticket machine?', cn: '售票机在哪里？' },
      { speaker: 'B', text: 'It is over there next to the entrance.', cn: '就在入口旁边。' },
      { speaker: 'A', text: 'Thank you. Do I need to transfer?', cn: '谢谢。我需要换乘吗？' },
    ]
  },
  {
    title: '酒店前台',
    icon: '🏨',
    color: 'bg-emerald-100 dark:bg-emerald-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'Welcome to our hotel! How can I help you?', cn: '欢迎来到我们酒店！我能帮你吗？' },
      { speaker: 'B', text: 'I have a reservation under the name John Smith.', cn: '我预订了房间，名字是约翰·史密斯。' },
      { speaker: 'A', text: 'Let me check... Yes, a double room for two nights.', cn: '让我查一下……是的，一个双人房，住两晚。' },
      { speaker: 'B', text: 'Yes, that is correct. What time is breakfast served?', cn: '对。早餐几点供应？' },
      { speaker: 'A', text: 'Breakfast is from 7:00 to 10:00 in the restaurant.', cn: '早餐7:00到10:00在餐厅供应。' },
    ]
  },
  {
    title: '酒店客房服务',
    icon: '🛎️',
    color: 'bg-rose-100 dark:bg-rose-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'Hello, room service. How can I help?', cn: '你好，客房服务。我能帮你吗？' },
      { speaker: 'B', text: 'Could you bring some extra towels to room 305?', cn: '你能给305房间送一些额外的毛巾吗？' },
      { speaker: 'A', text: 'Certainly. Anything else you need?', cn: '当然可以。还需要别的吗？' },
      { speaker: 'B', text: 'Yes, we need drinking water too.', cn: '是的，我们还需要饮用水。' },
      { speaker: 'A', text: 'I will bring them in 5 minutes. Thank you for calling.', cn: '我5分钟内送过去。感谢来电。' },
    ]
  },
  {
    title: '洗衣服务',
    icon: '👔',
    color: 'bg-blue-100 dark:bg-blue-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'I would like to have these clothes washed.', cn: '我想把这些衣服洗一下。' },
      { speaker: 'B', text: 'Okay. When do you need them?', cn: '好的。你什么时候需要？' },
      { speaker: 'A', text: 'Can I get them back tomorrow morning?', cn: '明天早上能拿回来吗？' },
      { speaker: 'B', text: 'Yes, we can do express service. It costs 50% more.', cn: '可以的，我们可以做加急服务，费用多50%。' },
      { speaker: 'A', text: 'That is fine. How much is the total?', cn: '好的。总共多少钱？' },
    ]
  },
  {
    title: '游泳馆',
    icon: '🏊',
    color: 'bg-cyan-100 dark:bg-cyan-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'Welcome to our swimming pool. Adult or child?', cn: '欢迎来到我们的游泳馆。成人还是儿童？' },
      { speaker: 'B', text: 'One adult and two children, please.', cn: '一个成人，两个儿童。' },
      { speaker: 'A', text: 'That will be 80 yuan. Do you need a swimming cap?', cn: '总共80元。需要泳帽吗？' },
      { speaker: 'B', text: 'Yes, we forgot to bring ours.', cn: '需要，我们忘记带了。' },
      { speaker: 'A', text: 'We rent them for 10 yuan each. Here you go.', cn: '我们要出租，每个10元。给你。' },
    ]
  },
  {
    title: '网球场地',
    icon: '🎾',
    color: 'bg-green-100 dark:bg-green-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'I would like to book a tennis court for tomorrow.', cn: '我想预订明天的网球场地。' },
      { speaker: 'B', text: 'What time would you prefer?', cn: '你想要什么时间？' },
      { speaker: 'A', text: 'From 3:00 to 5:00 in the afternoon.', cn: '下午3:00到5:00。' },
      { speaker: 'B', text: 'That time is available. Would you like a coach?', cn: '那个时间段可以。需要教练吗？' },
      { speaker: 'A', text: 'No, just the court. How much is it?', cn: '不需要，只要场地。多少钱？' },
    ]
  },
  {
    title: '瑜伽课程',
    icon: '🧘',
    color: 'bg-purple-100 dark:bg-purple-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'I am interested in your yoga classes.', cn: '我对你们的瑜伽课程感兴趣。' },
      { speaker: 'B', text: 'Great! We have beginner and advanced classes.', cn: '太好了！我们有初级和高级课程。' },
      { speaker: 'A', text: 'I have never done yoga before. Which one should I choose?', cn: '我从没做过瑜伽。应该选哪个？' },
      { speaker: 'B', text: 'I recommend the beginner class on Monday evenings.', cn: '我推荐周一晚上的初级课程。' },
      { speaker: 'A', text: 'What time does it start? How many students in a class?', cn: '几点开始？一个班有多少学生？' },
    ]
  },
  {
    title: '舞蹈学校',
    icon: '💃',
    color: 'bg-pink-100 dark:bg-pink-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'What kind of dance classes do you offer?', cn: '你们提供什么舞蹈课程？' },
      { speaker: 'B', text: 'We have ballet, jazz, and hip hop classes.', cn: '我们有芭蕾、爵士和嘻哈课程。' },
      { speaker: 'A', text: 'My daughter is 8 years old. Which class is suitable?', cn: '我女儿8岁，哪个课程适合？' },
      { speaker: 'B', text: 'Ballet is great for her age. Would you like to try a free class?', cn: '芭蕾适合她那个年龄。你想试听一节免费课吗？' },
      { speaker: 'A', text: 'Yes, when is the next ballet class?', cn: '好的，下节芭蕾课是什么时候？' },
    ]
  },
  {
    title: '音乐学校',
    icon: '🎵',
    color: 'bg-indigo-100 dark:bg-indigo-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'My son wants to learn piano. Do you have classes?', cn: '我儿子想学钢琴，你们有课程吗？' },
      { speaker: 'B', text: 'Yes, we have excellent piano teachers.', cn: '有的，我们有优秀的钢琴老师。' },
      { speaker: 'A', text: 'How long is each class? And how much?', cn: '每节课多长？多少钱？' },
      { speaker: 'B', text: 'Each class is 45 minutes, 100 yuan per class.', cn: '每节课45分钟，100元一节。' },
      { speaker: 'A', text: 'Can we try one class first?', cn: '我们能先试听一节课吗？' },
    ]
  },
  {
    title: '美术班',
    icon: '🎨',
    color: 'bg-orange-100 dark:bg-orange-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'What do students learn in your art class?', cn: '学生在你们的美术班学什么？' },
      { speaker: 'B', text: 'Drawing, painting, and basic art skills.', cn: '素描、绘画和基础美术技能。' },
      { speaker: 'A', text: 'What materials do students need to bring?', cn: '学生需要带什么材料？' },
      { speaker: 'B', text: 'We provide all materials. Just bring yourself!', cn: '我们提供所有材料。带上你自己就行！' },
      { speaker: 'A', text: 'That is great! What are the class hours?', cn: '太好了！上课时间是什么时候？' },
    ]
  },
  {
    title: '夏令营咨询',
    icon: '⛺',
    color: 'bg-green-100 dark:bg-green-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'I am interested in the summer camp. Can you tell me about it?', cn: '我对夏令营感兴趣。能介绍一下吗？' },
      { speaker: 'B', text: 'Our summer camp is for children aged 6-12.', cn: '我们的夏令营面向6-12岁的儿童。' },
      { speaker: 'A', text: 'What activities do they do?', cn: '他们做什么活动？' },
      { speaker: 'B', text: 'Swimming, hiking, arts and crafts, and English lessons.', cn: '游泳、徒步、手工和英语课。' },
      { speaker: 'A', text: 'When does it start and how long?', cn: '什么时候开始？多长时间？' },
    ]
  },
  {
    title: '补习班',
    icon: '📚',
    color: 'bg-blue-100 dark:bg-blue-900',
    level: 4,
    scenario: [
      { speaker: 'A', text: 'My daughter needs help with English. Do you have classes?', cn: '我女儿需要英语辅导。你们有课程吗？' },
      { speaker: 'B', text: 'Yes, we have small group classes and private tutoring.', cn: '有的，我们有小班课和一对一辅导。' },
      { speaker: 'A', text: 'What is the difference in price?', cn: '价格有什么区别？' },
      { speaker: 'B', text: 'Group class is 80 yuan per hour, private is 150 yuan.', cn: '小班课80元一小时，一对一150元。' },
      { speaker: 'A', text: 'I think group class is better for her. When can she start?', cn: '我觉得小班课更适合她。她什么时候能开始？' },
    ]
  },

  // === Level 5: 复杂讨论、情感表达、抽象话题 (161-200) ===
  {
    title: '讨论科技',
    icon: '💻',
    color: 'bg-slate-100 dark:bg-slate-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'Technology has changed our lives a lot, don\'t you think?', cn: '科技极大地改变了我们的生活，你不觉得吗？' },
      { speaker: 'B', text: 'Yes, especially smartphones. We can do everything with them now.', cn: '是的，尤其是智能手机。现在我们什么都能用手机做。' },
      { speaker: 'A', text: 'But some people think technology makes us less social.', cn: '但有些人认为科技让我们变得不那么爱社交。' },
      { speaker: 'B', text: 'I see what you mean. We should balance technology and real life.', cn: '我明白你的意思。我们应该平衡科技和现实生活。' },
      { speaker: 'A', text: 'Exactly! Technology is a tool, we should control it, not let it control us.', cn: '没错！科技是工具，我们应该控制它，而不是让它控制我们。' },
      { speaker: 'B', text: 'Well said. Moderation is the key.', cn: '说得好。适度是关键。' },
    ]
  },
  {
    title: '讨论人工智能',
    icon: '🤖',
    color: 'bg-violet-100 dark:bg-violet-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'What do you think about artificial intelligence?', cn: '你对人工智能怎么看？' },
      { speaker: 'B', text: 'It is amazing! AI can help us with many complex tasks.', cn: '太神奇了！人工智能可以帮助我们完成许多复杂任务。' },
      { speaker: 'A', text: 'But are you worried about AI taking people\'s jobs?', cn: '但你担心人工智能抢走人们的工作吗？' },
      { speaker: 'B', text: 'I used to worry, but now I think AI will create new jobs too.', cn: '我以前担心，但现在觉得人工智能也会创造新的工作。' },
      { speaker: 'A', text: 'That is a positive perspective. We need to learn to work with AI.', cn: '那是一个积极的观点。我们需要学会与人工智能合作。' },
      { speaker: 'B', text: 'Yes, the future is about humans and AI working together.', cn: '是的，未来是人类和人工智能一起工作。' },
    ]
  },
  {
    title: '讨论环境保护',
    icon: '🌍',
    color: 'bg-green-100 dark:bg-green-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'Climate change is becoming a serious problem. What can we do?', cn: '气候变化正成为一个严重的问题。我们能做什么？' },
      { speaker: 'B', text: 'We should reduce carbon emissions and use renewable energy.', cn: '我们应该减少碳排放，使用可再生能源。' },
      { speaker: 'A', text: 'Individual actions matter too. Like recycling and saving energy.', cn: '个人行动也很重要。比如回收利用和节约能源。' },
      { speaker: 'B', text: 'True. Small changes can make a big difference when everyone does them.', cn: '没错。当每个人都这样做时，小小的改变也能带来巨大的影响。' },
      { speaker: 'A', text: 'We should also educate children about environmental protection.', cn: '我们还应该教育孩子们保护环境。' },
      { speaker: 'B', text: 'Absolutely. The next generation will face these challenges.', cn: '绝对应该。下一代将面临这些挑战。' },
    ]
  },
  {
    title: '讨论健康生活',
    icon: '🥗',
    color: 'bg-emerald-100 dark:bg-emerald-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'What do you think makes a healthy lifestyle?', cn: '你认为什么构成了健康的生活方式？' },
      { speaker: 'B', text: 'Balanced diet, regular exercise, and enough sleep are essential.', cn: '均衡饮食、规律运动和充足睡眠是必不可少的。' },
      { speaker: 'A', text: 'I agree. Mental health is also important, don\'t you think?', cn: '我同意。心理健康也很重要，你不觉得吗？' },
      { speaker: 'B', text: 'Yes! We should manage stress and stay positive.', cn: '是的！我们应该管理压力，保持积极。' },
      { speaker: 'A', text: 'Spending time with family and friends helps too.', cn: '与家人朋友共度时光也有帮助。' },
      { speaker: 'B', text: 'Right. Health is about body, mind, and social connections.', cn: '对。健康涉及身体、心理和社会联系。' },
    ]
  },
  {
    title: '讨论未来',
    icon: '🔮',
    color: 'bg-purple-100 dark:bg-purple-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'What do you think the world will be like in 20 years?', cn: '你认为20年后世界会是什么样子？' },
      { speaker: 'B', text: 'I think technology will be even more advanced.', cn: '我认为科技会更加先进。' },
      { speaker: 'A', text: 'Maybe we will have flying cars and live on Mars!', cn: '也许我们会有会飞的汽车，住在火星上！' },
      { speaker: 'B', text: 'That would be exciting! But we also need to solve problems like pollution.', cn: '那太令人兴奋了！但我们也需要解决污染等问题。' },
      { speaker: 'A', text: 'True. I hope the future will be better for everyone.', cn: '没错。我希望未来对每个人都更好。' },
      { speaker: 'B', text: 'Me too. It depends on what we do today.', cn: '我也是。这取决于我们今天做什么。' },
    ]
  },
  {
    title: '讨论梦想与目标',
    icon: '⭐',
    color: 'bg-yellow-100 dark:bg-yellow-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'What is your biggest dream in life?', cn: '你人生中最大的梦想是什么？' },
      { speaker: 'B', text: 'I want to start my own business and help people.', cn: '我想创办自己的公司，帮助别人。' },
      { speaker: 'A', text: 'That is a noble goal. What steps are you taking?', cn: '那是一个崇高的目标。你正在采取什么步骤？' },
      { speaker: 'B', text: 'I am saving money and learning business skills.', cn: '我在存钱，学习商业技能。' },
      { speaker: 'A', text: 'Persistence is key. Don\'t give up when things get hard.', cn: '坚持是关键。遇到困难时不要放弃。' },
      { speaker: 'B', text: 'Thank you for your encouragement. I will keep trying!', cn: '谢谢你的鼓励。我会继续努力！' },
    ]
  },
  {
    title: '讨论成功',
    icon: '🏆',
    color: 'bg-amber-100 dark:bg-amber-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'What does success mean to you?', cn: '成功对你意味着什么？' },
      { speaker: 'B', text: 'For me, success is doing what I love and making a difference.', cn: '对我来说，成功就是做我喜欢的事，并产生影响。' },
      { speaker: 'A', text: 'That is a beautiful definition. Money and fame are not everything.', cn: '那是一个美丽的定义。金钱和名誉不是一切。' },
      { speaker: 'B', text: 'Exactly. Happiness and satisfaction are more important.', cn: '没错。快乐和满足更重要。' },
      { speaker: 'A', text: 'I think success is also about growing and learning.', cn: '我认为成功也关于成长和学习。' },
      { speaker: 'B', text: 'Yes, we should never stop improving ourselves.', cn: '是的，我们不应该停止自我提升。' },
    ]
  },
  {
    title: '讨论失败',
    icon: '💪',
    color: 'bg-red-100 dark:bg-red-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'I failed my exam. I feel so discouraged.', cn: '我考试失败了。我很沮丧。' },
      { speaker: 'B', text: 'Don\'t worry. Failure is part of learning.', cn: '别担心。失败是学习的一部分。' },
      { speaker: 'A', text: 'But I studied so hard. Why did this happen?', cn: '但我学习那么努力。为什么会这样？' },
      { speaker: 'B', text: 'Maybe you need to change your study method. Let\'s find out what went wrong.', cn: '也许你需要改变学习方法。让我们找出哪里出了问题。' },
      { speaker: 'A', text: 'You are right. I should learn from this failure.', cn: '你说得对。我应该从这次失败中学习。' },
      { speaker: 'B', text: 'That is the right attitude. Try again, you will succeed!', cn: '这才是正确的态度。再试一次，你会成功的！' },
    ]
  },
  {
    title: '讨论友谊',
    icon: '👥',
    color: 'bg-pink-100 dark:bg-pink-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'What makes a true friendship last long?', cn: '什么样的友谊才能长久？' },
      { speaker: 'B', text: 'Trust, honesty, and mutual respect are the foundation.', cn: '信任、诚实和相互尊重是基础。' },
      { speaker: 'A', text: 'I agree. Friends should support each other through difficult times.', cn: '我同意。朋友应该在困难时期相互支持。' },
      { speaker: 'B', text: 'Yes, and they should celebrate happy moments together too.', cn: '是的，他们也应该一起庆祝快乐时刻。' },
      { speaker: 'A', text: 'Distance doesn\'t matter if the connection is strong.', cn: '如果连接牢固，距离就不重要。' },
      { speaker: 'B', text: 'True. Good friendships can overcome any challenge.', cn: '没错。好的友谊可以克服任何挑战。' },
    ]
  },
  {
    title: '讨论爱情',
    icon: '❤️',
    color: 'bg-rose-100 dark:bg-rose-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'What is the most important thing in a relationship?', cn: '关系中最重要的东西是什么？' },
      { speaker: 'B', text: 'Communication and understanding each other.', cn: '沟通和理解对方。' },
      { speaker: 'A', text: 'I think trust is also essential. Without trust, love cannot grow.', cn: '我认为信任也很重要。没有信任，爱无法成长。' },
      { speaker: 'B', text: 'Yes. Both people should care about each other\'s happiness.', cn: '是的。双方都应该关心对方的幸福。' },
      { speaker: 'A', text: 'Love is about giving, not just receiving.', cn: '爱是关于付出，不仅仅是接受。' },
      { speaker: 'B', text: 'Exactly. That is what makes love beautiful.', cn: '没错。这就是爱美丽的地方。' },
    ]
  },
  {
    title: '讨论家庭',
    icon: '👨‍👩‍👧‍👦',
    color: 'bg-orange-100 dark:bg-orange-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'Family is very important, isn\'t it?', cn: '家庭非常重要，不是吗？' },
      { speaker: 'B', text: 'Yes, family is where we find love and support.', cn: '是的，家庭是我们找到爱和支持的地方。' },
      { speaker: 'A', text: 'We should spend more time with our parents and siblings.', cn: '我们应该多花时间和父母兄弟姐妹在一起。' },
      { speaker: 'B', text: 'I agree. Family bonds need time and attention to stay strong.', cn: '我同意。家庭纽带需要时间和关注才能保持牢固。' },
      { speaker: 'A', text: 'They are always there for us when we need them.', cn: '当我们需要他们时，他们总是在那里。' },
      { speaker: 'B', text: 'That is why family is our most valuable treasure.', cn: '这就是为什么家庭是我们最宝贵的财富。' },
    ]
  },
  {
    title: '讨论教育',
    icon: '🎓',
    color: 'bg-blue-100 dark:bg-blue-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'What do you think is the purpose of education?', cn: '你认为教育的目的是什么？' },
      { speaker: 'B', text: 'Education helps us understand the world and develop critical thinking.', cn: '教育帮助我们理解世界，培养批判性思维。' },
      { speaker: 'A', text: 'It also teaches us values and how to be good people.', cn: '它也教导我们价值观，如何成为好人。' },
      { speaker: 'B', text: 'Right. Learning is not just about grades, but about growing as a person.', cn: '对。学习不仅仅是为了成绩，而是为了个人成长。' },
      { speaker: 'A', text: 'I think education should inspire curiosity and creativity.', cn: '我认为教育应该激发好奇心和创造力。' },
      { speaker: 'B', text: 'Yes, that is the key to a meaningful education.', cn: '是的，那是有意义教育的关键。' },
    ]
  },
  {
    title: '讨论文化差异',
    icon: '🌏',
    color: 'bg-teal-100 dark:bg-teal-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'Different cultures have different customs. Isn\'t it fascinating?', cn: '不同的文化有不同的习俗。这不是很有趣吗？' },
      { speaker: 'B', text: 'Yes! Understanding other cultures helps us become more open-minded.', cn: '是的！理解其他文化有助于我们变得更加开放。' },
      { speaker: 'A', text: 'We should respect differences and learn from each other.', cn: '我们应该尊重差异，相互学习。' },
      { speaker: 'B', text: 'Cultural exchange makes the world more colorful.', cn: '文化交流让世界更加丰富多彩。' },
      { speaker: 'A', text: 'Language is also an important part of culture.', cn: '语言也是文化的重要部分。' },
      { speaker: 'B', text: 'True. Learning a language opens the door to a new culture.', cn: '没错。学习一门语言打开了一扇通往新文化的大门。' },
    ]
  },
  {
    title: '讨论传统',
    icon: '🏮',
    color: 'bg-red-100 dark:bg-red-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'Do you think we should keep traditional customs alive?', cn: '你认为我们应该保持传统习俗吗？' },
      { speaker: 'B', text: 'Yes, traditions connect us to our history and identity.', cn: '是的，传统将我们与历史和身份联系起来。' },
      { speaker: 'A', text: 'But some traditions seem outdated in modern society.', cn: '但有些传统在现代社会似乎过时了。' },
      { speaker: 'B', text: 'We should keep the meaningful ones and adapt others to modern life.', cn: '我们应该保留有意义的，将其他的适应现代生活。' },
      { speaker: 'A', text: 'That makes sense. Tradition and modernization can coexist.', cn: '有道理。传统和现代化可以共存。' },
      { speaker: 'B', text: 'Exactly. We need to find the right balance.', cn: '没错。我们需要找到适当的平衡。' },
    ]
  },
  {
    title: '讨论旅游',
    icon: '✈️',
    color: 'bg-sky-100 dark:bg-sky-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'Traveling is the best way to learn about the world, don\'t you think?', cn: '旅行是了解世界的最好方式，你不觉得吗？' },
      { speaker: 'B', text: 'Absolutely! You see new places, meet new people, and experience different cultures.', cn: '绝对是的！你看到新地方，认识新朋友，体验不同文化。' },
      { speaker: 'A', text: 'It also broadens your mind and changes your perspective.', cn: '它还能开阔你的思维，改变你的视角。' },
      { speaker: 'B', text: 'I want to travel to every continent someday.', cn: '我希望有一天能去每个大洲旅行。' },
      { speaker: 'A', text: 'That is a wonderful goal. The world has so much to offer.', cn: '那是一个很棒的目标。世界有太多值得探索的地方。' },
      { speaker: 'B', text: 'Yes, and every journey teaches us something new.', cn: '是的，每一次旅行都教给我们新的东西。' },
    ]
  },
  {
    title: '讨论阅读',
    icon: '📖',
    color: 'bg-amber-100 dark:bg-amber-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'What kind of books do you enjoy reading?', cn: '你喜欢读什么类型的书？' },
      { speaker: 'B', text: 'I love reading biographies. Real life stories inspire me.', cn: '我喜欢读传记。真实的生活故事激励我。' },
      { speaker: 'A', text: 'I prefer novels. They take me to different worlds.', cn: '我更喜欢小说。它们带我到不同的世界。' },
      { speaker: 'B', text: 'Reading exercises our imagination and improves language skills.', cn: '阅读锻炼我们的想象力，提高语言技能。' },
      { speaker: 'A', text: 'I think everyone should develop a reading habit.', cn: '我认为每个人都应该养成阅读习惯。' },
      { speaker: 'B', text: 'Agreed. Books are like teachers we can carry anywhere.', cn: '同意。书就像我们可以随身携带的老师。' },
    ]
  },
  {
    title: '讨论电影',
    icon: '🎬',
    color: 'bg-indigo-100 dark:bg-indigo-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'What is your favorite movie genre and why?', cn: '你最喜欢的电影类型是什么，为什么？' },
      { speaker: 'B', text: 'I love science fiction. It makes me think about the future.', cn: '我喜欢科幻片。它让我思考未来。' },
      { speaker: 'A', text: 'I prefer historical dramas. They teach us about the past.', cn: '我更喜欢历史剧。它们教会我们关于过去的知识。' },
      { speaker: 'B', text: 'Movies can be both entertaining and educational.', cn: '电影可以既有趣又有教育意义。' },
      { speaker: 'A', text: 'Some movies even change how we see the world.', cn: '有些电影甚至改变我们看待世界的方式。' },
      { speaker: 'B', text: 'Yes, good films have the power to inspire and move us.', cn: '是的，好的电影有激励和感动我们的力量。' },
    ]
  },
  {
    title: '讨论音乐',
    icon: '🎵',
    color: 'bg-pink-100 dark:bg-pink-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'How does music affect your mood?', cn: '音乐如何影响你的心情？' },
      { speaker: 'B', text: 'Happy music makes me energetic, sad music helps me think.', cn: '快乐的音乐让我充满活力，悲伤的音乐帮助我思考。' },
      { speaker: 'A', text: 'Music is a universal language that everyone can understand.', cn: '音乐是每个人都能理解的通用语言。' },
      { speaker: 'B', text: 'Yes, it connects people beyond words and cultures.', cn: '是的，它在语言和文化之外连接着人们。' },
      { speaker: 'A', text: 'I can\'t imagine life without music.', cn: '我无法想象没有音乐的生活。' },
      { speaker: 'B', text: 'Neither can I. Music adds color to our lives.', cn: '我也不能。音乐给我们的生活增添了色彩。' },
    ]
  },
  {
    title: '讨论艺术',
    icon: '🎨',
    color: 'bg-purple-100 dark:bg-purple-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'What is the role of art in our society?', cn: '艺术在我们社会中的作用是什么？' },
      { speaker: 'B', text: 'Art expresses human emotions and ideas in beautiful ways.', cn: '艺术以美丽的方式表达人类的情感和思想。' },
      { speaker: 'A', text: 'It also reflects our history and culture.', cn: '它也反映了我们的历史和文化。' },
      { speaker: 'B', text: 'Art inspires creativity and helps us see things differently.', cn: '艺术激发创造力，帮助我们以不同的方式看待事物。' },
      { speaker: 'A', text: 'I think art makes life more meaningful.', cn: '我认为艺术让生活更有意义。' },
      { speaker: 'B', text: 'Yes, it feeds our soul and enriches our spirit.', cn: '是的，它滋养我们的灵魂，丰富我们的精神。' },
    ]
  },
  {
    title: '讨论幸福',
    icon: '😊',
    color: 'bg-yellow-100 dark:bg-yellow-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'What does happiness mean to you?', cn: '幸福对你意味着什么？' },
      { speaker: 'B', text: 'Happiness is finding joy in simple things and being grateful.', cn: '幸福是在简单的事物中找到快乐，并心存感激。' },
      { speaker: 'A', text: 'I think happiness is also about helping others.', cn: '我认为幸福也是关于帮助他人。' },
      { speaker: 'B', text: 'Yes, making others happy makes us happy too.', cn: '是的，让别人快乐也让我们快乐。' },
      { speaker: 'A', text: 'True happiness comes from within, not from external things.', cn: '真正的幸福来自内心，而不是外在事物。' },
      { speaker: 'B', text: 'Well said. Peace and love are the keys to happiness.', cn: '说得好。平静和爱是幸福的关键。' },
    ]
  },
  {
    title: '讨论时间',
    icon: '⏳',
    color: 'bg-slate-100 dark:bg-slate-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'Time is our most precious resource, isn\'t it?', cn: '时间是我们最宝贵的资源，不是吗？' },
      { speaker: 'B', text: 'Yes, we can never get time back once it is gone.', cn: '是的，时间一旦流逝就再也回不来了。' },
      { speaker: 'A', text: 'That is why we should use our time wisely.', cn: '这就是为什么我们应该明智地使用时间。' },
      { speaker: 'B', text: 'But we should also take time to rest and enjoy life.', cn: '但我们也应该花时间休息和享受生活。' },
      { speaker: 'A', text: 'Balance is important. Work hard, play hard.', cn: '平衡很重要。努力工作，尽情玩乐。' },
      { speaker: 'B', text: 'Exactly. Make every moment count.', cn: '没错。让每一刻都有意义。' },
    ]
  },
  {
    title: '讨论变化',
    icon: '🔄',
    color: 'bg-cyan-100 dark:bg-cyan-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'Change is the only constant in life.', cn: '变化是生活中唯一不变的东西。' },
      { speaker: 'B', text: 'Yes, we should learn to adapt to changes.', cn: '是的，我们应该学会适应变化。' },
      { speaker: 'A', text: 'Changes can be scary, but they also bring opportunities.', cn: '变化可能令人害怕，但也带来机会。' },
      { speaker: 'B', text: 'I think personal growth happens when we face changes.', cn: '我认为当我们面对变化时，个人成长才会发生。' },
      { speaker: 'A', text: 'We should embrace change instead of resisting it.', cn: '我们应该拥抱变化，而不是抗拒它。' },
      { speaker: 'B', text: 'Right. Change helps us become stronger and wiser.', cn: '对。变化帮助我们变得更强大、更智慧。' },
    ]
  },
  {
    title: '讨论选择',
    icon: '🎯',
    color: 'bg-orange-100 dark:bg-orange-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'How do you make important decisions?', cn: '你如何做重要决定？' },
      { speaker: 'B', text: 'I list the pros and cons and think about the long-term effects.', cn: '我列出优缺点，考虑长期影响。' },
      { speaker: 'A', text: 'I also listen to my intuition. Sometimes it knows best.', cn: '我也听从我的直觉。有时它知道得最多。' },
      { speaker: 'B', text: 'It is important to gather information before deciding.', cn: '做决定前收集信息很重要。' },
      { speaker: 'A', text: 'But we also need to be brave enough to make choices.', cn: '但我们还需要足够勇敢地做出选择。' },
      { speaker: 'B', text: 'Yes, and be ready to take responsibility for our decisions.', cn: '是的，并为我们的决定做好准备承担责任。' },
    ]
  },
  {
    title: '讨论自由',
    icon: '🕊️',
    color: 'bg-blue-100 dark:bg-blue-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'What does freedom mean to you?', cn: '自由对你意味着什么？' },
      { speaker: 'B', text: 'Freedom means being able to make my own choices.', cn: '自由意味着能够做出自己的选择。' },
      { speaker: 'A', text: 'I think freedom comes with responsibility.', cn: '我认为自由伴随着责任。' },
      { speaker: 'B', text: 'Yes, we should respect others\' freedom while enjoying our own.', cn: '是的，我们在享受自己自由的同时，也应该尊重他人的自由。' },
      { speaker: 'A', text: 'True freedom is not doing whatever we want.', cn: '真正的自由不是做任何我们想做的事。' },
      { speaker: 'B', text: 'Right. It is choosing what is right and good.', cn: '对。它是选择正确和美好的事物。' },
    ]
  },
  {
    title: '讨论责任',
    icon: '⚖️',
    color: 'bg-emerald-100 dark:bg-emerald-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'Responsibility is what makes us mature adults.', cn: '责任让我们成为成熟的成年人。' },
      { speaker: 'B', text: 'I agree. We must take responsibility for our actions.', cn: '我同意。我们必须为我们的行为承担责任。' },
      { speaker: 'A', text: 'It starts with small things, like finishing our work on time.', cn: '它从小事开始，比如按时完成工作。' },
      { speaker: 'B', text: 'Yes, and being responsible to our family and society.', cn: '是的，还有对我们的家庭和社会负责。' },
      { speaker: 'A', text: 'Responsibility builds trust and respect.', cn: '责任建立信任和尊重。' },
      { speaker: 'B', text: 'It is the foundation of a successful and meaningful life.', cn: '它是成功和有意义生活的基础。' },
    ]
  },
  {
    title: '讨论勇气',
    icon: '🦁',
    color: 'bg-amber-100 dark:bg-amber-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'What does it mean to be brave?', cn: '勇敢意味着什么？' },
      { speaker: 'B', text: 'Being brave means facing your fears, not having no fears.', cn: '勇敢意味着面对你的恐惧，而不是没有恐惧。' },
      { speaker: 'A', text: 'I think courage is also about standing up for what is right.', cn: '我认为勇气也关于坚持正义。' },
      { speaker: 'B', text: 'Yes, even when others disagree with you.', cn: '是的，即使别人不同意你。' },
      { speaker: 'A', text: 'Courage helps us overcome difficulties and achieve our goals.', cn: '勇气帮助我们克服困难，实现目标。' },
      { speaker: 'B', text: 'Everyone has courage inside them. We just need to find it.', cn: '每个人内心都有勇气。我们只需要找到它。' },
    ]
  },
  {
    title: '讨论和平',
    icon: '☮️',
    color: 'bg-green-100 dark:bg-green-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'Why is world peace so important?', cn: '为什么世界和平如此重要？' },
      { speaker: 'B', text: 'Peace allows people to live safely and build better lives.', cn: '和平让人们能够安全生活，建设更美好的生活。' },
      { speaker: 'A', text: 'Without peace, there is war, suffering, and destruction.', cn: '没有和平，就会有战争、痛苦和破坏。' },
      { speaker: 'B', text: 'We should all work together to promote peace and understanding.', cn: '我们应该共同努力促进和平和理解。' },
      { speaker: 'A', text: 'It starts with being kind and respectful to each other.', cn: '它从对彼此善良和尊重开始。' },
      { speaker: 'B', text: 'Yes, peace begins with each of us, in our daily actions.', cn: '是的，和平始于我们每个人，在我们的日常行动中。' },
    ]
  },
  {
    title: '讨论创新',
    icon: '💡',
    color: 'bg-yellow-100 dark:bg-yellow-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'Innovation drives progress in every field.', cn: '创新推动每个领域的进步。' },
      { speaker: 'B', text: 'Yes, new ideas and technologies change how we live.', cn: '是的，新思想和新技术改变了我们的生活方式。' },
      { speaker: 'A', text: 'But innovation requires creativity and the courage to try new things.', cn: '但创新需要创造力和尝试新事物的勇气。' },
      { speaker: 'B', text: 'We should not be afraid of failure when innovating.', cn: '创新时我们不应该害怕失败。' },
      { speaker: 'A', text: 'Most great inventions came from many failed attempts.', cn: '大多数伟大的发明都来自许多失败的尝试。' },
      { speaker: 'B', text: 'True. Persistence and curiosity are the keys to innovation.', cn: '没错。坚持和好奇心是创新的关键。' },
    ]
  },
  {
    title: '讨论团队合作',
    icon: '🤝',
    color: 'bg-purple-100 dark:bg-purple-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'Why is teamwork important?', cn: '为什么团队合作很重要？' },
      { speaker: 'B', text: 'Together we can achieve more than alone.', cn: '一起做我们可以比独自做实现更多。' },
      { speaker: 'A', text: 'Everyone has different strengths. Together we complement each other.', cn: '每个人都有不同的优势。在一起我们互补。' },
      { speaker: 'B', text: 'But teamwork also requires good communication and trust.', cn: '但团队合作也需要良好的沟通和信任。' },
      { speaker: 'A', text: 'We should listen to others and respect their opinions.', cn: '我们应该倾听他人，尊重他们的意见。' },
      { speaker: 'B', text: 'Yes, a united team can overcome any challenge.', cn: '是的，团结的团队可以克服任何挑战。' },
    ]
  },
  {
    title: '讨论领导力',
    icon: '👑',
    color: 'bg-indigo-100 dark:bg-indigo-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'What makes a good leader?', cn: '是什么成就了好领导？' },
      { speaker: 'B', text: 'A good leader inspires others and leads by example.', cn: '好的领导激励他人，以身作则。' },
      { speaker: 'A', text: 'They should also be good listeners and decision makers.', cn: '他们还应该是好的倾听者和决策者。' },
      { speaker: 'B', text: 'Yes, leadership is about serving others, not just giving orders.', cn: '是的，领导力是关于服务他人，而不仅仅是发号施令。' },
      { speaker: 'A', text: 'A true leader takes responsibility when things go wrong.', cn: '真正的领导在事情出错时承担责任。' },
      { speaker: 'B', text: 'And shares credit with the team when things go right.', cn: '当事情做对时，与团队分享功劳。' },
    ]
  },
  {
    title: '讨论诚信',
    icon: '💎',
    color: 'bg-cyan-100 dark:bg-cyan-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'Honesty is the foundation of trust.', cn: '诚实是信任的基础。' },
      { speaker: 'B', text: 'Yes, being honest builds strong relationships.', cn: '是的，诚实建立牢固的关系。' },
      { speaker: 'A', text: 'Even when it is difficult, we should tell the truth.', cn: '即使很难，我们也应该说实话。' },
      { speaker: 'B', text: 'A lie might solve a problem temporarily, but creates more later.', cn: '谎言可能暂时解决问题，但以后会制造更多问题。' },
      { speaker: 'A', text: 'Integrity means doing the right thing even when no one is watching.', cn: '诚信意味着即使没人在看也要做正确的事。' },
      { speaker: 'B', text: 'Yes, that is true character. It is worth more than gold.', cn: '是的，那是真正的品格。它比黄金更珍贵。' },
    ]
  },
  {
    title: '讨论人生',
    icon: '🌟',
    color: 'bg-rose-100 dark:bg-rose-900',
    level: 5,
    scenario: [
      { speaker: 'A', text: 'What do you think is the meaning of life?', cn: '你认为人生的意义是什么？' },
      { speaker: 'B', text: 'I think life is about finding our purpose and making a difference.', cn: '我认为人生是关于找到我们的目标并产生影响。' },
      { speaker: 'A', text: 'It is also about experiencing joy, love, and learning.', cn: '它也关于体验快乐、爱和学习。' },
      { speaker: 'B', text: 'The journey is as important as the destination.', cn: '旅程和目的地一样重要。' },
      { speaker: 'A', text: 'We should cherish every moment and the people around us.', cn: '我们应该珍惜每一刻和我们身边的人。' },
      { speaker: 'B', text: 'Yes, life is a gift. Let\'s make it beautiful and meaningful.', cn: '是的，生命是礼物。让我们让它变得美丽和有意义。' },
    ]
  },
];

// 按难度级别分组对话
export const dialoguesByLevel = {
  1: dialogues.filter(d => d.level === 1),
  2: dialogues.filter(d => d.level === 2),
  3: dialogues.filter(d => d.level === 3),
  4: dialogues.filter(d => d.level === 4),
  5: dialogues.filter(d => d.level === 5),
};

// 获取难度级别的描述
export const getLevelDescription = (level: number): string => {
  const descriptions = {
    1: 'Level 1 - 基础入门',
    2: 'Level 2 - 日常交流',
    3: 'Level 3 - 场景对话',
    4: 'Level 4 - 社会场景',
    5: 'Level 5 - 高级讨论',
  };
  return descriptions[level as keyof typeof descriptions] || '';
};
