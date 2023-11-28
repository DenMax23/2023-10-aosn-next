import DisclosureBlock from '../components/disclosureBlock' 

export default function Page() {
    return (
      <>
       <div className=" mx-auto">  
        <h1 className=" text-5xl text-center">Асоціація органів самоорганізації населення</h1>
        <p className="text-2xl w-2/3 mx-auto mt-7">Асоціація є добровільним неурядовим, неприбутковим, непідп​риємницьким об`єднанням органів самоорганізації населення міста Вінниці, що створено ними з метою захисту своїх інтересів, поглиблення взаємодії та співпраці між ними.​</p>
       </div>
       <DisclosureBlock/>
      </>
    )
  }