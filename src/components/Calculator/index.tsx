import EquationView from "@/components/Calculator/EquationView";
import KeyPad from "@/components/Calculator/KeyPad";

export default function Calculator() {
  return <div className="flex flex-col gap-4 p-4 size-100 bg-neutral-200 rounded-xl dark:bg-neutral-800">
    <EquationView />
    <KeyPad />
  </div>
}