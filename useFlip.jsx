import { useState } from "react";

function useFlip() {
    const [toggleFlip, settoggleFlip] = useState(true);
    const toggleCardFlip = () => {
        settoggleFlip(isFlip => !isFlip);
    }
    return [toggleFlip, toggleCardFlip];
}

export default useFlip;