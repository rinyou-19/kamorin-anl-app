export default function Auth() {
  // 二要素認証画面を定義
  return (
    <div className="w-full">
      <h1 className="mt-4 flex justify-center text-3xl">二要素認証</h1>
      <div className="flex justify-center">
        <form className="w-2/3 bg-white shadow-md rounded pt-6 pb-8 mt-4 px-2 sm:px-16">
          <div className="flex justify-center mt-8 text-xs sm:text-xl">
            <label htmlFor="name" className="block mt-2 inline-block text-gray-700">認証コード</label>
            <input type="text" id="name" name="name" className="ml-6 w-1/3 rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"/>
          </div>
          <div className="flex justify-center text-x mt-2">
            <button className="mt-8 rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">認証</button>
          </div>
        </form>    
      </div>
    </div>
  )
}