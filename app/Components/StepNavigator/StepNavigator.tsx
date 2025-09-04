'use client'

import { useState, ReactNode } from "react";
import "./StepNavigator.css"

interface StepNavigatorProps {
    totalSteps: number;
    children: ReactNode[];
    onFinish?: () => void;
}

export default function StepNavigator({ totalSteps, children, onFinish }: StepNavigatorProps) {
    const [step, setStep] = useState(1);

    const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (step < totalSteps) setStep(step + 1);
        else if (onFinish) onFinish();
    };

    const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (step > 1) setStep(step - 1);
    };

    return (
        <section className="stepNavigator">
            {children[step - 1]}

            <div className="absoluteButton">
                {step > 1 && (
                    <button
                        onClick={handlePrev}
                        className="button buttonSearch">
                        Atrás
                    </button>
                )}

                {step < totalSteps &&
                    <button
                        onClick={handleNext}
                        className="button buttonSearch"
                    >
                        Siguiente
                    </button>
}
            </div>
        </section>
    );
}
