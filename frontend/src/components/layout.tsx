import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  // ログイン前の共通レイアウトを定義
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}