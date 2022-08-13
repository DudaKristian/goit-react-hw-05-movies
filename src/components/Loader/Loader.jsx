import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div>
            <RotatingLines strokeColor="#f08b18" height={200} width={200} />
        </div>
    );
};

export default Loader;