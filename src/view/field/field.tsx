import React, { Fragment, useEffect, useState } from 'react';
import { Bank } from './bank/bank';
import { Location } from './location/location';
import { DarkArts } from './darkArts/darkArts';
import { BonusDeck } from './bonusDeck/bonusDeck';
import { Villians } from './villians/villians';
import './field.scss';

export const Field = () => {
  return (
    <div className="field">
      <section className="left-side">
        <div className="group-horizontal">
          <div className="grop-vertical">
            <Bank />
            <Location />
          </div>
          <div className="grop-vertical"></div>
          <div className="grop-vertical">
            <DarkArts />
          </div>
        </div>
      </section>
      <section className="right-side">
        <Villians />
      </section>
      <section className="wide"></section>
      <section>
        <BonusDeck />
      </section>
    </div>
  );
};
