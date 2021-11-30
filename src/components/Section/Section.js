import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 10px 25px 10px 25px;
  margin: 0 25px 5px 25px;
`;
const Title = styled.h2`
  padding: 5px;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
`;

const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      {children}
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
