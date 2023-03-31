import { RotatingLines } from 'react-loader-spinner';

function LoadingView() {
  return (
    <div className="Loading">
      <RotatingLines
        strokeColor="blue"
        strokeWidth="2"
        animationDuration="0.75"
        width="96"
        visible={true}
      wrapperStyle=
      {{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      wrapperClassName="Loading"
      />
    </div>
  );
}

export default LoadingView;
