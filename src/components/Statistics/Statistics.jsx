import { IfFeedbackTrue } from './IfFeedbackTrue';
import { Notification } from './Notification';

export const Statistics = ({
  state,
  options,
  id,
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
          id={id}
          countTotalFeedback={countTotalFeedback}
          positivePercentage={positivePercentage}
        ></IfFeedbackTrue>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </>
  );
};
