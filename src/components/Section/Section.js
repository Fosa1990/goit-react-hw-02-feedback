import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  ${props =>
    props.flex
      ? 'display: flex; align-items: center; justify-content: center; flex-direction: row;'
      : 'display: block;'};
  ${props => (props.vertical ? 'flex-direction: column;' : '')};

  padding: 0 25px;
  margin: 0;
`;
const MainTitle = styled.h1`
  text-align: center;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  color: var(--yellow);
`;
const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
`;

const IsItMainTitle = ({ mainTitle, title }) => {
  return (
    <>
      {mainTitle === true ? (
        <MainTitle>{title}</MainTitle>
      ) : (
        <Title>{title}</Title>
      )}
    </>
  );
};

const Section = ({ title, mainTitle, children, flex, vertical }) => {
  return (
    <SectionWrapper flex={flex} vertical={vertical}>
      <IsItMainTitle title={title} mainTitle={mainTitle} />
      {children}
    </SectionWrapper>
  );
};

Section.defaultProps = {
  mainTitle: false,
  title: 'Section title',
  flex: false,
  vertical: false,
};

Section.propTypes = {
  mainTitle: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  verticalFlex: PropTypes.bool,
};

export default Section;
