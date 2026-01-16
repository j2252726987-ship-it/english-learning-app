# Cloudflare Pages 部署指南

## 快速部署（5分钟）

### 1. 注册 Cloudflare 账号
访问：https://dash.cloudflare.com/sign-up

### 2. 进入 Cloudflare Pages
- 登录后，进入 Cloudflare Dashboard
- 左侧菜单找到 "Workers & Pages"
- 点击 "Create Application"
- 选择 "Pages" 标签
- 点击 "Connect to Git"

### 3. 连接 GitHub
- 点击 "Connect to Git"
- 授权 Cloudflare 访问你的 GitHub
- 选择 `english-learning-app` 仓库
- 点击 "Begin setup"

### 4. 填写配置信息
**重要：必须完全按照以下配置**

| 配置项 | 值 |
|--------|-----|
| Project name | `english-learning` |
| Framework preset | `Next.js` |
| Production branch | `main` |
| Build command | `pnpm install && pnpm run build` |
| Build output directory | `.next` |

**Environment variables**: 无需添加

**Advanced configuration**:
- Node.js version: `20`

### 5. 部署
- 点击 "Save and Deploy"
- 等待 2-5 分钟

### 6. 访问网站
部署成功后，访问：`https://english-learning.pages.dev`

---

## 常见问题

### Q: 找不到 GitHub 仓库？
A: 刷新页面，确认 Cloudflare 已获得 GitHub 访问权限

### Q: 构建失败？
A: 检查 Build Command 是否为：`pnpm install && pnpm run build`

### Q: 域名已被占用？
A: 修改 Project name，如 `english-learning-2`

---

## 自动更新
以后只需：
```bash
git add .
git commit -m "更新内容"
git push origin main
```

Cloudflare Pages 会自动重新部署！

---

## 验证部署
在微信中访问：
- `https://english-learning.pages.dev` - 首页
- `https://english-learning.pages.dev/letters` - 字母学习
- `https://english-learning.pages.dev/dialogues` - 对话练习

所有功能都应该正常工作！
