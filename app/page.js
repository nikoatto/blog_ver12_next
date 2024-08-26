'use client'

import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <header>
        <div className="headerContainer">
          <Link href="/">
            <Image src="/takanashi_logo_type.svg" width={200} height={80} />
          </Link>
          <div className="headerSNS__icon">
            <Link href="https://x.com/takanikoillust">
              <Image className="headerSNS__icon--instagram" src="/large-x-logo.png.twimg.1920.png" alt="SNSのアイコン" width={40} height={40} />
            </Link>
            <Link href="https://www.instagram.com/takanashi_niko/">
              <Image className="headerSNS__icon--x" src="/Instagram_Glyph_Black.svg" alt="SNSのアイコン" width={40} height={40} />
            </Link>
          </div>
        </div>
        <nav className="globalNav">
          <ul>
            <li>
              <Link href="/">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/about">
                WORKS
              </Link>
            </li>
            <li>
              <Link href="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </header>



      <div className="mainContainer">
        {/* ========================= top Contianer START ========================= */}
        <div className="topContainer">
          <br />
          <Image className="topLogo" src="/takanashi_logo.svg" alt="小鳥遊にこのlogo" width={500} height={500} />
        </div>
        <div id="topWorkContainer">
          <div className="topContentsInner">
            <div className="topContentsHead">
              <h2 className="topContentsCaption">WORK</h2>
              <p className="topContentsDesc">私の描いたイラストです。ボヤけてるのはセンシティブなやつ。えっちな絵も描きます。</p>
            </div>
          </div>

          <div className="top">
            {/* ここ横スクロールにしたいなぁと思っています */}
            <div className="topWokrs">
              <div className="topWokrs__item">
                <Image src="/works/1.jpg" alt="イラスト" width={300} height={300} />
              </div>
              <div className="topWokrs__item">
                <Image src="/works/2.jpg" alt="イラスト" width={300} height={300} />
              </div>
              <div className="topWokrs__item">
                <Image src="/works/3.jpg" alt="イラスト" width={300} height={300} />
              </div>
              <div className="topWokrs__item">
                <Image src="/works/4.jpg" alt="イラスト" width={300} height={300} />
              </div>
              <div className="topWokrs__item">
                <Image src="/works/5.jpg" alt="イラスト" width={300} height={300} />
              </div>
              <div className="topWokrs__item">
                <Image src="/works/6.jpg" alt="イラスト" width={300} height={300} />
              </div>
              <div className="topWokrs__item">
                <Image src="/works/7.jpg" alt="イラスト" width={300} height={300} />
              </div>
            </div>
          </div>

          <Link href="/works">
            <div className="topMore">
              <p>VIEW ALL</p>
            </div>
          </Link>
        </div>

        <div id="topBlogContainer">

          <div className="topContentsInner">
            <div className="topContentsHead">
              <h2 className="topContentsCaption">BLOG</h2>
              <p className="topContentsDesc">プログラミングやコーヒーやパスタの話などなど、プロフィールのLIKEのコンテンツにまつわることを描いています。</p>
            </div>
          </div>

          <div className="topBlog">
            <div className="topBlog__item">
              <Link href="/blog/1">
                <div className="topBlog__info">
                  <p>2024/08/25</p>
                  <p>PASTA</p>
                </div>
                <h3 className='topBlog__title'>美味しいパスタのレシピ</h3>
              </Link>
            </div>
            <div className="topBlog__item">
              <Link href="/blog/2">
                <div className="topBlog__info">
                  <p>2024/08/25</p>
                  <p>COFFEE</p>
                </div>
                <h3 className='topBlog__title'>美味しいコーヒーの淹れ方</h3>
              </Link>
            </div>
            <div className="topBlog__item">
              <Link href="/blog/3">
                <div className="topBlog__info">
                  <p>2024/08/25</p>
                  <p>PROGRAMMING</p>
                </div>
                <h3 className='topBlog__title'>プログラミングの勉強法</h3>
              </Link>
            </div>
            <div className="topBlog__item">
              <Link href="/blog/4">
                <div className="topBlog__info">
                  <p>2024/08/25</p>
                  <p>PROGRAMMING</p>
                </div>
                <h3 className='topBlog__title'>プログラミングの勉強法</h3>
              </Link>
            </div>
          </div>
          <Link href="/blog">
            <div className="topMore">
              <p>VIEW ALL</p>
            </div>
          </Link>
        </div>

        <div className="topAbout_container">
          <Image className="topLogo" src="/takanashi_logo.svg" alt="小鳥遊にこのlogo" width={500} height={500} />
          <div className='topContainer'>
            <div className="aboutContentsInner">
              <div className="topContentsHead">
                <h2 className="topContentsCaption">ABOUT</h2>
              </div>
            </div>
            <div className='topAbout'>
              <h2 className='topAboutName'>小鳥遊 にこ</h2>
              <p className='topAboutNameEng'>Takanashi Niko</p>
              <p>
                LIKE /<br />
                DRUMS / COFFEE / ILLUST / PASTA / JAZZ
              </p>
              <p>
                本職はデザインや、ウェブクリエイトをさせていただいてます。このブログではいろいろなことに興味がある私ですので、好きなことを軸にブログなんかで掘り下げることができればと思っています。
              </p>
              <div>
                <p>instagram</p>
                <p>pixiv</p>
                <p>X</p>
                <p>Tumbler</p>
                <p>etc.............................................</p>
              </div>
            </div>
          </div>
        </div>
        {/* ========================= top Contianer END ========================= */}
      </div>
    </>
  );
}
