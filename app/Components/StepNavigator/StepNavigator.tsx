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
        <div className="receipt">
            {children[step - 1]}

            <div className="buttonContainer">
                {step > 1 && (
                    <button
                        onClick={handlePrev}
                        className="button buttonSearch">
                        Atrás
                    </button>
                )}

                <button
                    onClick={handleNext}
                    className="button buttonSearch"
                >
                    {step === totalSteps ? "Inscribir" : "Siguiente"}
                </button>
            </div>
        </div>
    );
}
