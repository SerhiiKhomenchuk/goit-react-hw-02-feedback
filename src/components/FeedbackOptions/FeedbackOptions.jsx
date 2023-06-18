// import { Button } from 'components/Button/Button';

import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <h2>Please Leave feedback</h2>
      <div>
        {options.map(key => {
          return (
            <Button key={key} onClick={() => onLeaveFeedback(key)}>
              {key}
            </Button>
          );
        })}
      </div>
    </>
  );
};
