import React from 'react';
import styled from 'styled-components';
import Meta from '../../_shared/Meta';

interface IIntroTemplateProps {
  className?: string;
  title: string;
}

const IntroTemplate: React.FC<IIntroTemplateProps> = ({
  className,
  title
}) => {
  return (
    <>
      <Meta title={title} />
      <Wrapper className={className}>
        <IntroImage src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />

        <IntroCopy>
          Please use the <strong>README.md</strong> file located in this repo to start the challenge.
        </IntroCopy>
        <IntroCopy>
          Remember you do not need to complete both parts of this task. See how far you can get.
        </IntroCopy>
        <IntroCopy>
          If you cannot complete it, then please ensure you can let us know what it is you would have done should you have had more time.
        </IntroCopy>
        <IntroCopy>** You can delete this file 👍</IntroCopy>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 40px;
`;

const IntroImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const IntroCopy = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: white;
`;

export default IntroTemplate;
