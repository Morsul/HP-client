import React, { Fragment, useEffect, useState } from 'react';
import { Bank } from './bank/Bank';
import { Location } from './location/Location';
import { DarkArts } from './darkArts/DarkArts';
import { BonusDeck } from './bonusDeck/BonusDeck';
import { Villians } from './villians/Villians';
import './field.scss';

export const Field = () => {
  return (
    <div className="field">
      <section className="left-side">
        <div className="group-horizontal">
          <div className="group-vertical">
            <Bank />
            <Location />
          </div>
          <div className="group-vertical"></div>
          <div className="group-vertical">
            <DarkArts />
          </div>
        </div>
        <div className="wide">
          <Villians />
        </div>
      </section>
      <section className="right-side">
        
      </section>

      <section>
        <BonusDeck />
      </section>
    </div>
  );
};
