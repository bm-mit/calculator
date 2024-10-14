import Key from './Key'

export default function KeyPad() {
  return <div className="grid grid-cols-4 grid-rows-5 gap-2 min-h-64">
    <Key>(</Key>
    <Key>)</Key>
    <Key>DEL</Key>
    <Key>AC</Key>

    <Key>7</Key>
    <Key>8</Key>
    <Key>9</Key>
    <Key>/</Key>

    <Key>4</Key>
    <Key>5</Key>
    <Key>6</Key>
    <Key>*</Key>

    <Key>1</Key>
    <Key>2</Key>
    <Key>3</Key>
    <Key>-</Key>

    <Key>0</Key>
    <Key>.</Key>
    <Key className="bg-blue-950 text-white dark:bg-neutral-700">=</Key>
    <Key>+</Key>
  </div>
}