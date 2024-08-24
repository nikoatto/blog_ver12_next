import commonStyles from "./globals.css";
import styles from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header>
        <div className="headerContainer">
          <Link href="/">
            <Image src="takanashi_logo_type.svg" width={200} height={80} />
          </Link>
          <nav>
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
                <Link href="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="mainContainer">
        <div className="topContainer">
          <Image className="topLogo" src="/takanashi_logo.svg" alt="小鳥遊にこのlogo" width={500} height={500} />
        </div>
        <div className="topWorkContainer">
          <div className="topMainInnner">
            <div className="topWorkHead">
              <h2 className="topMainCaption">WORK</h2>
              <p className="topMainDesc">私の描いたイラストです。ボヤけてるのはセンシティブなやつ。えっちな絵も描きます。</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}