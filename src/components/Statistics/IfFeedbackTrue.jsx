import { StatItem } from './Statistics.styled';

export const IfFeedbackTrue = ({
  state,
  countTotalFeedback,
  positivePercentage,
}) => {
  return (
    <>
      {Object.entries(state).map(([key, value]) => {
        return (
          <StatItem key={key}>
            {key}: {value}
          </StatItem>
        );
      })}

      <StatItem>Total: {countTotalFeedback}</StatItem>
      <StatItem>Positive feedback: {positivePercentage}%</StatItem>
    </>
  );
};
