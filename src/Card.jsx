
function Card (props){
    console.log(props)
    return <div className="col-lg-4 col-sm-6 mb-4">
    <div className="card h-100">
       <a href="#"><img className="card-img-top" src={props.data.imageUrl} alt={props.data.title} height={"200PX"}/></a>
      <div className="card-body">
        <h4 className="card-title">
          <a href="#">{props.data.title}</a>
        </h4>
        <p className="card-text">{props.data.description}</p>
         </div>
       </div> 
     </div>
   }
   export default Card

   //.data .props remove  pannalam pannitu imgurl mattum vaikalam aprm consle remove pannanum aprm props la  {img title description}
   