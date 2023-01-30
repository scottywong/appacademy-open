import {TailSpin} from 'react-loader-spinner';

function Loader({height,width,color}){

return (
        <TailSpin
        height={height}
        width={width}
        color={color}
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
        />)
}

export default Loader;