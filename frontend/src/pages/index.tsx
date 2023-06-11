import { Inter } from 'next/font/google'
import axios from "axios";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const login = async(e: any) => {
    // デフォルトのイベントをキャンセル
    e.preventDefault()
    console.log(1)
    const url = 'http://localhost:8000/hello'
    const response = await axios.post(url, {user_name: 'demo', password: 'demo'});
    console.log(2)
    console.log(response.data.message)
    alert(response.data.message)
  }

  return (
    <div>
      <header>
        <h1 className="flex items-center justify-center bg-cyan-300 text-5xl h-16 align-middle">
          kamorin's サイト
        </h1>
      </header>
      <button onClick={login}>テキスト</button>
      <footer>
        <h2 className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-cyan-300 text-3xl h-12">
          kamorin 2022
        </h2>
      </footer>
    </div>
  )
}
