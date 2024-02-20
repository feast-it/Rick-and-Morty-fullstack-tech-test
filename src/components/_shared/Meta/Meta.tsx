import React from 'react';
import Head from 'next/head';

interface IMetaProps {
  title: string;
}

const Meta: React.FunctionComponent<IMetaProps> = ({
  title
}) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
