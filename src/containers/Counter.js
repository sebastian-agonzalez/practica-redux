import { connect } from 'react-redux';

//importo componente
import { Counter } from '../components/Counter';


//state
const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}
//actions dispatchs
const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch( { type: 'INCREMENT'} ),
        decrement: () => dispatch( { type: 'DECREMENT'} )
    }
}

//variable que aloja la funcion que retorna la ejecucion el metodo connect 
const createConnection = connect(mapStateToProps, mapDispatchToProps);

//creacion del componente con la coneccion entre el component Counter (dummy) y redux
const ComponentWithConnectionToRedux = createConnection(Counter);

export default ComponentWithConnectionToRedux;