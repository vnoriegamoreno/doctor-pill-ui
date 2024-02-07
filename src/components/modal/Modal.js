export const Modal = () => {
  const genArrayNumber = (from, to) => {
    let numbers = [];
    for (let i = from; i <= to; i++) {
      numbers.push(i);
    }
    return numbers;
  };
  const getOptions = (name) => {
    const rangeMap = {
      hour: { from: 1, to: 12 },
      minutes: { from: 1, to: 60 },
    };
    const { from, to } = rangeMap[name];
    const hours = genArrayNumber(from, to);
    return hours.map((h) => (
      <option value={h} key={`${name}-option-${h}`}>
        {h}
      </option>
    ));
  };
  return (
    <div className="modal">
      <form>
        <fieldset>
          <label>Medicine name</label>
          <input type="text" placeholder="... " />
        </fieldset>
        <fieldset>
          <label>Short description</label>
          <input type="text" />
        </fieldset>
        <fieldset>
          <label>Repeat</label>
          <ul>
            <li>
              <span>Every Sunday</span>
              <input type="checkbox" />
            </li>
            <li>
              <span>Every Monday</span>
              <input type="checkbox" />
            </li>
            <li>
              <span>Every Tuesday</span>
              <input type="checkbox" />
            </li>
            <li>
              <span>Every Wednesday</span>
              <input type="checkbox" />
            </li>
            <li>
              <span>Every Thursday</span>
              <input type="checkbox" />
            </li>
            <li>
              <span>Every Friday</span>
              <input type="checkbox" />
            </li>
            <li>
              <input type="checkbox" />
              <span>Every Saturday</span>
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <label>Alarm</label>
          <select>{getOptions("hour")}</select>
          <select>{getOptions("minutes")}</select>
          <select>
            <option value="pm">P.M</option>
            <option value="am">A.M</option>
          </select>
        </fieldset>
        <fieldset>
          <button>Cancel</button>
          <button>Save</button>
        </fieldset>
      </form>
    </div>
  );
};
