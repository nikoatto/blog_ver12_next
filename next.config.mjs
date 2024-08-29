/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    target: 'serverless',
    // basePath: '/test',　// アップロード時に有効にする
    // assetPrefix: '/test', // アップロード時に有効にする
    // trailingSlash: true, // アップロード時に有効にする
    images: {
        unoptimized: true,  // 画像最適化を無効化
    },
    // その他の設定があればここに追加
};

export default nextConfig;  // next.config.mjs の場合