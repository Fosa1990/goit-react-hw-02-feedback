import PropTypes from 'prop-types';
import styled from 'styled-components';

const FeedbackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
`;
const FeedbackButton = styled.button`
  padding: 10px 20px;
  font-family: var(--big);
  font-weight: 700;
  color: var(--yellow);
  border: 1px solid gray;
  border-radius: 6px;
  box-shadow: 0.5px 0.5px 0.5px 0.5px gray;
  transition: all 250ms ease-in;
  :not(:last-of-type) {
    margin-right: 10px;
  }
  :first-of-type {
    color: var(--green);
  }
  :last-of-type {
    color: var(--red);
  }
  :hover {
    cursor: pointer;
    color: var(--white);
    background-color: var(--yellow);
  }
  :first-of-type:hover {
    background-color: var(--green);
  }
  :last-of-type:hover {
    background-color: var(--red);
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
