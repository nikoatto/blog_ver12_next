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
              <Image className="headerSNS__icon--instagram" src="/large-x-logo.png.twimg.1920.png" alt="SNSのアイコン" width={28} height={28} />
            </Link>
            <Link href="https://www.instagram.com/takanashi_niko/">
              <Image className="headerSNS__icon--x" src="/Instagram_Glyph_Black.svg" alt="SNSのアイコン" width={28} height={28} />
            </Link>
          </div>
        </div>
        {/* <nav className="globalNav">
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
        </nav> */}
      </header>



      <div className="mainContainer">
        {/* ========================= top Contianer START ========================= */}

        <div className="topContainer">
          <br />
          <Image className="topLogo" src="/takanashi_logo.svg" alt="小鳥遊にこのlogo" width={400} height={400} />
        </div>

        <div id="topBlogContainer">
          <div className="dockContainer">
            <h2 className="dockItem">BLOG</h2>
            <h2 className="dockItem">WORKS</h2>
          </div>

          {/* BLOGとWORKSの単語を動かしたい。バウンスするとか */}
          {/* スクロールするとトップのアイコンが横に来てアバウトの文字が横から出るようにしたい！ */}
          {/* 個々のコンテンツをフルページに出せるようにしたいなぁ */}
          {/* ========================= top Contianer END ========================= */}
        </div>
      </div>
      {/* <div className="topAbout_container">
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
          </div> */}
    </>
  );
}

