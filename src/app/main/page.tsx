'use client';

import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { Italiana, Noto_Sans, Jacques_Francois_Shadow } from 'next/font/google';

// Styles
import { Images } from '@/styles/globalStyles';
import MainContainer from '@/styles/app/main.styles';

// Fonts
const italiana = Italiana({ subsets: ['latin'], weight: ['400'] });
const NotoSans = Noto_Sans({ subsets: ['latin'], weight: ['400'] });
const JacquesFrancoisShadow = Jacques_Francois_Shadow({ subsets: ['latin'], weight: ['400'] });

export default function Main() {
  const harin = ['H', 'a', 'r', 'i', 'n'];

  return (
    <MainContainer>
      <section className="top-container">
        <p className={JacquesFrancoisShadow.className}>
          Hello, My name is Harin.
          <br />
          I am a front-end developer with a lot of curiosity.
          <br />
          Nice to meet you. Have fun looking around.
        </p>

        <div className="icons-container">
          <Link href="https://github.com/harinnnnn" target="_blank">
            <Image src={Images.Github} alt="move to github" />
          </Link>
          <Image src={Images.TicketIcon} alt="open ticket" />
        </div>
      </section>

      <section className="center-container">
        <div className="circle">
          <Image src={Images.MainCircle} alt="circle" />
        </div>

        <Image className="left-big-star" src={Images.MainLeftStarBig} alt="left-big-star" />
        <Image className="left-small-star" src={Images.MainLeftStarSmall} alt="left-small-star" />
        <div className={`${italiana.className} name-wrapper`}>
          {harin.map(name => {
            return <div className="name">{name}</div>;
          })}
        </div>
        <Image className="right-star" src={Images.MainRightStar} alt="right-star" />
      </section>

      <section className={`${JacquesFrancoisShadow.className} bottom-container`}>
        <Link href="/portfolios">
          <svg className="rotating rotate-portfolio" id="rotating-text" viewBox="0 0 200 200" width={628} height={628}>
            <defs>
              <path
                id="circle"
                d="M 100, 100
            m -85, 0
            a 85, 85 0 0, 1 170, 0
            a 85, 85 0 0, 1 -170, 0
            "
              />
            </defs>
            <text>
              <textPath className="text" alignmentBaseline="auto" xlinkHref="#circle">
                PortfolioPortfolioPortfolio
              </textPath>
            </text>
          </svg>
          <div className="menu portfolios">
            <div className="header">Portfolio</div>
            <p>
              Please click here
              <br />
              to navigate my portfolio.
            </p>
          </div>
        </Link>

        <div className="barcode-container">
          <Image src={Images.Barcode} alt="barcode" />
          <span className={NotoSans.className}>0821-HAKUNA-MATATA-0927</span>
        </div>

        <Link href="/posts">
          <svg className="rotating rotate-posts" id="rotating-text" viewBox="0 0 200 200" width={628} height={628}>
            <defs>
              <path
                id="circle"
                d="M 100, 100
            m -85, 0
            a 85, 85 0 1, 0 170, 0
            a 85, 85 0 1, 0 -170, 0
            "
              />
            </defs>
            <text>
              <textPath className="text" alignmentBaseline="auto" xlinkHref="#circle">
                PostsPostsPostsPostsPosts
              </textPath>
            </text>
          </svg>
          <div className="menu posts">
            <div className="header">Posts</div>
            <p>
              Please click here
              <br />
              to navigate my blog.
            </p>
          </div>
        </Link>
      </section>
    </MainContainer>
  );
}
