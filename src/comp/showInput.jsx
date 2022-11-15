import Counter from "./counter";

const ShowInput = ({ counters }) => {
  return (
    <div>
      {counters.map((counter, index) => {
        return <Counter key={index} props={counter} />;
      })}
    </div>
  );
};

export default ShowInput;
