import React, { useState } from "react";
import data from "../../assets/devlog/devlog.json";
import DevlogItem from "../../components/devlog/devlogItem/DevlogItem";
import './Devlog'

export default function Devlog() {
  const [anyOpen, setAny] = useState(false)

  return (
    <section className="mt-5">
      <h1 className="text-center text-title-color display-4">Devlog</h1>
      <div className="mt-3">

        {data.map((v, i) => (
          <div className="my-3">
            <hr className="w-50 mx-auto text-color border-3"/>
            <DevlogItem data={v} key={i} anyOpen={anyOpen} setAny={setAny}/>
          </div>
        ))}
      </div>
    </section>
  );
}
