import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useState } from "react";

export function Thread() {
    const [input, setInput] = useState('');
    const isLargeScreen = useMediaQuery("(min-width: 1024px)");


    return (
        <div className={`flex flex-col h-full ${isLargeScreen ? 'bg-blue-500' : 'bg-red-500'}`}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={`border p-2 ${isLargeScreen ? 'text-lg' : 'text-sm'}`}
            />
        </div>
    );
}