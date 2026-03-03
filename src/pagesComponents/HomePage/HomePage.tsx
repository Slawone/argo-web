'use client';

import { Announcement } from './components';
import { Slogan } from './components';
import { System } from './components';

export const HomePage = () => {
  return (
    <>
      <Announcement />
      <Slogan text='ХРАНЕНИЕ от Терабайтов до Зеттабайтов' />
      <System />
      <Slogan text='Индивидуальность в каждом продукте ' />
      <System />
      <Slogan text='Инсталяция в составе решения ' />
    </>
  )
};
