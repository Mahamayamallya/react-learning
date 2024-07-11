import React from "react";
import Emojipedia from "../emojipedia";

function createTerm(obj) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {obj.emoji}
        </span>
        <span>{obj.name}</span>
      </dt>
      <dd>{obj.meaning}</dd>
    </div>
  );
}

function Entry() {
  return <dl className="dictionary">{Emojipedia.map(createTerm)}</dl>;
}

export default Entry;
