// for the given JSON iterate overall of loops(for,for in,for of,for each)
 const work=['practise','class','codekata','task','revise'];
 // for each loop
 
  work.forEach(function(work){
    console.log(work);

  });
  //for of loop
    for(letclass of work){
        console.log(work);
    }
// for in loop
 for(let practise in work){
    console.log(practise [work]);
 }
 // for loop
  for(let i=0;i< work.length;i++){
    console.log(work);
  }

  // resume in Json

  var personalInfo={
    name:'kalai',
    age:'26',
    gender:'female',
    qualification:'m.com,m.phil',
  }

  //change to JSON
   let personInfoJSON=JSON.stringify(personalInfo);
      console.log(personInfoJSON);

    
    
    
    
     

        
    
    
        

        
   
               
              
