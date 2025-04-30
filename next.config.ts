import type { NextConfig } from "next";

// SSRとCSRのビルドを分けるために、環境変数を使用してビルドターゲットを指定します。
// 例えば、`BUILD_TARGET=static`を指定すると、静的エクスポート用の設定が適用されます。
const isStaticExport: boolean = process.env.BUILD_TARGET === 'static';

const nextConfig: NextConfig = isStaticExport
? {
    // SSRを使用しない場合の設定
    output: "export",
    images: { unoptimized: true },
    basePath: "/<REPO_NAME>",
    assetPrefix: "/<REPO_NAME>/",
}
: {
    reactStrictMode: true,
    // SSR 環境で使う設定をここに記述
};

export default nextConfig;
