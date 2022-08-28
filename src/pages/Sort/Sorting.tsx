import { useEffect, useState } from 'react';
import Dropdown from '../../components/Dropdown';
import {
  Sort,
  SortAlgorithm,
  useStateContext
} from '../../context/ContextProvider';
import { bubbleSort } from '../../lib/sort/bubbleSort';
import { randomValues } from '../../utils';
import { sortInfo } from '../../data';

const ARRAYSIZE = 80;

const Sorting = () => {
  const [animationSpeed, setAnimationSpeed] = useState(300);

  const {
    sortArray,
    setSortArray,
    sortAlgorithm,
    setSortAlgorithm,
    sortDisableOptions,
    setSortDisableOptions
  } = useStateContext();

  const randomizeArray = () => {
    for (let i = 0; i < sortArray.length; i++) {
      const bar = document.getElementById(i.toString())?.style;
      if (bar) bar.backgroundColor = '#ff7f50';
    }
    const array = [];
    for (let i = 0; i < ARRAYSIZE; i++) {
      array.push(randomValues(20, 400));
    }

    setSortArray(array);
  };

  useEffect(() => {
    randomizeArray();
  }, []);

  const handleSorting = () => {
    setSortDisableOptions(true);
    switch (sortAlgorithm.name) {
      case 'Bubble Sort':
        bubbleSort(
          sortArray,
          animationSpeed,
          setSortAlgorithm,
          setSortArray,
          setSortDisableOptions
        );
        break;
      default:
        break;
    }
  };

  const handleAlgorithm = (algorithm: Sort) => {
    const target = sortInfo.find((e) => e.name === algorithm);
    if (target)
      setSortAlgorithm({ name: algorithm, timeComplexity: target.timeComplexity });
  };

  return (
    <div className='p-2 md:ml-6 md:mr-6'>
      <div className='m-3'>
        <div>
          <h1>Sorting</h1>
          <button onClick={randomizeArray} disabled={sortDisableOptions} >
            New Array
          </button>
          <button onClick={handleSorting} disabled={sortDisableOptions}>
            Sort
          </button>
          <Dropdown
            onChange={(e) => handleAlgorithm(e.target.value as Sort)}
            disabled={sortDisableOptions}
          />
        </div>
        <div className='mt-8'>
          {sortArray &&
            sortArray.map((val, key) => {
              return (
                <div
                  className='w-2 ml-1 inline-block rounded-lg bg-orange-400'
                  id={key.toString()}
                  key={key}
                  style={{ height: val }}
                ></div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Sorting;
