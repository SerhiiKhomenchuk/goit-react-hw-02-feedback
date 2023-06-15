import { StatItem } from './Statistics.styled';

export const IfFeedbackTrue = ({
  state,
  options,
  id,
  countTotalFeedback,
  positivePercentage,
}) => {
  return (
    <>
      {options.map(key => {
        return (
          <StatItem key={id()}>
            {key}: {state[key]}
          </StatItem>
        );
      })}
      <StatItem>Total: {countTotalFeedback}</StatItem>
      <StatItem>Positive feedback: {positivePercentage}%</StatItem>
    </>
  );
};
