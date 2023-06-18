import { IfFeedbackTrue } from './IfFeedbackTrue';
import { Notification } from './Notification';

export const Statistics = ({
  state,
  options,
  countTotalFeedback,
  positivePercentage,
}) => {
  
  return (
    <>
      <h2> Statistics</h2>
      {countTotalFeedback ? (
        <IfFeedbackTrue
          state={state}
          options={options}
          countTotalFeedback={countTotalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </>
  );
};
