import './Error.css';

const Error = ({ error }) => {
  return (
    <div className='error-overlay'>
      <div className='error-overlay__central-error'>
        <svg
          width='50'
          height='50'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
        >
          <circle cx='12' cy='12' r='10' strokeWidth='2' />
          <path d='M8 10c0 .5.5 1 1 1s1-.5 1-1-.5-1-1-1-1 .5-1 1zm6 0c0 .5.5 1 1 1s1-.5 1-1-.5-1-1-1-1 .5-1 1z' />
          <path d='M7.8 15.2c.2-.2.5-.4.8-.5.7-.2 1.4-.3 2.1-.3s1.4.1 2.1.3c.3.1.6.3.8.5.2.2.5.4.7.6.4.4.9.8 1.3 1.1.2.2.3.3.3.5 0 .1 0 .2-.1.3-.1.1-.1.1-.2.1-.1 0-.3-.1-.4-.2-.2-.1-.4-.2-.6-.4-.4-.3-.9-.7-1.4-1-.5-.4-1.1-.6-1.7-.8-.6-.2-1.3-.2-1.9 0-.6.2-1.1.5-1.6.9-.3.2-.5.4-.7.6-.2.1-.4.2-.6.2-.1.1-.2.1-.2.1 0-.1 0-.2.1-.3s.2-.3.3-.5c.4-.3.9-.7 1.3-1 .2-.2.5-.4.7-.6z' />
        </svg>

        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Перезагрузить</button>
      </div>
    </div>
  );
};

export default Error;
