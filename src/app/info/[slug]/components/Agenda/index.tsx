import { Bullet } from "@/components";
import { agenda } from "@/mockData";

export default function Agenda() {
  return (
    <section>
      <h2 className="text-2xl text-primary font-bold">Estos es lo que veras en clase</h2>
      <div className="my-5">
        {agenda?.map((item) => (
          <div key={item.title} className="my-5">
            <h3 className="text-lg font-bold">{item.title}</h3>
            {item?.topics.map((topic) => (
              <ul key={`${new Date()}`} className="my-3 list-inside">
                <Bullet text={topic} />
              </ul>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
