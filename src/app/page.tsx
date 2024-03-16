"use client";

import MCQ_QUESTIONS from "../../data/python_mcq.json";
import { Check, Settings2, SquareArrowOutUpRight, X } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Question = {
    question: string;
    answers: string[];
    correctAnswer: string;
};

export default function Home() {
    const [selected, setSelected] = useState<string[]>(
        Array(MCQ_QUESTIONS.length).fill("")
    );

    return (
        <main className="flex flex-col wrapper my-12">
            <h1 className="text-4xl font-bold flex items-center pb-6">
                <p className="text-4xl  text-primary">ICS 33&nbsp;</p>
                <p>MCQ -&nbsp;</p>
                <a
                    href="https://lucent-puppy-4aef4d.netlify.app/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex-center space-x-1 text-xl underline"
                >
                    <p>See Original Here</p>
                    <SquareArrowOutUpRight className="stroke-[2.5]" />
                </a>
            </h1>

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

            <div className="space-y-4">
                {/* {MCQ_QUESTIONS.slice(0, 5).map((item, index) => ( */}
                {MCQ_QUESTIONS.map((item, index) => (
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
