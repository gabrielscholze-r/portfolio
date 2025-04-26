import React, {useState} from "react";
import data from "../../assets/devlog/devlog.json";
import DevlogItem from "../../components/devlog/devlogItem/DevlogItem";

export default function Devlog() {
    const [anyOpen, setAny] = useState(false);
    const [filter, setFilter] = useState("");

    const handleChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredData = filter
        ? data.filter((item) => item.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase())))
        : data;


    return (
        <section className="mt-5">
            <h1 className="text-center text-title-color display-4">Devlog</h1>
            <h3 className="text-center text-title-color fs-4 fs-md-3">
                Atualizações, experimentos e ideias
            </h3>
            <hr className="w-50 mx-auto text-color border-3"/>
            <select
                name="category"
                id="category"
                value={filter}
                onChange={handleChange}
                className="form-select w-auto mx-3 shadow-custom text-title-color mx-auto my-3 bg-background-color"
            >
                <option value="" disabled>Filtrar</option>
                <option value="">Todos</option>
                <option value="Portfolio">Portfolio</option>
                <option value="Outros projetos">Outros projetos</option>
            </select>
            <div className="mt-3">
                {filteredData.map((v, i) => (
                    <div className="my-3" key={i}>
                        <DevlogItem data={v} anyOpen={anyOpen} setAny={setAny}/>
                        <hr className="w-50 mx-auto text-color border-3"/>
                    </div>
                ))}
            </div>
        </section>
    );
}
