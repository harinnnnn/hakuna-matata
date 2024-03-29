'use client';

import React from 'react';

import { Jacques_Francois_Shadow } from 'next/font/google';
import PostsContainer from '@/styles/app/posts.styles';

const JacquesFrancoisShadow = Jacques_Francois_Shadow({ subsets: ['latin'], weight: ['400'] });

export default function Posts() {
  return (
    <PostsContainer>
      <div className={JacquesFrancoisShadow.className}>Posts</div>
    </PostsContainer>
  );
}
