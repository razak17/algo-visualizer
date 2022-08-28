import { FC } from '../types';

{/* <div className='w-44 flex flex-col items-center'> */}
{/* 	<form className='w-4/5 max-w-lg'> */}
{/* 		<div className='text-md text-center'>Select Speed</div> */}
{/* 		<div className='speed-slider flex flex-row relative w-full h-12 select-none' onChange={onChange}> */}
{/* 			<input */}
{/* 				type='radio' */}
{/* 				name='speed' */}
{/* 				id='slow' */}
{/* 				value={80} */}
{/* 				disabled={disabled} */}
{/* 			/> */}
{/* 			<label htmlFor='slow' current-speed='Slow'></label> */}
{/* 			<input */}

{/* 				type='radio' */}
{/* 				name='speed' */}
{/* 				id='medium' */}
{/* 				value={50} */}
{/* 				defaultChecked */}
{/* 				disabled={disabled} */}
{/* 			/> */}
{/* 			<label htmlFor='medium' current-speed='Medium'></label> */}
{/* 			<input type='radio' name='speed' id='fast' value={5} disabled={disabled} /> */}
{/* 			<label htmlFor='fast' current-speed='Fast'></label> */}
{/* 			<div className='slider-position'></div> */}
{/* 		</div> */}
{/* 	</form> */}
{/* </div> */}

const Slider: FC<{
	onChange: React.ChangeEventHandler<HTMLDivElement>;
	disabled: boolean;
}> = ({ onChange, disabled }) => {
	return (
    <div className='wrapper'>
      <form>
        <div className='slider-title'>Select Speed</div>
        <div className='speed-slider' onChange={onChange}>
          <input
            type='radio'
            name='speed'
            id='slow'
            value={80}
            disabled={disabled}
          />
          <label htmlFor='slow' current-speed='Slow'></label>
          <input
            type='radio'
            name='speed'
            id='medium'
            value={50}
            defaultChecked
            disabled={disabled}
          />
          <label htmlFor='medium' current-speed='Medium'></label>
          <input
            type='radio'
            name='speed'
            id='fast'
            value={5}
            disabled={disabled}
          />
          <label htmlFor='fast' current-speed='Fast'></label>
          <div className='slider-position'></div>
        </div>
      </form>
    </div>

	);
};

export default Slider;
