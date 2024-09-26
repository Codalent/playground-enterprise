import ExampleUrlComponent from "@/components/ExampleUrl";

interface StarwarsFilmsProps {
  exampleUrl: string;
  placeholderValue: string;
  helpText: string;
}

const StarwarsFilms: React.FC<StarwarsFilmsProps> = ({
  exampleUrl,
  placeholderValue,
  helpText,
}) => {
  return (
    <div>
      <ExampleUrlComponent
        exampleUrl={exampleUrl}
        placeholderValue={placeholderValue}
        helpText={helpText}
      />
    </div>
  );
};

export default StarwarsFilms;
