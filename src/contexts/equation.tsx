"use client";

import {createContext, Dispatch, SetStateAction} from "react";

export const EquationContext = createContext<[string, Dispatch<SetStateAction<string>>]>(["", () => {}] );
