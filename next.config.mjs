/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/test',
    assetPrefix: '/test',
    trailingSlash: true,
    images: {
        unoptimized: true,  // 画像最適化を無効化
    },
    // その他の設定があればここに追加
};

export default nextConfig;  // next.config.mjs の場合