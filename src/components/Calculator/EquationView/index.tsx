import {useEquation} from "@/hooks/useEquation";

export default function EquationView() {
  const [equation] = useEquation();

  return <div className="flex items-center bg-blue-950 text-white rounded-lg p-2 w-full min-h-12 text-xl dark:bg-neutral-700 dark:text-white">
    {equation}
  </div>
}