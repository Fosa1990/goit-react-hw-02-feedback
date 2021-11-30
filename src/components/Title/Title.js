import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleH1 = styled.h1`
  text-align: center;
  font-size: 32px;
  font-family: var(--big);
  color: var(--yellow);
`;

const TitleH2 = styled.h2`
  text-align: center;
  font-size: 28px;
  font-family: var(--font);
`;

const Title = ({ title, titleType }) => {
  return (
    <>
      {titleType === true ? (
        <TitleH1>{title}</TitleH1>
      ) : (
        <TitleH2>{title}</TitleH2>
      )}
    </>
  );
};

Title.defaultProps = {
  title: 'Title',
  titleType: false,
};

Title.propTypes = {
  title: PropTypes.string,
  titleType: PropTypes.bool,
};

export default Title;
