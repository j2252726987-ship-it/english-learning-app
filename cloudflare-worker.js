// Cloudflare Worker - 反向代理配置
// 用于让微信可以正常访问 Vercel 网站

export default {
  async fetch(request, env) {
    // 你在 Vercel 部署的网站地址
    // 替换为你的实际 Vercel 域名
    const targetUrl = 'https://english-learning-app.vercel.app';

    const url = new URL(request.url);
    const newUrl = new URL(targetUrl + url.pathname + url.search);

    // 创建新的请求
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

    // 获取响应
    let response = await fetch(newRequest);

    // 处理重定向
    if (response.status === 301 || response.status === 302 || response.status === 307 || response.status === 308) {
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
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': '*',
          },
        });
      }
    }

    // 添加 CORS 头
    response = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: {
        ...Object.fromEntries(response.headers),
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'X-Proxy-By': 'Cloudflare-Worker',
      },
    });

    return response;
  },
};
