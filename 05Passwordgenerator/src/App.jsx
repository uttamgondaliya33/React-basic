import "tailwindcss";

import { useState , useCallback , useEffect , useRef } from "react";

function App() {
  const [length , setLength] = useState(8);
  const [numAllowed , setNumAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useref
  const passwordRef = useRef(null);
  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(numAllowed) str += '0123456789';
    if(charAllowed) str += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char)
    }
    setPassword(pass);

   }, [length, numAllowed, charAllowed, setPassword]);

   const copyPasswordClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 300)
    window.navigator.clipboard.writeText(password)
   },[password])

  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, charAllowed, generatePassword]);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h3 className="text-white text-center px-4 py-2">Password generator</h3>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 bg-white px-3" placeholder="Password" readOnly ref={passwordRef}/>
          <button onClick={copyPasswordClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e)=> {setLength(e.target.value)}}
             />
             <label>length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => {setNumAllowed((prev) => !prev)}}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {setCharAllowed((prev) => !prev)}}
            />
            <label>Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
