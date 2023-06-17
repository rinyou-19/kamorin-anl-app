import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  // 共通レイアウトを定義
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )    
}