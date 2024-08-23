import commonStyles from "./globals.css";
import styles from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <header>
      <h1 className={commonStyles.title}>TAKANASHI NIKO</h1>
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
    </header>
    <Image src="/takanashi_logo.svg" alt="小鳥遊にこのlogo" width={500} height={500} />
    </>
  );
}