'use client';

import { Announcement } from './components';
import { Slogan } from './components';
import { System } from './components';
import { InfoGrid } from './components';
import { Section_1 } from './config';
import { Section_2 } from './config';

export const HomePage = () => {
  return (
    <>
      <Announcement />
      <Slogan text='ХРАНЕНИЕ от Терабайтов до Зеттабайтов' />
      <System />
      <InfoGrid items={Section_1} />
      <Slogan text='Индивидуальность в каждом продукте ' />
      <InfoGrid items={Section_2} />
      <Slogan text='Инсталяция в составе решения ' />
    </>
  )
};
