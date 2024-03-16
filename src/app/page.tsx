"use client";

import MCQ_QUESTIONS from "../../data/python_mcq.json";
import {
    Check,
    // Loader2,
    // Settings2,
    // SquareArrowOutUpRight,
    X,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";

type Question = {
    question: string;
    answers: string[];
    correctAnswer: string;
};

function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default function Home() {
    const [selected, setSelected] = useState<string[]>(
        Array(MCQ_QUESTIONS.length).fill("")
    );
    const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

    const resetProgress = () => {
        setSelected(Array(MCQ_QUESTIONS.length).fill(""));
    };

    useEffect(() => {
        const shuffledQuestions = MCQ_QUESTIONS.map((question) => ({
            ...question,
            answers: shuffleArray(question.answers),
        }));
        setShuffledQuestions(shuffledQuestions);
    }, []);

    return (
        <main className="flex flex-col wrapper my-12 min-h-[100dvh]">
            <h1 className="text-4xl font-bold flex items-center pb-6">
                <p className="text-4xl  text-primary">ICS 33&nbsp;</p>
                <p>MCQ</p>
            </h1>

            <div className="mb-6">
                <h2 className="text-xl font-bold">About</h2>
                <p>
                    This website is simply a minimalist reskin of{" "}
                    <a
                        href="https://lucent-puppy-4aef4d.netlify.app/"
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="underline"
                    >
                        {"Bo's"} ICS 33 MCQ questions and related web app
                    </a>
                    , made for personal use. Full credits to Bo for his
                    fantastic work.
                </p>
            </div>

            {/* <div className="space-y-2 pb-10">
                <div className="flex items-center space-x-1 font-semibold text-xl">
                    <h3>MCQ Settings</h3> <Settings2 />
                </div>
                <ToggleGroup
                    variant="outline"
                    type="multiple"
                    className="flex flex-col text-left items-start"
                >
                    <ToggleGroupItem
                        value="automatic checking"
                        aria-label="automatic checking"
                        className="space-x-1"
                    >
                        <Check className="w-5 h-5" />
                        <p className="text-md">Auto-grade</p>
                    </ToggleGroupItem>
                </ToggleGroup>
            </div> */}

            {/* <div className="flex flex-col space-y-1 mb-6">
                <p>Progress is stored locally. Reset anytime {"you'd"} like.</p>
                <Button className="w-fit" onClick={resetProgress}>
                    Reset Progress
                </Button>
            </div> */}

            <div className="space-y-4">
                {/* {MCQ_QUESTIONS.slice(0, 5).map((item, index) => ( */}
                {shuffledQuestions.map((item, index) => (
                    <div className="space-y-2" key={item.question}>
                        <h6 className="text-lg font-bold">
                            {index + 1}. {item.question}
                        </h6>
                        <div>
                            <ToggleGroup
                                variant="outline"
                                type="single"
                                className="flex flex-col text-left items-start"
                                onValueChange={(value) => {
                                    setSelected((prevSelected) => {
                                        const newSelected = [...prevSelected];
                                        newSelected[index] = value;
                                        return newSelected;
                                    });
                                }}
                            >
                                {item.answers.map((answer) => {
                                    return (
                                        <div
                                            className="flex items-center space-x-4"
                                            key={answer}
                                        >
                                            <ToggleGroupItem
                                                value={answer}
                                                aria-label={answer}
                                                className="text-left data-[state=on]:text-primary data-[state=on]:drop-shadow-sm"
                                            >
                                                <p className="text-md">
                                                    {answer}
                                                </p>
                                            </ToggleGroupItem>
                                            {selected[index] == answer ? (
                                                <p className={cn()}>
                                                    {answer ==
                                                    item.correctAnswer ? (
                                                        <Check className="text-green-500 w-5 h-5" />
                                                    ) : (
                                                        <X className="text-red-500 w-5 h-5" />
                                                    )}
                                                </p>
                                            ) : null}
                                        </div>
                                    );
                                })}
                            </ToggleGroup>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
