'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { Announcement } from './components';
import { System } from './components';

export const HomePage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <Announcement />
      <System />
      <System />
    </>
  )
};
