
//Audio

window.onload = function() {
    document.getElementById("my_audio").play();
}

    //Modal for start page

      // Get the modal
      var modal = document.getElementById("myModal");
      
      // Get the button that opens the modal
      var btn = document.getElementById("btn1");
      
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];
      
      // When the user clicks the button, open the modal 
      btn.onclick = function() {
        modal.style.display = "block";
      }
      
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

      //page 2
      var page1 = document.getElementById('bodyy');
      var StartButton = document.getElementById("modal-button"); 
      StartButton.addEventListener('click', startGame);
      var page2 = document.getElementById('page2')

      function startGame(){
      page1.classList.add('hide');
      modal.style.display = "none";
      page2.classList.remove('hide');
      }

      //page 3
      var page3 = document.getElementById('page3')
      let ReadyButton = document.getElementById('btn-ready')
      ReadyButton.addEventListener('click', DisplayQuestions);

      function DisplayQuestions () {
          page2.classList.add('hide');
          page3.classList.remove('hide')
      }