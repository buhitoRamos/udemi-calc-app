import React from 'react'

// Esta libreria ayuda resuelve muchos problemas que se dan cuando se envian parametros de tipos invalidos u se omiten.
import PropTypes from 'prop-types'

const Result = ({value}) => {
    return(
        <div className="result">
            {value}
        </div>
    )
}

//Con esto verifico que values sea String y que llegue.
Result.propTypes = {
    value: PropTypes.string.isRequired
}

//Con esto en caso que no llegue ningun valor se le asignara 0 a la propiedad.
Result.defaultProps = {
    value:'0'
}
export default Result