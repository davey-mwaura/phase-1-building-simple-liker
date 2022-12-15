// Defining text characters for the empty and full hearts for you to use later.

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!
let like = document.getElementsByClassName("like")
console.log(like)
like.addEventListener("click",mimicServerCall)



// When a user clicks on a full heart
document.getElementById("full-heart").addEventListener("click", () => {
  // Change the heart back to an empty heart
  document.getElementById("full-heart").innerHTML = EMPTY_HEART;
  // Remove the .activated-heart class
  document.getElementById("full-heart").classList.remove("activated-heart");
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

