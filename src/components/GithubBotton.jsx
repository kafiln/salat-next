import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import { KEYS } from '../i18n';
import { APPLICATION_SOURCE } from '../settings';

//TODO: Find a good spot fot this button
export default function ViewOnGithub() {
  return (
    <div
      className={`bg-black text-white border flex items-center justify-center font-bold px-1 py-2 rounded-lg`}
    >
      <a target="_black" className="mx-2 " href={APPLICATION_SOURCE}>
        <FormattedMessage
          id={KEYS.VIEWONGITHUB}
          defaultMessage="View on Github"
        ></FormattedMessage>
      </a>
      <FaGithub></FaGithub>
    </div>
  );
}
