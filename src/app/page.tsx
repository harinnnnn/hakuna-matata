'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // "/"가 아닌 "/main"을 기본 페이지로 함.
    router.push('/main');
  }, []);
}
