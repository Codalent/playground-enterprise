import ExampleUrlComponent from "@/components/ExampleUrl";

interface CryptoCurrencyProps {
  exampleUrl: string;
  placeholderValue: string;
  helpText: string;
}

const CryptoCurrency: React.FC<CryptoCurrencyProps> = ({
  exampleUrl,
  placeholderValue,
  helpText
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

export default CryptoCurrency;
