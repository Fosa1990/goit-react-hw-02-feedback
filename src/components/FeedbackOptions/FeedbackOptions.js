import PropTypes from 'prop-types';
import styled from 'styled-components';

const FeedbackWrapper = styled.div`
  padding: 5px 10px 5px 10px;
`;
const FeedbackButton = styled.button`
  padding: 5px 9px 5px 9px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  background-color: aliceblue;
  border: 1px solid gray;
  border-radius: 6px;
  box-shadow: 0.5px 0.5px 0.5px 0.5px gray;
  transition: all 250ms ease-in;
  :not(:last-of-type) {
    margin-right: 10px;
  }
  :hover {
    cursor: pointer;
    background-color: rgba(22, 144, 22, 0.8);
  }
`;
const FeedbackOptions = ({
  onHandleClickBtnGood,
  onHandleClickBtnNeutral,
  onHandleClickBtnBad,
}) => {
  return (
    <FeedbackWrapper>
      <FeedbackButton
        type="button"
        onClick={() => {
          onHandleClickBtnGood();
        }}
      >
        Good
      </FeedbackButton>
      <FeedbackButton
        type="button"
        onClick={() => {
          onHandleClickBtnNeutral();
        }}
      >
        Neutral
      </FeedbackButton>
      <FeedbackButton
        type="button"
        onClick={() => {
          onHandleClickBtnBad();
        }}
      >
        Bad
      </FeedbackButton>
    </FeedbackWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onHandleClickBtnGood: PropTypes.func.isRequired,
  onHandleClickBtnNeutral: PropTypes.func.isRequired,
  onHandleClickBtnBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
