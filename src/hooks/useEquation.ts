import {useContext} from "react";
import {EquationContext} from "@/contexts/equation";

export function useEquation() {

 const [equation, setEquation] = useContext(EquationContext);

 return [equation, setEquation] as const;
}