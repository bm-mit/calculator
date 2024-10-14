"use client";

import Calculator from "@/components/Calculator";
import {EquationContext} from "@/contexts/equation";
import {Dispatch, SetStateAction, useMemo, useState} from "react";
import DarkModeSlider from "@/components/DarkModeSlider";
import {twMerge} from "tailwind-merge";

export default function Home() {
  const [equation, setEquation] = useState("");

  const equationMemo = useMemo<[string, Dispatch<SetStateAction<string>>]>(() => [equation, setEquation], [equation]);

  return <div className={twMerge("min-h-screen flex justify-center p-8 dark:bg-gray-800")}>
    <div className="max-w-screen-sm w-full flex flex-col gap-4">
      <EquationContext.Provider value={equationMemo}>
        <Calculator/>
      </EquationContext.Provider>

      <DarkModeSlider/>
    </div>
  </div>
}
