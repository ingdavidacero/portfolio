import './index.scss'

function AnimacionLetras({palabra}){
    return(
        <span className="text-animate-hover">
            {palabra}
        </span>
    )
}

export default AnimacionLetras