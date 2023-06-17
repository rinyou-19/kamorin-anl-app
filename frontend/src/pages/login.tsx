export default function Login() {
  // ログイン画面を定義
  return (
      <div className="w-full">
        <h1 className="mt-4 flex justify-center text-2xl md:text-3xl">ログイン</h1>
        <div className="flex justify-center">
          <form className="w-5/6 md:w-2/3 lg:w-1/2 bg-white shadow-md rounded px-2 md:px-8 lg:px-16 pt-2 md:pt-4 lg:pt-6 md:pb-4 lg:pb-8 mt-4">
            <div className="flex justify-center mt-1 sm:mt-8 text-sm sm:text-xl">
              <label htmlFor="name" className="mb-2 md:ml-4 lg:ml-8 xl:ml-12 inline-block text-gray-700 w-1/4 md:w-1/3">ユーザー名</label>
              <input type="text" id="name" name="name" className="ml-1 md:ml-4 w-3/4 md:w-2/3 rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-sm sm:text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" placeholder="山田 太郎" />
            </div>
            <div className="flex justify-center mt-1 sm:mt-5 text-sm sm:text-xl">
              <label htmlFor="password" className="mb-2 md:ml-4 lg:ml-8 xl:ml-12 inline-block text-gray-700 w-1/4 md:w-1/3">パスワード</label>
              <input type="password" id="password" name="password" className="ml-1 md:ml-4 w-3/4 md:w-2/3 rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-sm sm:text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" />
            </div>
            <div className="flex justify-center mt-2 sm:mt-4 sm:mb-4">
              <button className="mt-3 rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">ログイン</button>
            </div>
            <div className="flex justify-center mt-2 mb-2 sm:mt-4 sm:mb-4">
              <p className="cursor-pointer text-sky-500 text-sm sm:text-base">リリースノートへ</p>
            </div>
            <div className="flex justify-center mt-2 mb-2 sm:mt-4 sm:mb-4">
              <p className="text-red-500 text-sm sm:text-base">↑ご一読ください</p>
            </div>
          </form>
        </div>
      </div>
  )
}