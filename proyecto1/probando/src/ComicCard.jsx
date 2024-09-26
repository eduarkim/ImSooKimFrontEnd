
import './App.css'

function ContainerCards(){
    const title = "DC Comics";
    const img =[
        
           "https://acdn.mitiendanube.com/stores/001/184/069/products/reino-de-los-supermanes-cov1-77983b8b7fb40ec32b15997760948652-640-0.jpg",
          "https://i1.whakoom.com/large/07/0a/d8b887ef002b49a1984bf19b6bf766f0.jpg",
          "https://i1.whakoom.com/small/1e/05/defa7078e92e46fb987d530097ebfa82.jpg",
         "https://images.cdn2.buscalibre.com/fit-in/360x360/d8/6c/d86c204d5df413b894b58bd9676cedb5.jpg",
    ];


    let objeto =[
        {title:"Superman", imagen:"https://acdn.mitiendanube.com/stores/001/184/069/products/reino-de-los-supermanes-cov1-77983b8b7fb40ec32b15997760948652-640-0.jpg"},
        {title: "Batman", imagen:"https://i1.whakoom.com/large/07/0a/d8b887ef002b49a1984bf19b6bf766f0.jpg"},
        {title: "Tarzán", imagen:"https://i1.whakoom.com/small/1e/05/defa7078e92e46fb987d530097ebfa82.jpg"},
        {title: "Punisher", imagen:"https://images.cdn2.buscalibre.com/fit-in/360x360/d8/6c/d86c204d5df413b894b58bd9676cedb5.jpg"}
    ]
        
    

    return(
            <div className='flex flex-wrap gap-6 justify-center'>
                {objeto.map(o=>(
                        <ComicCard title={o.title} image={o.imagen}></ComicCard>
                    ))}
            </div>
        
    );
}

function ComicCard({title, image}){
    return(
       <div className="relative group w-64 flex flex-col justify-between">
        <div className="bg-black relative h-full">
            <img 
            src={image} 
            alt={title} 
            className="w-full h-full transition-opacity duration-300 group-hover:opacity-30"
            
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center opacity-0">
                <button className="bg-yellow-500 text-black px-4 py-2 font-bold w-full">
                    Read More

                </button>
                <div className="bg-black absolute">
                </div>
            </div>
            <div className="bg-black/90 h-full w-full absolute left-1 top-1 -z-10"></div>

        </div>
        <div className="relative border-solid border-2 border-slate-400/30 pt-2 pb-6 pl-3">
        <h2 className="font-bold text-left">{title}</h2>
        <div className="h-1.5 w-1.5 bg-red-500 absolute bottom-0 right-0"></div>

        </div>
       </div>

    )
}
export {ContainerCards, ComicCard};