import AlphaDisplay from './AlphaDisplay';
import Timer from './Timer';
import './TypeMain.css'

const TypeMain =()=>{
return(
<>
<div className='MainWrapper'>

<h1 className='TheMainHeading'>The Typing Alpabet!</h1>
<div className='TheMainPara'>Typing game to see how fast you Type. Timer<br/>starts when you do:)</div>
<AlphaDisplay/>
<div></div>
<div><Timer/></div>
</div>


</>
)
}

export default TypeMain;