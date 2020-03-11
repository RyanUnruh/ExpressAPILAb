$(document).ready(()=>{
  fetchChirps()

  $("#form-container").submit((e) => {
      e.preventDefault()
      $.ajaxSetuo({
        headers: {
          'Accept':
        }
      })
  })
})

fetchChirps()=> {
$.get("/api/chirps/", chirps => {
  console.log(chirps);
  let writeArr = Object.entries(chirps);
  writeArr.forEach(chirp => {
    $('chirps-container').append(
      <div className="card" style="width: 18rem">
           <div className="card-body">
             <h5 className="cardtitle"></h5>
             <p className="card-text"></p>
           </div>
      </div>
  })
});
}