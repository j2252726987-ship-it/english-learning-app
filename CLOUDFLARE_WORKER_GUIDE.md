# Cloudflare Workers 反向代理部署指南

## 解决方案
使用 Cloudflare Workers 创建一个反向代理，让微信可以正常访问你的 Vercel 网站。

**优势：**
- ✅ 完全免费
- ✅ 无需备案
- ✅ 配置简单（只需 3 分钟）
- ✅ 支持微信访问
- ✅ 自动 HTTPS

---

## 部署步骤

### 第1步：登录 Cloudflare
1. 访问：https://dash.cloudflare.com
2. 登录你的 Cloudflare 账号

### 第2步：创建 Worker
1. 在左侧菜单找到 **"Workers & Pages"**
2. 点击进入
3. 点击 **"Create Application"**
4. 选择 **"Create Worker"** 按钮
5. 输入 Worker 名称：`english-learning-proxy`
6. 点击 **"Deploy"**

### 第3步：编辑 Worker 代码
1. Worker 创建后会进入编辑页面
2. 点击 **"Edit code"** 按钮
3. 删除默认的所有代码
4. 复制以下代码并粘贴：

```javascript
// Cloudflare Worker - 反向代理配置
export default {
  async fetch(request, env) {
    // 你在 Vercel 部署的网站地址
    const targetUrl = 'https://english-learning-app.vercel.app';

    const url = new URL(request.url);
    const newUrl = new URL(targetUrl + url.pathname + url.search);

    const newRequest = new Request(newUrl, {
      method: request.method,
      headers: {
        ...Object.fromEntries(request.headers),
        'Host': newUrl.hostname,
        'X-Forwarded-Host': url.hostname,
        'X-Forwarded-For': request.headers.get('CF-Connecting-IP') || '',
        'User-Agent': request.headers.get('User-Agent') || 'Mozilla/5.0',
      },
      body: request.body,
      redirect: 'manual',
    });

    let response = await fetch(newRequest);

    if (response.status === 301 || response.status === 302) {
      const location = response.headers.get('Location');
      if (location) {
        const newLocation = location.replace(targetUrl, url.origin);
        response = new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: {
            ...Object.fromEntries(response.headers),
            'Location': newLocation,
            'Access-Control-Allow-Origin': '*',
          },
        });
      }
    }

    response = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: {
        ...Object.fromEntries(response.headers),
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': '*',
      },
    });

    return response;
  },
};
```

5. **重要**：将代码中的 `https://english-learning-app.vercel.app` 替换为你的实际 Vercel 域名
6. 点击 **"Deploy"** 按钮
7. 等待部署完成（约 10-30 秒）

### 第4步：获取 Worker 域名
部署成功后，你会看到：
- Worker 域名：`https://english-learning-proxy.你的账号.workers.dev`
- 点击这个域名访问，应该能看到你的网站

### 第5步：在微信中测试
在微信中直接访问 Worker 域名，例如：
```
https://english-learning-proxy.你的账号.workers.dev
```

所有功能都应该可以正常使用！

---

## 访问路径

通过 Worker 代理访问的完整路径：

- 首页：`https://english-learning-proxy.xxx.workers.dev/`
- 字母学习：`https://english-learning-proxy.xxx.workers.dev/letters`
- 音标学习：`https://english-learning-proxy.xxx.workers.dev/phonetics`
- 单词学习：`https://english-learning-proxy.xxx.workers.dev/words`
- 对话练习：`https://english-learning-proxy.xxx.workers.dev/dialogues`
- 美文阅读：`https://english-learning-proxy.xxx.workers.dev/poems`
- 闯关游戏：`https://english-learning-proxy.xxx.workers.dev/games`

---

## 如何获取你的 Worker 域名

1. 进入 Cloudflare Workers & Pages
2. 点击你的 Worker 项目
3. 在项目详情页面，你会看到 **Workers.dev subdomain**
4. 这就是你的域名，格式为：`https://english-learning-proxy.你的账号.workers.dev`

---

## 常见问题

### Q: Worker 部署失败？
A: 检查代码是否完整复制，没有遗漏任何部分

### Q: 访问 Worker 域名报错？
A: 检查代码中的 `targetUrl` 是否正确替换为你的 Vercel 域名

### Q: 微信仍然打不开？
A:
1. 检查 Worker 域名是否正确
2. 尝试在浏览器中访问，确认 Worker 正常工作
3. 清除微信缓存后重试

### Q: 如何修改 Vercel 域名？
A: 只需修改 Worker 代码中的 `targetUrl`，然后重新部署即可

---

## 后续更新

你的网站仍然部署在 Vercel，更新步骤不变：

```bash
git add .
git commit -m "更新内容"
git push origin main
```

Vercel 会自动更新，Worker 会自动代理到最新版本，无需任何额外操作！

---

## 费用说明

- ✅ Cloudflare Workers：完全免费
- ✅ 每月 100,000 次免费请求
- ✅ 对于个人网站完全够用
- ✅ 永久免费，无需信用卡

---

## 完成！

现在你拥有：
- ✅ 部署在 Vercel 的网站（已经完成）
- ✅ Cloudflare Workers 反向代理（新增）
- ✅ 微信可以正常访问
- ✅ 完全免费
- ✅ 自动更新

在微信中分享你的 Worker 域名，所有人都可以正常访问！
