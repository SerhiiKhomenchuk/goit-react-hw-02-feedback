// import { Button } from 'components/Button/Button';

import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options, id }) => {
  return (
    <>
      <h2>Please Leave feedback</h2>
      <div>
        {options.map(key => {
          return (
            <Button
              key={id()}
              onClick={evt => {
                return onLeaveFeedback(
                  evt.currentTarget.innerText.toLowerCase()
                );
              }}
            >
              {key}
            </Button>
          );
        })}
      </div>
    </>
  );
};
