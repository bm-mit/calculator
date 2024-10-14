import {ChangeEvent} from "react";

export default function DarkModeSlider() {

  const handleDarkModeChange = (e : ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked)
      document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }

  return <div className="flex justify-center gap-2 w-full">
    <label className="dark:text-white">Dark Mode</label>
    <input onChange={handleDarkModeChange} type="checkbox"/>
  </div>
}