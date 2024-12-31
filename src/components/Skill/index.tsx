import "./style.css";

export default async function Skill() {
  return (
    <>
      <main className="p-10 flex flex-col gap-10 lg:flex-row">
        <section className="lg:w-1/2">
          <h4 className="text-[#80db66]  text-lg tracking-widest uppercase font-medium mt-5">
            My Skill
          </h4>
          <h2 className="text-3xl  font-semibold sm:text-[50px] lg:text-[70px] my-5 leading-[70px]">
            Growing Over Time
          </h2>
          <p className="text-[#4D4C5C] lg:text-xl my-5">
          With a commitment to continuous learning, I have developed a diverse skill set that spans web, software, and hardware development, along with system applications and project management.
          </p>
        </section>
        <section className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-5">
          <div className=" flex flex-col items-center">
            <div className="circle-border ">
              <p className=" text-3xl font-bold">90%</p>
            </div>
            <h2 className=" text-2xl font-semibold mt-4 text-center ">
              Web Development
            </h2>
          </div>

          <div className=" flex flex-col items-center">
            <div className="circle-border2 ">
              <p className=" text-3xl font-bold">95%</p>
            </div>
            <h2 className=" text-2xl font-semibold mt-4 text-center ">
              Mobile App Development
            </h2>
          </div>

          <div className=" flex flex-col items-center">
            <div className="circle-border3 ">
              <p className=" text-3xl font-bold">80%</p>
            </div>
            <h2 className=" text-2xl font-semibold mt-4 text-center ">
            Software Development
            </h2>
          </div>

          <div className=" flex flex-col items-center">
            <div className="circle-border4 ">
              <p className=" text-3xl font-bold">75%</p>
            </div>
            <h2 className=" text-2xl font-semibold mt-4 text-center ">
            System Applications
            </h2>
          </div>

          <div className=" flex flex-col items-center">
            <div className="circle-border ">
              <p className=" text-3xl font-bold">90%</p>
            </div>
            <h2 className=" text-2xl font-semibold mt-4 text-center ">
            Project Management
            </h2>
          </div>

          <div className=" flex flex-col items-center">
            <div className="circle-border5 ">
              <p className=" text-3xl font-bold">85%</p>
            </div>
            <h2 className=" text-2xl font-semibold mt-4 text-center ">
            Data Administration
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
