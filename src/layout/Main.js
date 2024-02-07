import { useEffect, useState } from "react";
import { Pill } from "components/pill/Pill";
const mockData = require("mock/mock-data.json");
// import { Modal } from "components/modal/Modal";

const fakeAPI = async () =>
  await new Promise((resolve) => {
    return setTimeout(() => resolve(mockData), 2000);
  });

function Main() {
  const [pills, setPills] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fakeAPI().then((d) => setPills(d));
  }, []);

  const handleTags = (e) => {
    const className =
      e.target.className !== "tags"
        ? e.target.className
          ? ""
          : "active"
        : "tags";
    const tag = e.target.innerHTML;
    let updatedTag;

    e.target.className = className;

    if (className === "active" && !tags.includes(tag)) {
      updatedTag = tags.concat(tag);
    } else {
      updatedTag = !tags.length ? [] : tags.filter((t) => t !== tag);
    }

    setTags(updatedTag);
  };

  /* TODO: wrap header, tags and main in diff components */
  return (
    <>
      <header>
        <h1>Doctor Pill</h1>
      </header>
      <div className="tags" onClick={handleTags}>
        <span>completed</span>
        <span>pending</span>
      </div>
      <main>
        <div className="pill-wrapper">
          {pills.length ? (
            pills
              .filter((p) => (tags.length ? tags.includes(p.status) : p))
              .map((pill) => <Pill {...pill} key={pill.id} />)
          ) : (
            <p className="spinner">Loading ...</p>
          )}
        </div>
      </main>
      {/* <Modal /> */}
    </>
  );
}

export default Main;
