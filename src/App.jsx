import React from 'react'
import Card from './Card'

function App() {
  let data = [
  {
    title:"heaven gate china",
    description: "Heaven's Gate, also known as Tianmen Cave, holds immense cultural significance in Chinese history and folklore. People believe that the cave served as a gateway between the mortal world and the heavens above, symbolising a passage to a higher realm",
    imageUrl: "https://www.travelandleisure.com/thmb/uHmJJ2iSWw9uelHUBuqsr_53CGY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gate-of-heaven-tianmen-mountain-china-HEAVENGATE1117-0866515910984beaa8d00ff8609189b3.jpg"
  },
  {
    title:"Water Fall",
    description: "A waterfall is any point in a river or stream where water flows over a vertical drop or a series of steep drops. Waterfalls also occur where meltwater drops over the edge of a tabular iceberg or ice shelf",
    imageUrl:"https://upload.wikimedia.org/wikipedia/commons/8/83/Shaki_Waterfall2.jpg"
  },
  {
    title:"Lotus Temple",
    description: "The temple is one of eight Bahá'í House of Worship facilities in the world and has welcomed over 70 million visitors since its completion, making it one of the most frequented architectural landmarks in the world.  From a denominational standpoint, the Lotus temple is open to all practitioners regardless of religious affiliation and functions more as a gathering place of worship to interested visitors",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Lovely_Lotus_temple.jpg"
  },
  {
    title:"Taj Mahal",
    description: "The mausoleum building is the central structure of the entire complex. It is a sizable, white marble structure standing on a 6-metre (20 ft) high square plinth with sides measuring 95.5 metres (313 ft) in length. The base structure is a large multi-chambered cube with chamfered corners forming an eight-sided structure that is approximately 57.3 metres (188 ft) long on each of the four long sides",
    imageUrl: "https://skift.com/wp-content/uploads/2022/06/GettyImages-1208049833-scaled-e1654782364566-1536x1024.jpg"
  }
  ]
  return<>
   <div className="container">
     <h1 className="my-4">React Reusable Componenets</h1>
     <div className="row">
        {
         data.map( (e,i)=>{
          return <Card data ={e}/> //imageurl call panni = e.imageurl data e delete pannanum key= {i 
         })
        }
     </div>
   </div>
  </>
}

export default App

// function Card (props){
//  console.log(props)
//  return <div className="col-lg-4 col-sm-6 mb-4">
//  <div className="card h-100">
//     <a href="#"><img className="card-img-top" src={props.data.imageUrl} alt={props.data.title} height={"200PX"}/></a>
//    <div className="card-body">
//      <h4 className="card-title">
//        <a href="#">{props.data.title}</a>
//      </h4>
//      <p className="card-text">{props.data.description}</p>
//       </div>
//     </div> 
//   </div>
// }





// {
//   player.map((e,i)=>{
//     return<h1 key={i}>welcome mr {e} to icc world cup 2024 </h1>
//   })
// }