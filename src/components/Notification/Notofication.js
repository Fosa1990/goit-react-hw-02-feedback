import PropTypes from 'prop-types';
import styled from 'styled-components';

const NotoficationWrapper = styled.div`
  padding: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

const Notofication = ({ message }) => {
  return <NotoficationWrapper>{message}</NotoficationWrapper>;
};

Notofication.defaultProps = {
  message: "It's empty here",
};

Notofication.propTypes = {
  message: PropTypes.string,
};

export default Notofication;
