const sparkleAmount = 10;

export default function Sparkles() {
    return (
        <>
            {Array.from({ length: sparkleAmount }, (_, i) => i).map((_, i) => (
                <div
                    key={i}
                    className="sparkle absolute"
                    style={{
                        left: 50 + Math.floor(Math.random() * 100) - 50,
                        top: 50 + Math.floor(Math.random() * 100) - 50
                    }}
                />
            ))}
        </>
    );
}
