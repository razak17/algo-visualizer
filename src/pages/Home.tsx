const Home = () => {
	return (
		<div className='p-2 md:ml-6 md:mr-6'>
        <div className='m-3'>
          <h3>Visualize algorithms for a better understanding</h3>
      </div>
			<div className='flex flex-wrap lg:flex-nowrap'>
				<div className='flex m-3 flex-wrap justify-center gap-6 items-center'>
					{['Sorting', 'Path Finder', 'Prime Numbers'].map((item) => (
						<a href='#' key={`card-${item}`}>
							<div className='h-50 text-gray-200 dark:bg-secondary-dark-bg md:w-72 p-4 rounded-2xl'>
								<h1 className='text-2xl opacity-0.9 p-4 hover:drop-shadow-xl'>
									{item}
								</h1>
								<p className='p-2 mt-1 text-md text-gray-400'>
									Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
									cillum sint consectetur cupidatat.
								</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
