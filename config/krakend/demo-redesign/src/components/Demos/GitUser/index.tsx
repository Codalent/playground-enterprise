import ExampleUrlComponent from "@/components/ExampleUrl";

interface GitUserProps {
  exampleUrl: string;
  placeholderValue: string;
}

const GitUser: React.FC<GitUserProps> = ({ exampleUrl, placeholderValue }) => {
  return (
    <div>
      <ExampleUrlComponent
        exampleUrl={exampleUrl}
        placeholderValue={placeholderValue}
      />
    </div>
  );
};

export default GitUser;
