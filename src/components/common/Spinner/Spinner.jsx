import spinner from '../../../assets/img/spinner.svg';

const Spinner = () => {
  return (
    <div style={ {backgroundColor: 'indigo'} }>
      <img src={spinner} alt={spinner} style={ {height: '100vh', display: 'block', margin: '0 auto'} } />
    </div>
  )
}

export default Spinner;