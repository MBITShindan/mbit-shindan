import { useEffect, useState } from "react";

interface HighlightHintProps {
    targetRef: React.RefObject<HTMLElement | null>;
    message?: string;
}

export const HighlightHint: React.FC<HighlightHintProps> = ({ targetRef, message }) => {
    const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

    useEffect(() => {
        const updatePosition = () => {
            if (targetRef.current) {
                const rect = targetRef.current.getBoundingClientRect();
                const scrollY = window.scrollY || document.documentElement.scrollTop;
                const scrollX = window.scrollX || document.documentElement.scrollLeft;

                setPosition({
                    top: rect.top + scrollY + rect.height / 2,
                    left: rect.left + scrollX + rect.width / 2,
                });
            }
        };

        updatePosition();
    }, [targetRef]);

    if (!position) return null;

    return (
        <div
            className="pointer-events-none absolute z-50"
            style={{
                top: position.top,
                left: position.left,
                transform: "translate(-50%, -50%)", // 中心に配置
            }}
        >
            {/* 輪っかのスタイル例 */}
            <div
                className="w-24 h-24 border-4 border-blue-500 rounded-full animate-ping"
                style={{
                    marginTop: 50,
                    marginLeft: 20
                    // marginTop: (targetRef.current?.getBoundingClientRect().width || 0) * 0.3,
                    // marginLeft: (targetRef.current?.getBoundingClientRect().height || 0) * 0.1
                }}
            />
            {/* メッセージも一緒に表示（オプション） */}
            {message && (
                <div className="mt-5 text-white text-center bg-black/70 p-2 rounded-lg text-sm max-w-[200px]">
                    {message}
                </div>
            )}
        </div>
    );
};
