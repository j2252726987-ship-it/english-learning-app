import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/navigation';

export const metadata: Metadata = {
  title: {
    default: 'English Kids | 快乐英语启蒙',
    template: '%s | English Kids',
  },
  description: '儿童英语启蒙教育平台，从字母到对话，系统化学习英语',
  keywords: [
    '英语启蒙',
    '儿童英语',
    '字母学习',
    '音标学习',
    '单词学习',
    '英语对话',
  ],
  authors: [{ name: 'English Kids Team' }],
  openGraph: {
    title: 'English Kids | 快乐英语启蒙',
    description: '儿童英语启蒙教育平台，从字母到对话，系统化学习英语',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
