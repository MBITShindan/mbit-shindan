import type { NextConfig } from "next";

// SSRとCSRのビルドを分けるために、環境変数を使用してビルドターゲットを指定します。
// 例えば、`BUILD_TARGET=static`を指定すると、静的エクスポート用の設定が適用されます。
const isStaticExport: boolean = process.env.BUILD_TARGET === 'static';

//共通の設定
const baseConfig: NextConfig = {
    reactStrictMode: true,
};

const nextConfig: NextConfig = isStaticExport
? {
    // SSRを使用しない場合の設定
    ...baseConfig,
    output: "export",
    images: { unoptimized: true },
    basePath: "/mbit-shindan",
    assetPrefix: "/mbit-shindan/",
    env: {
        NEXT_PUBLIC_BASE_PATH: "/mbit-shindan",
    },
}
: {
    // SSRを使用する場合の設定
    ...baseConfig,
    env: {
        NEXT_PUBLIC_BASE_PATH: "",
    },
};

export default nextConfig;
