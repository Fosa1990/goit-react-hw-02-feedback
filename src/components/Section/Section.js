import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 25px;
  margin: 0 25px;
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

const Section = ({ title, mainTitle, children }) => {
  return (
    <SectionWrapper>
      {mainTitle === true ? (
        <MainTitle>{title}</MainTitle>
      ) : (
        <Title>{title}</Title>
      )}
      {children}
    </SectionWrapper>
  );
};

Section.defaultProps = {
  mainTitle: false,
  title: 'Section title',
};

Section.propTypes = {
  mainTitle: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
