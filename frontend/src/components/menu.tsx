export default function Menu() {
  // メニューを定義
  return (
    <div>
      <div className="flex bg-green-200 w-full h-1/12">
        <div className="flex items-center justify-center border-r-4 border-dotted border-gray-400 bg-green-200 h-full w-1/4 text-sm sm:text-lg md:text-2xl">購入情報紹介</div>
        <div className="flex items-center justify-center border-r-4 border-dotted border-gray-400 bg-green-200 h-full w-1/4 text-sm sm:text-lg md:text-2xl">購入情報分析</div>
        <div className="flex items-center justify-center border-r-4 border-dotted border-gray-400 bg-green-200 h-full w-1/4 text-sm sm:text-lg md:text-2xl">購入情報予想</div>
        <div className="flex items-center justify-center border-gray-400 bg-green-200 h-full w-1/4 text-sm sm:text-lg md:text-2xl">お問い合わせ</div>
      </div>
    </div>
  )
}