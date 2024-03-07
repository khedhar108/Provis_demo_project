
import { parameters } from "../../constants/parameters";


function CostCalculator() {
  return (
    <div className="flex flex-col justify-evenly mt-4 md:flex-row">
      {parameters.map((param) => (
        <fieldset className="p-3 rounded-md border" key={param.id}>
          <legend className="mb-3">{param.Legend}</legend>
          <div className="mb-3 rounded-full">
            {/* <label htmlFor={`input${param.id}`} className="form-label">
              {param.Label}
            </label> */}
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
      ))}

      <div className="flex justify-center items-center mt-4 md:justify-start md:mt-0">
        {" "}
        <button className="btn btn-primary">Check Price</button>
      </div>
    </div>
  );
}

export default CostCalculator;
