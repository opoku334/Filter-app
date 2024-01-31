import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'
import remove from './images/icon-remove.svg'
import desktopHeader from './images/bg-header-desktop.svg'
import mobileHeader from './images/bg-header-mobile.svg'
function App() {
  const [languages,setLanguages] = useState([])
  // The state variable language is used to to filter by tools, level , languages and role by adding or removing them from it's array


  const filtered = data.filter( function(answer){
    // THe filter method is a higher order function that loops through every element in the data arrray , and if the 'function (answer)' returns true , it pushes that specific element into the filtered variable
    // The elements in the data array can be any data type , whether arrays, number , string  but in this case , elements in the array element are all objects
    const others = [...answer.languages,...answer.tools,answer.role,answer.level]   
    // Others variable in this case is an  array  consisting of all the tools languages with the help of array literals

    

    
  
    const combined = [...others,...languages]
    // The combined variable is also array consisting of all elements in the others array and also the state variable language with the use of array literals
    const Unduplicated = [... new Set(combined)]
    // The unduplicated variable is a filterred array  version of the combined array , with the use of 'new Set' method  , The 'new Set' method  removes all elements the appears more than once  in the combined array 

   
    if (Unduplicated.length == others.length){
      return true
    }
    // The reason for comparing the length of unduplicated with the length of others is because , if the length of unduplicated is the same as the length of others , then it means that all elements in the state variable languages
    // are also in the unduplicated variable. Note both variables contain arrays. this helps in filtering only the object in data  that contains the elements in the stata variable array
    

    

  })
  // The filtered variable now contains of all object that have every element in the state variable 'languages' which is also an array, initially , the filtered varaible contains every object in the data array since the state variable language is empty




  return (
    <>

      <header>

      </header>




      <main>

        <section className="filters">
          <ul className="filtering">
            {languages.map(element=>
              <div className='ware'>
                <p className="name">{element}</p>
                <button onClick={()=> setLanguages(languages.filter(remove=> remove != element))} className='close'><img src={remove} alt="" /></button>

              
              </div>
              )}

          </ul>
        </section>

        <section className="avaliable-jobs">



          <div className="job-info">

            {filtered.map(info =>

    
              <div key={info.id} className= {info.featured ? 'job-companies featured':'job-companies'}>
                <div className="company-logo">
                  <img src={info.logo} alt="" />
                </div>


                <div className='company-info'>
                  <div className="company-stats">
                    <h3 className='company-name'>{info.company}</h3>
                    {info.new ? <span className='new'>NEW !</span>:''}
                    {info.featured ? <span className='feature'>FEATURED</span> : ''}
                
                  </div>


                  <div className="job-avaliability">

                    <h3 className='position'>{info.position}</h3>

                    <div className="job-details">
                      <p>{info.postedAt}</p>
                      <p>{info.contract}</p>
                      <p>{info.location}</p>
                    </div>
                    <hr />


                  </div>

                </div>

                <div className="job-requirements">

                  <ul>
                    <li onClick={()=>setLanguages(languages.includes(info.role) ? languages:[...languages,info.role])}>{info.role}</li>
                    <li onClick={()=> setLanguages(languages.includes(info.level)? languages:[...languages,info.level])}>{info.level}</li>
                    {info.languages.map(lang=>
                        <li key={info.id + lang} onClick={()=> setLanguages(languages.includes(lang)? languages: [...languages,lang])}>{lang}</li>
                        
                      )}

                    {info.tools.map(tool =>
                        <li onClick={()=>setLanguages(languages.includes(tool)? languages:[...languages,tool])} key={info.id + tool}>{tool}</li>
                      )}  
                  
                    
                    
                  </ul>

                </div>

    
              </div>
              )}

          </div>



         

       
      
        </section>
        

      </main>
 
    </>
  )
}

export default App
