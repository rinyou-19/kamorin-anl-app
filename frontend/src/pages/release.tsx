export default function Release() {
  // リリースノートを定義(ここはSSGの対応をしたい)
  return (
    <div className="w-full">
      <h1 className="mt-4 flex justify-center text-3xl">リリースノート</h1>
      <ul>
        <li>・2023/xx/xx ver0.0リリース</li>
      </ul>
      <div className="flex justify-center mt-2 mb-2 sm:mt-4 sm:mb-4">
        <p className="cursor-pointer text-sky-500 text-sm sm:text-base">ログイン画面へ</p>
      </div>
    </div>
  )
}