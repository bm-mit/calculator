import {useEquation} from "@/hooks/useEquation";
import {twMerge} from "tailwind-merge";
import {evaluate} from 'mathjs'

export default function Key({children, className = undefined}: { children: string, className?: string }) {
  const [, setEquation] = useEquation();

  function handleClick() {
    return setEquation((equation) => {
        if (children === '=') {
          if (equation)
            try {
              return evaluate(equation).toString();
            } catch {
              return 'Invalid equation';
            }
          return "0";
        } else if (children === 'DEL') {
          if (equation !== 'Invalid equation')
            return equation?.slice(0, -1);
          return ""
        } else if (children === 'AC')
          return setEquation('');
        else if (equation === 'Invalid equation' || equation == 'Infinity' || equation == undefined || equation == '-Infinity')
          return children;
        return equation + children;
      }
    )
  }

  return <button className={twMerge("bg-neutral-100 rounded-lg text-sm dark:text-white dark:bg-neutral-600", className)}
                 onClick={handleClick}>
    {children}
  </button>
}