import { Card as _Card } from "react-native-paper";

type CardProps = {
  title: string;
  subtitle: string;
  url: string;
};

export const Card = ({ title, subtitle, url }: CardProps) => {
  return (
    <_Card>
      <_Card.Cover source={{ uri: url }} />
      <_Card.Title title={title} subtitle={subtitle} />
    </_Card>
  );
};
