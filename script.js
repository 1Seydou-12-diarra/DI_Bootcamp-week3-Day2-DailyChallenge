
 
        function story() {
          // recuperation des element d'un formulaire 
          let storyDiv = document.getElementById("story");
          let  noun = document.getElementById("noun").value;
          let adjective = document.getElementById("adjective").value;
          let person = document.getElementById("person").value;
          let verb = document.getElementById("verb").value;
          let place = document.getElementById("place").value;
        //gener ation d'histoire 
          storyDiv.innerHTML = "I enjoy long, " + noun + " walks on the beach, getting " + adjective + " in the rain and " + person + ". I really like " +verb + " mixed with " + place ;  
        }
          // action sur le boutton 
        let libButton = document.getElementById('lib-button');
        libButton.addEventListener('click', story);