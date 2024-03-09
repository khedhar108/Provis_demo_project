import { parameters } from "../../constants/parameters";

function CostCalculator() {
  const paramElements = parameters.map((param) => {
    return (
      <fieldset key={param.id} className="p-3 text-center border rounded-md">
        <legend className="p-1 mb-3 border-b">{param.Legend}</legend>

        <div className="mb-3 rounded-full">
          <div className="input-group">
            <span className="input-group-text">
              <param.icon />
            </span>

            <input
              type="text"
              className="form-control"
              id={`input${param.id}`}
              placeholder={param.placeholder}
            />
          </div>
        </div>
      </fieldset>
    );
  });

  return (
    <div className="flex flex-col m-4 mt-4 justify-evenly md:flex-row">
      {paramElements}

      <div className="flex items-center justify-center mt-4 md:justify-start md:mt-0">
        <button className="btn btn-primary">Check Price</button>
      </div>
    </div>
  );
}

export default CostCalculator;
